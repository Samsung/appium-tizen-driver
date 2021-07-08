import log from '../logger';
import B from 'bluebird';
import { errors, isErrorType } from 'appium-base-driver';

let commands = {}, helpers = {}, extensions = {};

commands.click = async function (elementId, x = 0, y = 0) {
  throw new errors.NotImplementedError('TODO');
};

commands.touchUp = async function (x = 1, y = 1, elementId = '') {
  throw new errors.NotImplementedError('TODO');
};

commands.touchDown = async function (x, y, elementId = '') {
  throw new errors.NotImplementedError('TODO');
};

commands.touchMove = async function (xDown, yDown, xUp, yUp, steps = 10, elementId = null) {
  throw new errors.NotImplementedError('TODO');
};

commands.touchLongClick = async function (elementId, x, y, duration) {
  throw new errors.NotImplementedError('TODO');
};

commands.tap = async function (elementId, x = 0, y = 0, count = 1) {
  /*
   * TODO: remove this?
   * WebDriver spec and appium-base-driver don't support "tap" command,
   * but the previous version of appium-tizen-driver differentiated
   * between tap/single tap
   * It seems, that this old "tap" corresponds to "click" in the official
   * spec.
   */
  throw new errors.NotImplementedError('TODO');
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;
