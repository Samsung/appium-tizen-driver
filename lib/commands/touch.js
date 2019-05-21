import log from '../logger';
import B from 'bluebird';
import { errors, isErrorType } from 'appium-base-driver';

let commands = {}, helpers = {}, extensions = {};

let x = 1, y = 1;

commands.doTouchAction = async function (action, opts) {
  let result;
  switch (action) {
    case 'tap':
      return await this.tap(opts.element, opts.x, opts.y, opts.count);
    case 'press':
      x = opts.x;
      y = opts.y;
      return await this.touchDown(opts.x, opts.y, opts.element);
    case 'release':
      if (!opts.x) {
        opts.x = x;
      }
      if (!opts.y) {
        opts.y = y;
      }
      return await this.touchUp(opts.x, opts.y, opts.element);
    case 'moveTo':
      result = await this.touchMove(x, y, opts.x, opts.y, opts.steps, opts.element);
      x = opts.x;
      y = opts.y;
      return result;
    case 'wait':
      return await B.delay(opts.ms);
    case 'longPress':
      if (typeof opts.duration === 'undefined' || !opts.duration) {
        opts.duration = 2000;
      }
      return await this.touchLongClick(opts.element, opts.x, opts.y, opts.duration);
    default:
      log.errorAndThrow(`unknown action ${action}`);
  }
};

commands.performGesture = async function (gesture) {
  try {
    return await this.doTouchAction(gesture.action, gesture.options || {});
  } catch (e) {
    // sometime the element is not available when releasing, retry without it
    if (isErrorType(e, errors.NoSuchElementError) && gesture.action === 'release' &&
      gesture.options.element) {
      delete gesture.options.element;
      log.debug(`retrying release without element opts: ${gesture.options}.`);
      return await this.doTouchAction(gesture.action, gesture.options || {});
    }
    throw e;
  }
};

commands.performTouch = async function (gestures) {
  let result = true;

  for (let g of gestures) {
    if (!(await this.performGesture(g))) {
      result = false;
    }
  }

  return result;
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;
