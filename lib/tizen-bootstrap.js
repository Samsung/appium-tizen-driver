import net from 'net';
import _ from 'lodash';
import commands from './commands/index';
import { errorFromCode } from 'appium-base-driver';
import { sleep } from 'asyncbox';
import path from 'path';
import log from './logger';
import B from 'bluebird';


const COMMAND_TYPES = {
  ACTION: 'action',
  SHUTDOWN: 'shutdown'
};

class TizenBootstrap {
  constructor (sdb, systemPort = 8888, opts = {}) {
    this.appPackage;
    this.sdb = sdb;
    this.systemPort = systemPort;
    this.opts = opts;
    this.webSocket = opts.webSocket;
    this.ignoreUnexpectedShutdown = false;
    this.uiautomator = 'org.tizen.uiautomator';
    this.uiautomatorVersion = '1.0.0';
    this.isRestart = false;

    for (let [cmd, fn] of _.toPairs(commands)) {
      TizenBootstrap.prototype[cmd] = fn;
    }
  }

  async start (appPackage) {
    this.appPackage = appPackage;
    await this.init();
    await this.sdb.forwardPort(this.systemPort, 8888);
    await sleep(6000);

    return await this.connectSocket();
  }

  async connectSocket () {
    try {
      return await new B((resolve, reject) => {
        try {
          if (!this.socketClient) {
            this.socketClient = net.connect(this.systemPort);
            this.socketClient.setEncoding('utf8');
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
            log.debug("Stream still not complete, waiting");
            streamData += data;
          }
        });
        this.socketClient.setTimeout(15000);
        this.socketClient.on('timeout', () => {
          this.socketClient.destroy();
          this.socketClient = null;
          this.isRestart = true;
          reject(errorFromCode(-1, "No response from Server"));
        });
        this.socketClient.on('end', () => {
          this.socketClient.destroy();
          this.socketClient = null;
          this.isRestart = true;
          reject(errorFromCode(-1, "Socket ended by Server"));
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

    await this.sdb.removePortForward(this.systemPort);
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
