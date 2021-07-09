import log from '../logger';
import _ from 'lodash';
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
    this.aurumClient.getAttribute(req, (error, result) => {
      throwOnUnsuccessfulAurumCall('getAttribute', error, result);

      if (result.getBoolvalue()) {
        return resolve(true);
      }
      return resolve(null);
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
