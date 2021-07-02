'use strict';

import _ from 'lodash';
import { errors, isErrorType } from 'appium-base-driver';
import utils from './utils';
import messages from './aurum_pb';
import { reject, resolve } from 'bluebird';

let helpers = {},
    extensions = {};

let elements = {};

class FindElementReqFactory {
  constructor (grpc_message_defs) {
    this.grpc_message_defs = grpc_message_defs;

    this.strategies = {
      'id': this.makeIdReq.bind(this),
      '-tizen aurum': this.makeTizenAurumReq.bind(this),
      'automationId': this.makeAutomationIdRequest.bind(this),
      'accessibility id': this.makeIdReq.bind(this),
      // TODO: does "class name" strategy correspond to "ReqFindElement.widgetStyle?
      'class name': this.makeWidgetStyle.bind(this),
      // TODO: does "name" strategy correspond to "ReqFindElementtextField?
      'name': this.makeTextFieldReq.bind(this)
    };
  }

  create (strategy, selector) {
    if (!(strategy in this.strategies)) {
      throw errors.InvalidSelectorError(`"${strategy}" strategy is not supported`);
    }

    return this.strategies[strategy](selector);
  }

  makeIdReq (elementId) {
    return new messages.ReqFindElement({elementId});
  }

  makeTizenAurumReq (constraints) {
    // TODO: do we need validateTizenAurmReqValue(constraints);?
    // grpc lib should throw an error anyway
    return new messages.ReqFindElement(constraints);
  }

  makeAutomationIdRequest (automationId) {
    return new messages.ReqFindElement({automationId});
  }

  makeWidgetStyle (widgetStyle) {
    return new messages.ReqFindElement({widgetStyle});
  }

  makeTextFieldReq (textField) {
    return new messages.ReqFindElement({
      textField
    });
  }

}

const requestFactory = new FindElementReqFactory(messages);

helpers.doFindElementOrEls = async function (params) {
  const {
    strategy = 'automationId',
    selector,
    multiple
  } = params;

  if (!selector) {
    // TODO: is this the most appropriate error type?
    throw new errors.InvalidSelectorError('findElement()/findElements() require selector');
  }

  const findElementReq = requestFactory.create(strategy, selector);

  return new Promise((resolve, reject) => {
    const call = this.bootstrap.client.findElement(findElementReq,
      (error, result) => {
        if (error) {
          reject(error);
        }

        if (result.getStatus() !== messages.RspStatus.OK) {
          reject(new Error('Must provide a selector when finding elements'));
        }

        const elementIds = result.getElementsList().map((element) => element.getElementid());

        if (multiple) {
          resolve(elementIds);
        }

        resolve(elementIds[0]);
      });
  });
};

helpers.findElOrEls = async function (strategy, selector, mult, context = '') {
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

const SUPPORTED_LOCATOR_STRATEGIES = Object.keys(requestFactory.strategies);
Object.assign(extensions, helpers);

export { extensions, SUPPORTED_LOCATOR_STRATEGIES };
export default extensions;
