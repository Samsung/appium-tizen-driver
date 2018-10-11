import log from '../logger';
import _ from 'lodash';
import { fs } from 'appium-support';
import path from 'path';

let commands = {}, helpers = {}, extensions = {};

commands.getDeviceTime = async function () {
  log.info('Attempting to capture tizen device date and time');
  try {
    let out = await this.sdb.shell(['date']);
    return out.trim();
  } catch (err) {
    log.errorAndThrow(`Could not capture device date and time: ${err}`);
  }
};

commands.pressKeyCode = async function (key) {
  return await this.bootstrap.sendAction("pressKey", { key });
};

commands.releaseKeyCode = async function (key) {
  return await this.bootstrap.sendAction("releaseKey", { key });
};

commands.keys = async function (keys) {
  let text = _.isArray(keys) ? keys.join('') : keys;
  let params = {
    elementId: "",
    text,
    replace: false
  };
  return await this.bootstrap.sendAction("element:setText", params);
};

commands.sendKey = async function (key) {
  return await this.bootstrap.sendAction('sendKey', { key });
};

commands.pressHardwareKey = async function (key) {
  return await this.sendKey(key);
};

commands.back = async function () {
  return await this.sendKey("XF86Back");
};

commands.installApp = async function (tpk) {
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
  return this.sdb.uninstall(appPackage);
};

commands.isAppInstalled = function (appPackage) {
  return this.sdb.isAppInstalled(appPackage);
};

commands.launchApp = async function () {
  return await this.startApp();
};

commands.startApp = async function (opts = {}) {
  return await this.sdb.startApp(this.opts.appPackage, opts);
};

commands.closeApp = async function () {
  await this.sdb.forceStop(this.opts.appPackage);
};

commands.isStartedApp = async function (opts = {}) {
  return await this.sdb.isStartedApp(this.opts.appPackage, opts);
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;
