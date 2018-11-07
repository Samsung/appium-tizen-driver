import _ from 'lodash';
import { errors, isErrorType } from 'appium-base-driver';

let helpers = {}, extensions = {};

let elements = {};
let index = 0;

helpers.doFindElementOrEls = async function (params) {
  let strategy = "automationId";

  if (params.strategy === "name") {
    strategy = params.strategy;
  }

  let param = { "elementId": params.selector, strategy };
  let result = await this.bootstrap.sendAction('find', param);

  if (!_.isEmpty(result)) {
    result.forEach(function (element) {
      index++;
      elements[index] = element.ELEMENT;
      element.ELEMENT = `${index}`;
    });

    if (!params.multiple) {
      result = result[0];
    }
  }

  return result;
};

helpers.findElOrEls = async function (strategy, selector, mult, context = '') {
  this.validateLocatorStrategy(strategy);

  if (!selector) {
    throw new Error("Must provide a selector when finding elements");
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
  let result = elements[elementId];
  if (!result) {
    result = "";
  }
  return result;
};

Object.assign(extensions, helpers);
export { helpers };
export default extensions;
