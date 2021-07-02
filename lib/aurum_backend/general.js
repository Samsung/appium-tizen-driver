import log from '../logger';
import _ from 'lodash';
import { fs } from 'appium-support';
import path from 'path';

import { errors } from 'appium-base-driver';

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
  /* TODO: rewrite using Aurum? */
  const rootDir = path.resolve(__dirname, '..', '..', '..');
  const tpkPath = path.resolve(rootDir, 'app');

  let fullPath = path.resolve(tpkPath, tpk);
  if (!(await fs.exists(fullPath))) {
    log.errorAndThrow(`Could not find app tpk at ${tpk}`);
    return false;
  }
  return this.sdb.install(fullPath);
};

commands.removeApp = function (appPackage) {
  /* TODO: rewrite using Aurum? */
  return this.sdb.uninstall(appPackage);
};

commands.isAppInstalled = async function (appPackage) {
  /* TODO: rewrite using Aurum? */
  return this.sdb.isAppInstalled(appPackage);
};

// The 4 commands below need to be rewritten using Aurum
// In initial tests, Aurum-app communication worked only
// when app was started using Aurum commands
commands.launchApp = async function () {
  throw new errors.NotImplementedError('TODO');
};

commands.startApp = async function (opts = {}) {
  throw new errors.NotImplementedError('TODO');
};

commands.closeApp = async function () {
  throw new errors.NotImplementedError('TODO');
};

commands.isStartedApp = async function (opts = {}) {
  throw new errors.NotImplementedError('TODO');
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;
