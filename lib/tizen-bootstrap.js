import net from 'net';
import _ from 'lodash';
import commands from './commands/index';
import { errorFromCode } from 'appium-base-driver';
import { sleep } from 'asyncbox';
import { exec } from 'teen_process';
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
    this.isUiAutomatorInstalled = false;
    this.uiautomator = 'uiautomator';
    this.isRestartApp = false;

    for (let [cmd, fn] of _.pairs(commands)) {
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
      return await new Promise((resolve, reject) => {
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
      if (this.isRestartApp) {
        await sleep(5000);
        this.isRestartApp = false;
      }
      let isStartedApp = await this.sdb.isStartedApp(this.appPackage);
      if (!isStartedApp) {
        await this.sdb.startApp(this.appPackage);
        await sleep(3000);
        this.isRestartApp = false;
      }
    }


    if (!this.socketClient) {
      await this.connectSocket();
    }

    return await new Promise((resolve, reject) => {
      let cmd = Object.assign({ cmd: type }, extra);
      let cmdJson = `${JSON.stringify(cmd)} \n`;
      log.debug(`Sending command to tizen: ${_.trunc(cmdJson, 1000).trim()}`);

      try {
        this.socketClient.removeAllListeners('timeout');
        this.socketClient.removeAllListeners('end');
        this.socketClient.write(cmdJson);
        this.socketClient.on('data', (data) => {
          let streamData = '';
          log.debug("Received command result from bootstrap : "+data);
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
        this.socketClient.setTimeout(15000);
        this.socketClient.on('timeout', () => {
          this.socketClient.destroy();
          this.socketClient = null;
          this.isRestartApp = true;
          reject(errorFromCode(-1, "No response from Server"));
        });
        this.socketClient.on('end', () => {
          this.socketClient.destroy();
          this.socketClient = null;
          this.isRestartApp = true;
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

  async sendInputAction (action, params = []) {
    if (action === 'touchDown') {
      action = 'down';
    } else if (action === 'touchUp') {
      action = 'up';
    } else if (action === 'touchMove') {
      action = 'move';
    }

    let actions = [];
    let actionPath = "dbus-send --system --type=signal /org/tizen/appium org.tizen.appium.Input";
    actions.push(actionPath);
    actions.push(`string:'${action}'`);

    for (let i = 0; i < params.length; i++) {
      if (params[i]) {
        actions.push(`string:'${params[i]}'`);
      } else if (params[i] === 0) {
        actions.push(`string:'${params[i]}'`);
      } else {
        actions.push("string:'null'");
      }
    }

    if (params.length === 0) {
      actions.push("string:'null'");
      actions.push("string:'null'");
    } else if (params.length === 1) {
      actions.push("string:'null'");
    }

    await this.sdb.shell(actions);

    return true;
  }

  async shutdown () {
    if (this.socketClient) {
      this.socketClient.end();
      this.socketClient.destroy();
      this.socketClient = null;
    }

    let uiautomatorStatus = await this.sdb.processExists(this.uiautomator);
    if (uiautomatorStatus) {
      await this.sdb.killProcess(this.uiautomator);
    }

    await this.sdb.removePortForward(this.systemPort);
  }

  async init () {
    await this.sdb.root();

    this.isUiAutomatorInstalled = await this.sdb.fileExists(`/usr/bin/${this.uiautomator}`);
    if (!this.isUiAutomatorInstalled) {
      await this.pushUiAutomator();
    }

    let uiautomatorStatus = await this.sdb.processExists(this.uiautomator);
    if (!uiautomatorStatus) {
      exec(this.sdb.executable.path, ['shell', `/usr/bin/${this.uiautomator}`]);
    } else {
      await this.sdb.killProcess(this.uiautomator);
      await sleep(1000);
      exec(this.sdb.executable.path, ['shell', `/usr/bin/${this.uiautomator}`]);
    }
  }

  async pushUiAutomator () {
    let arch = await this.sdb.shell(`uname -a`);
    let file = this.uiautomator;

    if (arch.indexOf('i686') != -1) {
        file += '_i586';
    } else if (arch.indexOf('x86_64') != -1) {
        file += '_x86_64';
    } else {
        file += '_armv7l';
    }

    log.debug('Target Architecture : ' + arch);
    await this.sdb.push(__dirname + `/../${file}`, `/usr/bin/${this.uiautomator}`);
  }

  async removeUiAutomator () {
    await this.sdb.shell('rm /usr/bin/uiautomator');
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
