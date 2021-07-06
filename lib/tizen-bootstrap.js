import net from 'net';
import _ from 'lodash';
import ui_automator_commands from './commands/index';
import { errorFromCode, errors } from 'appium-base-driver';
import { sleep } from 'asyncbox';
import path from 'path';
import log from './logger';
import B from 'bluebird';

import * as aurum from './aurum_backend/index';
//TODO: grpc NPM package is deprecated and superseded by @grpc/grpc-js
// but the latter doesn't work - find out why and replace grpc with grpc-js
const grpc = require('grpc');
import messages from './aurum_backend/aurum_pb';
// const grpc = require('@grpc/grpc-js');
import services from './aurum_backend/aurum_grpc_pb';

import { throwOnUnsuccessfulAurumCall } from './aurum_backend/utils';


const COMMAND_TYPES = {
  ACTION: 'action',
  SHUTDOWN: 'shutdown'
};

const LEGACY_SYSTEM_PORT = 8888;

class AbstractMethodError extends Error {
  constructor (message = null) {
    super(message || 'This is an abstract method with no implementation. Call one of its overriden implementations.');
    this.name = AbstractMethodError;
  }
}

class TizenBootstrap {
  constructor (sdb, opts, commands) {
    this.appPackage;
    this.sdb = sdb;
    this.opts = opts;
    this.webSocket = opts.webSocket; // TODO: remove it? Where it's used?
    this.ignoreUnexpectedShutdown = false;
    this.isRestart = false;

    this.supportedLocatorStrategies = [
      'id',
      'accessibility id',
      'class name',
      'name'
    ];

    for (let [cmd, fn] of _.toPairs(commands)) {
      TizenBootstrap.prototype[cmd] = fn;
    }
  }

  async start (appPackage) {
    //TODO: do we really need appPackage argument in Aurum backend?
    throw new AbstractMethodError();
  }

  async shutdown () {
    throw new AbstractMethodError();
  }

  set ignoreUnexpectedShutdown (ignore) {
    log.debug(`${ignore ? 'Ignoring' : 'Watching for'} bootstrap disconnect`);
    this._ignoreUnexpectedShutdown = ignore;
  }

  get ignoreUnexpectedShutdown () {
    return this._ignoreUnexpectedShutdown;
  }
}

class TizenLegacyBootstrap extends TizenBootstrap {
  constructor (sdb, opts = {}) {
    super(sdb, opts, ui_automator_commands);

    log.debug('DEBUG_LOG: HELLO FROM TizenLegacyBootstrap !!!!');

    this.uiautomator = 'org.tizen.uiautomator';
    this.uiautomatorVersion = '1.0.1';
  }

  async start (appPackage) {
    this.appPackage = appPackage;
    await this.init();
    await this.sdb.forwardPort(LEGACY_SYSTEM_PORT, LEGACY_SYSTEM_PORT);
    await sleep(6000);

    return await this.connectSocket();
  }

