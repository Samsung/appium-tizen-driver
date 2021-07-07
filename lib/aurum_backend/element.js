import log from '../logger';
import _ from 'lodash';
import { sleep } from 'asyncbox';
let commands = {}, extensions = {};

import { errors } from 'appium-base-driver';

import { throwOnUnsuccessfulAurumCall } from './utils';
import messages from './aurum_pb';

// Spec: https://w3c.github.io/webdriver/webdriver-spec.html#get-element-attribute
commands.getAttribute = async function (attribute, elementId) {
  // This function is case-insensitive with regard to
  // attributes to resemble HTML
  const attributeName = attribute.toUpperCase();

  if (!(attributeName in messages.ReqGetAttribute.RequestType)) {
    const errorMessage = `${attributeName} is not a valid attribute name. Valid attribute names are:\n${Object.keys(messages.ReqGetAttribute.RequestType).reduce((accum, x) => accum + '\n' + x)}`;
    log.errorAndThrow(new errors.InvalidArgumentError(errorMessage));
  }

  const req = new messages.ReqGetAttribute();
  req.setElementid(elementId);
  req.setAttribute(messages.ReqGetAttribute.RequestType[attributeName]);

  return new Promise((resolve, reject) => {
    this.bootstrap.client.getAttribute(req, (error, result) => {
      throwOnUnsuccessfulAurumCall('getAttribute', error, result);

      const resultType = result.getType();
      //
      log.debug(`RspGetAttribute.type: ${resultType}`);

      // BUG: result.getValue() always returns 0 (STRING)
      // even though, the value sent is a BOOL
      // For now we ignore getValue() and always return boolean
      // because currently supported attributes are all boolean

      // TODO: remove this if, when the bug is fixed
      if (result.getBoolvalue()) {
        return resolve(true);
      }
      return resolve(null);

      switch (resultType) {
        case messages.ParamType.STRING:
          return resolve(result.getStringvalue());
        case messages.ParamType.INT:
          return resolve(result.getIntvalue());
        case messages.ParamType.DOUBLE:
          return resolve(result.getDoublevalue());
        case messages.ParamType.BOOL:
          // The W3C spec requires to return 'true'
          // (a *string*, not *boolean*) or null
          if (result.getBoolvalue()) {
            return resolve('true');
          }
          return resolve(null);
        default:
          // In case new ParamTypes will be added in the future
          const resultTypeName = _.findKey(messages.ParamType, (val) => val === resultType);
          log.error(`"${string(resultTypeName)}" parameter type is currently not supported`);
          throw new errors.NotImplementedError(`Cannot handle "${string(resultTypeName)}" attribute type`);
      }
    });
  });
};

commands.getLocation = async function (elementId) {
  throw new errors.NotImplementedError('TODO');
};

commands.getLocationInView = async function (elementId) {
  throw new errors.NotImplementedError('TODO');
};

commands.getText = async function (elementId) {
  throw new errors.NotImplementedError('TODO');
};

commands.elementEnabled = async function (elementId) {
  throw new errors.NotImplementedError('TODO');
};

commands.elementDisplayed = async function (elementId) {
  throw new errors.NotImplementedError('TODO');
};

commands.elementSelected = function () {
};

commands.getSize = async function (elementId) {
};

commands.setValue = async function (keys, elementId) {
};

commands.setValueImmediate = async function (keys, elementId) {
};

commands.clear = async function (elementId) {
};

commands.replaceValue = async function (value, elementId) {
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
