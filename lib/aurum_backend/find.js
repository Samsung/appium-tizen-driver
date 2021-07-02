'use strict';

import _ from 'lodash';
import { errors, isErrorType } from 'appium-base-driver';

let helpers = {},
    extensions = {};

let elements = {};


helpers.findElOrEls = async function (strategy, selector, mult, context = '') {
  throw new errors.NotImplementedError('TODO');

  this.validateLocatorStrategy(strategy);

  if (!selector) {
    throw new Error('Must provide a selector when finding elements');
  }

  let params = {
    strategy,
    selector,
    context,
    multiple: mult
  };

  let element;

  let doFind = async () => {
    try {
      element = await this.doFindElementOrEls(params);
    } catch (err) {
      if (isErrorType(err, errors.NoSuchElementError)) {
        return false;
      }

      throw err;
    }

    return !_.isEmpty(element);
  };

  try {
    await this.implicitWaitForCondition(doFind);
  } catch (err) {
    if (err.message && err.message.match(/Condition unmet/)) {
      element = [];
    } else {
      throw err;
    }
  }

  if (mult) {
    return element;
  } else {
    if (_.isEmpty(element)) {
      throw new errors.NoSuchElementError();
    }

    return element;
  }
};

helpers.getAutomationId = function (elementId) {
  throw new errors.NotImplementedError('TODO');
};

Object.assign(extensions, helpers);

export { extensions };
export default extensions;
