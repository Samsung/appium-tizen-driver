import log from '../logger';
import _ from 'lodash';
import { sleep } from 'asyncbox';
let commands = {}, extensions = {};

import { errors } from 'appium-base-driver';

commands.getAttribute = async function (attribute, elementId) {
  throw new errors.NotImplementedError('TODO');
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
