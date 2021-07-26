import log from '../logger';
import _ from 'lodash';
import { fs } from 'appium-support';
import path from 'path';

import { errors } from 'appium-base-driver';
import messages from './aurum_pb';
import { throwOnUnsuccessfulAurumCall } from './utils';

let commands = {}, helpers = {}, extensions = {};

commands.getDeviceTime = async function () {
  /* TODO: rewrite using Aurum command? */
  log.info('Attempting to capture tizen device date and time');
  try {
    let out = await this.sdb.shell(['date']);
    return out.trim();
  } catch (err) {
    log.errorAndThrow(`Could not capture device date and time: ${err}`);
  }
};

commands.pressKeyCode = async function (key) {
  throw new errors.NotImplementedError('TODO');
};

commands.keys = async function (keys) {
  throw new errors.NotImplementedError('TODO');
};

commands.sendKey = async function (key) {
  throw new errors.NotImplementedError('TODO');
};

commands.back = async function () {
};

commands.installApp = async function (tpk) {
  /*
   * This command should use SDB and not
   * Aurum, because it may be called before
   * 'org.tizen.aurum-bootstrap' is installed
   * and/or running.
   */
  const rootDir = path.resolve(__dirname, '..', '..', '..');
  const tpkPath = path.resolve(rootDir, 'app');

  let fullPath = path.resolve(tpkPath, tpk);
  if (!(await fs.exists(fullPath))) {
    log.errorAndThrow(`Could not find app tpk at ${tpk}`);
    return false;
  }
  return this.sdb.install(fullPath);
};

commands.removeApp = async function (appPackage) {
  /*
   * This command should use SDB and not
   * Aurum, because it is may be called before
   * 'org.tizen.aurum-bootstrap' is installed
   * and/or running.
   */
  return this.sdb.uninstall(appPackage);
};

commands.isAppInstalled = async function (appPackage) {
  /*
   * This command should use SDB and not
   * Aurum, because it is may be called before
   * 'org.tizen.aurum-bootstrap' is installed
   * and/or running.
   */
  return this.sdb.isAppInstalled(appPackage);
};

commands.launchApp = async function () {
  return await this.startApp();
};

commands.startApp = async function (opts = {}) {
  return new Promise((resolve, reject) => {
    const packageName = this.opts.appPackage;

    const callOptions = {};
    if ('timeout' in opts) {
      callOptions.deadline = new Date(Date.now() + opts.timeout);
    }

    const req = new messages.ReqLaunchApp();
    req.setPackagename(packageName);
    this.aurumClient.launchApp(req,
      callOptions,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('startApp', error, result, 'launchApp');

        log.info(`Application started: ${packageName}`);
        resolve();
      });
  });
};

commands.closeApp = async function () {
  return new Promise((resolve, reject) => {
    const packageName = this.opts.appPackage;

    const req = new messages.ReqCloseApp();
    req.setPackagename(packageName);
    this.aurumClient.closeApp(req,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('closeApp', error, result);

        log.info(`App closed: ${packageName}`);
        resolve();
      });
  });
};

commands.isStartedApp = async function (opts = {}) {
  return new Promise((resolve, reject) => {
    const packageName = this.opts.appPackage;

    const req = new messages.ReqGetAppInfo();
    req.setPackagename(packageName);
    this.aurumClient.getAppInfo(req,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('isStartedApp', error, result, 'getAppInfo');

        if (!result.getIsinstalled()) {
          const errorMessage = `The application is not installed ${packageName}`;
          log.error(errorMessage);
          throw new errors.InvalidArgumentError(errorMessage);
        }

        resolve(result.getIsrunning());
      });
  });
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;
