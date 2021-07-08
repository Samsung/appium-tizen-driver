import { BaseDriver, DeviceSettings } from 'appium-base-driver';
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

class TizenDriver extends BaseDriver {
  constructor (opts = {}, shouldValidateCaps = true) {
    super(opts, shouldValidateCaps);

    // TODO: review ctor
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

  get appOnDevice () {
    return this.helpers.isPackageOrBundle(this.opts.appPackage);
  }

  _createAurumClient () {
    return new services.BootstrapClient(`127.0.0.1:${AURUM_PORT}`, grpc.credentials.createInsecure());
  }

  async startTizenSession () {
    if (this.opts.app) {
      await this.installApp(this.opts.app);
    }

    // TODO: change this.bootstrap.* to this.aurumClient.*
    // TODO: this.bootstrap.sdb to this.sdb
    this.aurumClient = this._createAurumClient();
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
  }

  async deleteSession () {
    log.debug('Shutting down Tizen driver');
    await super.deleteSession();
    if (this.aurumClient) {
      await this.aurumClient.closeApp();
      if (this.opts.fullReset && !this.opts.skipUninstall && !this.appOnDevice) {
        await this.sdb.uninstall(this.opts.appPackage);
      }
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
