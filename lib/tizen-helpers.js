import _ from 'lodash';
import logger from './logger';
import SDB from 'appium-sdb';

let helpers = {};

helpers.getDeviceInfoFromCaps = async function (opts = {}) {
  let sdb = await SDB.createSDB({
    sdbPort: opts.sdbPort
  });
  let udid;
  if (opts.udid) {
    udid = opts.udid;
  } else {
    udid = opts.deviceName;
  }

  let emPort = null;
  let status = false;

  if (udid.includes("192.168.250.250") || udid.includes("192.168.1.11")) {
    let result = await sdb.ConnectDevice(udid);
    if (result) {
      udid = udid + ":26101";
    }
  }

  logger.info("Retrieving device list");

  let devices = await sdb.getDevicesWithRetry();
  if (devices.length > 1) {
    for (let i = 0; i < devices.length; i++) {
      if (udid === devices[i].udid) {
        status = true;
      }
    }
  }
  if (!status) {
    udid = devices[0].udid;
  }
  emPort = sdb.getPortFromEmulatorString(udid);

  logger.info(`Using device: ${udid}`);
  return { udid, emPort };
};

helpers.createSDB = async function (udid, emPort, sdbPort, suppressKillServer) {
  let sdb = await SDB.createSDB({sdbPort, suppressKillServer});

  sdb.setDeviceId(udid);
  if (emPort) {
    sdb.setEmulatorPort(emPort);
  }

  return sdb;
};

helpers.truncateDecimals = function (number, digits) {
  let multiplier = Math.pow(10, digits);
  let adjustedNum = number * multiplier;
  let truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

  return truncatedNum / multiplier;
};

helpers.removeNullProperties = function (obj) {
  for (let key of _.keys(obj)) {
    if (_.isNull(obj[key]) || _.isUndefined(obj[key])) {
      delete obj[key];
    }
  }
};

export { helpers };
export default helpers;
