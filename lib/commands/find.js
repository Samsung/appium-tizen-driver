import _ from 'lodash';
import { errors } from 'appium-base-driver';


let helpers = {}, extensions = {};

let elements = {};
let index = 0;

helpers.doFindElementOrEls = async function (params) {
  let elementId = { "elementId" : params.selector };
  let result = await this.bootstrap.sendAction('find', elementId);

  if (result) {
    index++;
    elements[index] = params.selector;
    return { "ELEMENT": `${index}` };
  }
  return { "ELEMENT": "-1" };
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
      if (err.message && err.message.match(/An element could not be located/)) {
        return false;
      }
      throw err;
    }

    if (params.multiple) {
      return element && element.length !== 0;
    } else {
      return !_.isNull(element);
    }
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
    if (!element || _.size(element) === 0) {
      throw new errors.NoSuchElementError();
    }
    return element;
  }
};

helpers.getAutomationId = async function (elementId) {
  return elements[elementId];
};

Object.assign(extensions, helpers);
export { helpers };
export default extensions;
