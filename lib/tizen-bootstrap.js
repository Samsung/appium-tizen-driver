import net from 'net';
import path from 'path';
import _ from 'lodash';
import commands from './commands/index';
import { errorFromCode } from 'appium-base-driver';
import { sleep } from 'asyncbox';
import log from './logger';


const COMMAND_TYPES = {
  ACTION: 'action',
  SHUTDOWN: 'shutdown'
};

class TizenBootstrap {
  constructor (sdb, systemPort = 8888, webSocket = undefined) {
    this.appPackage;
    this.sdb = sdb;
    this.systemPort = systemPort;
    this.webSocket = webSocket;
    this.ignoreUnexpectedShutdown = false;
    this.isRpmInstalled = false;
    this.uiautomatorService = 'uiautomator';
    this.uiautomatorPkg = 'uiautomator-0.1.1-1.armv7l';
    this.uiautomatorRpm = 'uiautomator-0.1.1-1.armv7l.rpm';

    for (let [cmd, fn] of _.pairs(commands)) {
      TizenBootstrap.prototype[cmd] = fn;
    }
  }

  async start (appPackage) {
    try {
      this.appPackage = appPackage;
      await this.init();
      await this.sdb.forwardPort(this.systemPort, 8888);
      if (!this.isRpmInstalled) {
        await sleep(16000);
      } else {
        await sleep(8000);
      }

      return await new Promise ((resolve, reject) => {
        try {
          if (!this.socketClient) {
            this.socketClient = net.connect(this.systemPort);
            this.socketClient.on('error', (err) => {
              if (!this.ignoreUnexpectedShutdown) {
                throw new Error(`Tizen bootstrap socket crashed: ${err}`);
              }
            });
            this.socketClient.once('connect', () => {
              log.info("Tizen bootstrap socket is now connected");
              resolve();
            });
          } else {
            log.info("SocketClient already Created");
          }
        } catch (err) {
          reject(err);
        }
        this.socketClient.setEncoding('utf8');
      });
    } catch (err) {
      log.errorAndThrow(`Error occured while starting TizenBootstrap. Original error: ${err}`);
    }
  }

  async sendCommand (type, extra = {}) {
    if (this.appPackage && type !== COMMAND_TYPES.SHUTDOWN) {
      let isStartedApp = await this.sdb.isStartedApp(this.appPackage);
      if (!isStartedApp) {
        await this.sdb.startApp(this.appPackage, { timeout: 20000 });
      }
    }

    if (!this.socketClient) {
      throw new Error('Socket connection closed unexpectedly');
    }

    return await new Promise((resolve, reject) => {
      let cmd = Object.assign({ cmd: type }, extra);
      let cmdJson = `${JSON.stringify(cmd)} \n`;
      log.debug(`Sending command to tizen: ${_.trunc(cmdJson, 1000).trim()}`);
      this.socketClient.write(cmdJson);
      this.socketClient.setEncoding('utf8');
      let streamData = '';
      this.socketClient.on('data', (data) => {
        log.debug("Received command result from bootstrap");
        try {
          streamData = JSON.parse(streamData + data);
          this.socketClient.removeAllListeners('data');
          if (streamData.status === 0) {
            resolve(streamData.value);
          }
          reject(errorFromCode(streamData.status));
        } catch (ign) {
          log.debug("Stream still not complete, waiting");
          streamData += data;
        }
      });
    });
  }

  async sendAction (action, params = {}) {
    let extra = { action, params };
    return await this.sendCommand(COMMAND_TYPES.ACTION, extra);
  }

  async shutdown () {
    if (this.socketClient) {
      await this.sendCommand(COMMAND_TYPES.SHUTDOWN);
      this.socketClient.destroy();
    }

    await this.removeService(this.uiautomatorService, this.uiautomatorPkg);
    await this.sdb.removePortForward(this.systemPort);
  }

  async init () {
    await this.sdb.root();

    const rootDir = path.resolve(__dirname, '..', '..');
    const rpmPath = path.resolve(rootDir, 'rpm');
    let isEmulator= false;

    if (this.sdb.curDeviceId.includes('emulator')) {
      isEmulator = true;
    }

    if (isEmulator) {
      this.uiautomatorPkg = 'uiautomator-0.1.1-1.i686';
      this.uiautomatorRpm = 'uiautomator-0.1.1-1.i686.rpm';
    }

    this.isRpmInstalled = await this.sdb.isRpmInstalled(this.uiautomatorPkg);
    if (!this.isRpmInstalled) {
      await this.installService(this.uiautomatorRpm, rpmPath);
    }

    //await this.sdb.killProcess('uiautomator');
    //await this.sdb.startExec('uiautomator');
  }

  set ignoreUnexpectedShutdown (ignore) {
    log.debug(`${ignore ? 'Ignoring' : 'Watching for'} bootstrap disconnect`);
    this._ignoreUnexpectedShutdown = ignore;
  }

  get ignoreUnexpectedShutdown () {
    return this._ignoreUnexpectedShutdown;
  }
}

export { TizenBootstrap, COMMAND_TYPES };
export default TizenBootstrap;
