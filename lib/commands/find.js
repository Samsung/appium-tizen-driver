/*
 * Copyright (c) 2018-2021 Samsung Electronics Co., Ltd All Rights Reserved
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
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
      '-tizen aurum': this.makeTizenAurumReq.bind(this),
      'automationId': this.makeAutomationIdRequest.bind(this),
      'accessibility id': this.makeElementIdReq.bind(this),
      /*
       * There's no concept of "class" in EFL, so we interpret
       * "class name" as "widget_type".
       * This is similar to Android's Appium implementation.
       */
      'class name': this.makeWidgetStyle.bind(this),
      /*
       * There's no concept of element "name" in EFL, so we interpret
       * "name" as "text".
       */
      'name': this.makeTextFieldReq.bind(this)
    };
  }

  create (strategy, selector) {
    if (!(strategy in this.strategies)) {
      throw errors.InvalidSelectorError(`"${strategy}" strategy is not supported`);
    }

    return this.strategies[strategy](selector);
  }

  makeElementIdReq (elementId) {
    const req = new messages.ReqFindElement();
    req.setElementid(elementId);
    return req;
  }

  makeTizenAurumReq (constraints) {
    const req = new messages.ReqFindElement();
    if (typeof constraints === 'string') {
      constraints = JSON.parse(constraints);
    }

    // Meaning of properties: https://developer.gnome.org/libatspi/stable/libatspi-atspi-constants.html
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
    req.setWidgettype(widgetStyle);
    return req;
  }

  makeTextFieldReq (textField) {
    const req = new messages.ReqFindElement();
    req.setTextfield(textField);
    return req;
  }

}

const requestFactory = new FindElementReqFactory(messages);

/*
 * Spec: https://w3c.github.io/webdriver/webdriver-spec.html#dfn-find
 *
 * Regarding "id" strategy from the spec.
 * Appium/W3C specs distinguish "id" and "elementId".
 * Aurum's "Element" messages also have "id" and "elementId"
 * fields, BUT we can only set "elementId" in
 * ReqFindElement objects.
 * Thus, in appium-tizen-driver "id" strategy is not
 * supported.
*/
helpers.doFindElementOrEls = function (params) {
  const {
    strategy = 'automationId', // As in the legacy implementation
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

        if (result.getElementsList().length === 0) {
          reject(new errors.NoSuchElementError('No such element'));
        }

        const elements = result.getElementsList().map((element) => ({ELEMENT: element.getElementid() }));

        if (multiple) {
          return resolve(elements);
        }

        return resolve(elements[0]);
      });
  });
};

/*
 * Convenience method for writing unit tests
 */
helpers.findElementId = async function (strategy, selector) {
  const params = {
    strategy, // As in the legacy implementation
    selector,
    multiple: false
  };

  return (await this.doFindElementOrEls(params)).ELEMENT;
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

const SUPPORTED_LOCATOR_STRATEGIES = Object.keys(requestFactory.strategies);
Object.assign(extensions, helpers);

export { extensions, SUPPORTED_LOCATOR_STRATEGIES };
export default extensions;
