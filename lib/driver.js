/*
 * Copyright (c) 2018-2021 Samsung Electronics Co., Ltd All Rights Reserved
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
import { BaseDriver, DeviceSettings, errors } from 'appium-base-driver';
import desiredConstraints from './desired-caps';
import { commands, SUPPORTED_LOCATOR_STRATEGIES, AURUM_PORT } from './commands/index';
import helpers from './tizen-helpers';
import log from './logger';
import _ from 'lodash';
import { DEFAULT_SDB_PORT } from 'appium-sdb';
import { tempDir } from 'appium-support';
//TODO: grpc NPM package is deprecated and superseded by @grpc/grpc-js
// but the latter doesn't work - find out why and replace grpc with grpc-js
const grpc = require('grpc');
import services from './commands/aurum_grpc_pb';

const NO_PROXY = [
  ['POST', new RegExp('^/session/[^/]+/appium')],
  ['GET', new RegExp('^/session/[^/]+/appium')],
];

const AURUM_APP_NAME = 'org.tizen.aurum-bootstrap';

class TizenDriver extends BaseDriver {
  constructor (opts = {}, shouldValidateCaps = true) {
    super(opts, shouldValidateCaps);

    this.desiredCapConstraints = desiredConstraints;
    this.jwpProxyActive = false;
    this.jwpProxyAvoid = _.clone(NO_PROXY);
    this.settings = new DeviceSettings({ignoreUnimportantViews: false});

    for (let [cmd, fn] of _.toPairs(commands)) {
      TizenDriver.prototype[cmd] = fn;
    }
  }

  async createSession (caps) {
    try {
      let sessionId;
      [sessionId] = await super.createSession(caps);

      let serverDetails = {platform: 'LINUX',
                           webStorageEnabled: false,
                           takesScreenshot: false,
                           javascriptEnabled: true,
                           databaseEnabled: false,
                           networkConnectionEnabled: false,
                           locationContextEnabled: false,
                           warnings: {},
                           desired: this.caps};
      this.caps = Object.assign(serverDetails, this.caps);

      let defaultOpts = {
        tmpDir: await tempDir.staticDir(),
        fullReset: false,
        sdbPort: DEFAULT_SDB_PORT,
        tizenInstallTimeout: 50000
      };
      _.defaults(this.opts, defaultOpts);

      if (this.opts.noReset === true) {
        this.opts.fullReset = false;
      }
      if (this.opts.fullReset === true) {
        this.opts.noReset = false;
      }
      this.opts.fastReset = !this.opts.fullReset && !this.opts.noReset;
      this.opts.skipUninstall = this.opts.fastReset || this.opts.noReset;

      let {udid, emPort} = await helpers.getDeviceInfoFromCaps(this.opts);
      this.opts.udid = udid;
      this.opts.emPort = emPort;

      this.sdb = await helpers.createSDB(this.opts.udid,
                                         this.opts.emPort,
                                         this.opts.sdbPort,
                                         this.opts.suppressKillServer);

      await this.startTizenSession(this.opts);
      return [sessionId, this.caps];
    } catch (e) {
      try {
        await this.deleteSession();
      } catch (ign) {}
      throw e;
    }
  }

  async appOnDevice (appPackage) {
    return await this.sdb.isAppInstalled(appPackage);
  }

  _createAurumClient () {
    return new Promise((resolve, reject) => {
      const client = new services.BootstrapClient(`127.0.0.1:${AURUM_PORT}`, grpc.credentials.createInsecure());
      const DEADLINE = new Date(Date.now() + 20_000);
      client.waitForReady(DEADLINE, function (...args) {
        if (args.length === 0) {
          // No error!
          return resolve(client);
        }

        const error = args[0];
        log.error(`gRPC error: BootstrapClient is not ready after 20 seconds! Cause: ${error.name} (${error.message})`);
        throw new errors.SessionNotCreatedError(`Could not start Aurum gRPC client. Cause: ${error.name} (${error.message})`);
      });
    });
  }

  async startTizenSession () {
    if (!await this.appOnDevice(AURUM_APP_NAME)) {
      log.errorAndThrow(new errors.SessionNotCreatedError(`Aurum bootstrap (${AURUM_APP_NAME}) has to be installed on the device to run Appium`));
    }

    if (await this.sdb.isStartedApp(AURUM_APP_NAME)) {
      await this.sdb.forceStop(AURUM_APP_NAME);
    }
    const wasSuccessfullyLaunched = await this.sdb.startApp(AURUM_APP_NAME);
    if (!wasSuccessfullyLaunched) {
      log.errorAndThrow(new errors.SessionNotCreatedError(`Could not start ${AURUM_APP_NAME}`));
    }

    if (this.opts.app) {
      await this.installApp(this.opts.app);
    }
    await this.sdb.forwardPort(AURUM_PORT, AURUM_PORT);

    this.aurumClient = await this._createAurumClient();
    this.locatorStrategies = SUPPORTED_LOCATOR_STRATEGIES;

    let isAppInstalled = await this.isAppInstalled(this.opts.appPackage);
    if (!isAppInstalled) {
      log.errorAndThrow('Could not find to App in device.');
    }

    if (this.opts.appPackage) {
      let isStartedApp = await this.isStartedApp();
      if (isStartedApp) {
        await this.closeApp();
      }
      await this.startApp({ timeout: 20000 });
    }

    if (this.opts.ignoreUnimportantViews) {
      await this.settings.update({ignoreUnimportantViews: this.opts.ignoreUnimportantViews});
    }

    try {
      this.screenResolution = await helpers.getScreenResolution(this.opts.sdbPort);
    } catch (error) {
      if (this.opts.screenResolution != undefined
          && typeof this.opts.screenResolution === 'object'
          && this.opts.screenResolution !== null
          && 'x' in this.opts.screenResolution
          && 'y' in this.opts.screenResolution) {
        this.screenResolution = this.opts.screenResolution;
      } else {
        throw error;
      }
    }
  }

  async deleteSession () {
    log.debug('Shutting down Tizen driver');
    await super.deleteSession();
    if (this.aurumClient) {
      await this.closeApp();
      if (await this.sdb.isStartedApp(AURUM_APP_NAME)) {
        await this.sdb.forceStop(AURUM_APP_NAME);
      }
      if (this.opts.fullReset && !this.opts.skipUninstall && !this.appOnDevice(this.opts.appPackage)) {
        await this.sdb.uninstall(this.opts.appPackage);
      }

      grpc.closeClient(this.aurumClient);
    } else {
      log.debug("Called deleteSession but bootstrap wasn't active");
    }
  }

  validateDesiredCaps (caps) {
    let res = super.validateDesiredCaps(caps);
    if (!res) { return res; }

    if (!caps.appPackage) {
      let msg = 'The desired capabilities must include an appPackage';
      log.errorAndThrow(msg);
    }
  }

  proxyActive (sessionId) {
    super.proxyActive(sessionId);

    return this.jwpProxyActive;
  }

  getProxyAvoidList (sessionId) {
    super.getProxyAvoidList(sessionId);

    return this.jwpProxyAvoid;
  }

  canProxy (sessionId) {
    super.canProxy(sessionId);

    return false;
  }
}

export { TizenDriver };
export default TizenDriver;