  async connectSocket () {
    try {
      return await new B((resolve, reject) => {
        try {
          if (!this.socketClient) {
            this.socketClient = net.connect(LEGACY_SYSTEM_PORT);
            this.socketClient.setEncoding('utf8');
            this.socketClient.on('error', (err) => {
              if (!this.ignoreUnexpectedShutdown) {
                throw new Error(`Tizen bootstrap socket crashed: ${err}`);
              }
            });
            this.socketClient.once('connect', () => {
              log.info('Tizen bootstrap socket is now connected');
              resolve();
            });
          } else {
            log.info('SocketClient already Created');
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      });
    } catch (err) {
      log.errorAndThrow(`Error occured while reconnection TizenBootstrap. Original error: ${err}`);
    }
  }

  async sendCommand (type, extra = {}) {
    if (this.appPackage && type !== COMMAND_TYPES.SHUTDOWN) {
      if (this.isRestart) {
        await sleep(5000);
        await this.restartUIAutomator();
        this.isRestart = false;
      }
      let isStartedApp = await this.sdb.isStartedApp(this.appPackage);
      if (!isStartedApp) {
        await this.sdb.startApp(this.appPackage);
        await sleep(10000);
        this.isRestart = false;
      }
    }

    if (!this.socketClient) {
      await this.connectSocket();
    }

    return await new B((resolve, reject) => {
      let cmd = Object.assign({ cmd: type }, extra);
      let cmdJson = `${JSON.stringify(cmd)} \n`;
      log.debug(`Sending command to tizen: ${_.truncate(cmdJson, { length: 1000 }).trim()}`);

      try {
        this.socketClient.removeAllListeners('timeout');
        this.socketClient.removeAllListeners('end');
        this.socketClient.write(cmdJson);
        this.socketClient.on('data', (data) => {
          let streamData = '';
          log.debug(`Received command result from bootstrap : ${data}`);
          try {
            streamData = JSON.parse(streamData + data);
            this.socketClient.removeAllListeners('data');
            if (streamData.status === 0) {
              resolve(streamData.value);
            } else if (streamData.status === 44) {
              this.restartUIAutomator();
              resolve(false);
            }
            reject(errorFromCode(streamData.status));
          } catch (ign) {
            log.debug('Stream still not complete, waiting');
            streamData += data;
          }
        });
        this.socketClient.setTimeout(15000);
        this.socketClient.on('timeout', () => {
          this.socketClient.destroy();
          this.socketClient = null;
          this.isRestart = true;
          reject(errorFromCode(-1, 'No response from Server'));
        });
        this.socketClient.on('end', () => {
          this.socketClient.destroy();
          this.socketClient = null;
          this.isRestart = true;
          reject(errorFromCode(-1, 'Socket ended by Server'));
        });
      } catch (err) {
        reject(errorFromCode(-1, err));
      }
    });
  }

  async sendAction (action, params = {}) {
    let extra = { action, params };
    return await this.sendCommand(COMMAND_TYPES.ACTION, extra);
  }

  async shutdown () {
    if (this.socketClient) {
      this.socketClient.end();
      this.socketClient.destroy();
      this.socketClient = null;
    }

    await this.stopUIAutomator();
    await this.uninstallUIAutomator();

    await this.sdb.removePortForward(LEGACY_SYSTEM_PORT);
  }

  async init () {

    let isUIAutomatorInstalled = await this.isAppInstalled(this.uiautomator);
    if (!isUIAutomatorInstalled) {
      await this.installUIAutomator();
    }

    let uiautomatorStatus = await this.isStartedUIAutomator();
    if (!uiautomatorStatus) {
      await this.startUIAutomator();
    } else {
      await this.stopUIAutomator();
      await sleep(2000);
      await this.startUIAutomator();
    }
  }

  async installUIAutomator () {
    let arch = await this.sdb.shell('uname -a');
    let rootDir = path.resolve(__dirname, '..', '..');
    let tpkPath = path.resolve(rootDir, 'uiautomator', `${this.uiautomator}-${this.uiautomatorVersion}`);

    if (arch.includes('i686')) {
      tpkPath += '-x86';
    } else {
      tpkPath += '-arm';
    }
    tpkPath += '.tpk';

    return await this.sdb.install(tpkPath);
  }

  async uninstallUIAutomator () {
    return await this.removeApp(this.uiautomator);
  }

  async startUIAutomator () {
    await this.sdb.startApp(this.uiautomator);
  }

  async stopUIAutomator () {
    await this.sdb.shell(`app_launcher -t ${this.uiautomator}`);
  }

  async restartUIAutomator () {
    await this.stopUIAutomator();
    await this.startUIAutomator();
  }

  async isStartedUIAutomator () {
    return await this.sdb.isStartedApp(this.uiautomator);
  }

}

class TizenAurumBootstrap extends TizenBootstrap {
  constructor (sdb, opts = {}) {
    super(sdb, opts, aurum.commands);

    // TODO: let the user set this IP? Is it needed?
    const credentials = grpc.credentials.createInsecure();
    this.client = new services.BootstrapClient(`127.0.0.1:${aurum.SYSTEM_PORT}`,
                                              credentials);
    //  grpc.credentials.createInsecure());
    this.supportedLocatorStrategies = aurum.SUPPORTED_LOCATOR_STRATEGIES;
  }

  async start (appPackage) {
    new Promise((resolve, reject) => {
      this.client.sync(new messages.ReqEmpty(), (error, result) => {
        throwOnUnsuccessfulAurumCall('start', error, result, 'sync');

        log.info('TizenAurumBootstrap started');
        return resolve();
      });
    });
  }

  async shutdown () {
    throw new NotImplementedError();
  }

  set ignoreUnexpectedShutdown (ignore) {
    log.debug(`${ignore ? 'Ignoring' : 'Watching for'} bootstrap disconnect`);
    this._ignoreUnexpectedShutdown = ignore;
  }

  get ignoreUnexpectedShutdown () {
    return this._ignoreUnexpectedShutdown;
  }
}

function TizenBootstrapFactory (sdb, opts) {
  if (new.target) {
    throw new Error('This function is not a constructor, but a factory. Don\'t precede its call with "new"');
  }

  if (opts.tizenBackend === 'aurum') {
    return new TizenAurumBootstrap(sdb, opts);
  } else {
    log.debug('Creating TizenLegacyBootstrap');
    return new TizenLegacyBootstrap(sdb, opts);
  }
}


export { TizenBootstrapFactory, COMMAND_TYPES };
export default TizenBootstrapFactory;
