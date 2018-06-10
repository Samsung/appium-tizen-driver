import log from '../logger';
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

commands.inputText = async function (text) {
  return await this.bootstrap.sendInputAction("inputText", [text]);
};

commands.pressHardwareKey = async function (keyCode) {
  return await this.bootstrap.sendInputAction('pressHardwareKey', [keyCode]);
};

commands.back = async function () {
  return await this.bootstrap.sendInputAction('back');
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
