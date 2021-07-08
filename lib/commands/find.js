'use strict';

import _ from 'lodash';
import { errors, isErrorType } from 'appium-base-driver';
import messages from './aurum_pb';

import { throwOnUnsuccessfulAurumCall, isIterable } from './utils';

let helpers = {},
    extensions = {};

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
    const req = new messages.ReqFindElement();
    req.setElementid(elementId);
    return req;
  }

  makeTizenAurumReq (constraints) {
    const req = new messages.ReqFindElement();

    req.setElementid(constraints?.elementId);
    req.setAutomationid(constraints?.automationId);
    req.setTextfield(constraints?.textField);
    req.setWidgettype(constraints?.widgetType);
    req.setWidgetstyle(constraints?.widgetStyle);
    req.setIschecked(constraints?.isChecked);
    req.setIscheckable(constraints?.isCheckable);
    req.setIsclickable(constraints?.isClickable);
    req.setIsenabled(constraints?.isEnabled);
    req.setIsfocused(constraints?.isFocused);
    req.setIsfocusable(constraints?.isFocusable);
    req.setIsscrollable(constraints?.isScrollable);
    req.setIsselected(constraints?.isSelected);
    req.setIsshowing(constraints?.isShowing);
    req.setIsactive(constraints?.isActive);
    req.setMindepth(constraints?.minDepth);
    req.setMaxdepth(constraints?.maxDepth);

    if (isIterable(constraints.children)) {
      for (let childConstraints of constraints.children) {req.addChildren(this.makeTizenAurumReq(childConstraints));}
    }
    return req;
  }

  makeAutomationIdRequest (automationId) {
    const req = new messages.ReqFindElement();
    req.setAutomationid(automationId);
    return req;
  }

  makeWidgetStyle (widgetStyle) {
    const req = new messages.ReqFindElement();
    req.setWidgetstyle(widgetStyle);
    return req;
  }

  makeTextFieldReq (textField) {
    const req = new messages.ReqFindElement();
    req.setTextfield(textField);
    return req;
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
    throw new errors.InvalidSelectorError('findElement()/findElements() require selector');
  }

  const findElementReq = requestFactory.create(strategy, selector);

  return new Promise((resolve, reject) => {
    const call = this.aurumClient.findElement(findElementReq,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('findElement or findElements', error, result, 'findElement');

        const elementIds = result.getElementsList().map((element) => element.getElementid());

        if (multiple) {
          return resolve(elementIds);
        }

        return resolve(elementIds[0]);
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
