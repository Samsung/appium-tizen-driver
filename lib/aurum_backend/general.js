import log from '../logger';
import _ from 'lodash';
import { fs } from 'appium-support';
import path from 'path';

import { errors } from 'appium-base-driver';
import messages from './aurum_pb';
import utils from './utils';

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

commands.launchApp = async function () {
  return await this.startApp();
};

commands.startApp = async function (opts = {}) {
  return await utils.grpcAsync(this.bootstrap.client.launchApp, this.bootstrap.client, new messages.ReqLaunchApp({packageName: this.opts.packageName}));
};

commands.closeApp = async function () {
  await utils.grpcAsync(this.bootstrap.client.closeApp, this.bootstrap.client, new messages.ReqCloseApp({packageName: this.opts.appPackage}));
};

commands.isStartedApp = async function (opts = {}) {
  const appStatus = await utils.grpcAsync(this.bootstrap.client.getAppInfo, this.bootstrap.client, new messages.ReqGetAppInfo({packageName: this.opts.packageName}));

  return appStatus.getIsrunning();
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;
