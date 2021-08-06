import log from '../logger';
import _ from 'lodash';
let commands = {};

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

commands.getElement = async function (elementId) {
  const findElementReq = new messages.ReqFindElement();
  findElementReq.setElementid(elementId);

  return new Promise((resolve, reject) => {
    const call = this.aurumClient.findElement(findElementReq,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('getElement*', error, result, 'findElement');

        // TODO: currently, findElement() returns the list of all elements
        // when queried for an element with a particular elementId, so we
        // search through all results to find the needed object
        // When it's fixed, remove the search code
        return resolve(_.find(result.getElementsList(), (element) => element.getElementid() === elementId));
      });
  });
};

// Appium-specific command. Spec:
// https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidlocation
commands.getLocation = async function (elementId) {
  const element = await this.getElement(elementId);

  /*
   * Based on behavior of aurum, tested manually:
   * - when "x", or "y" in "geometry" are not set, it means they're 0s
   * - "x" and "y" are coordinates with regard to the top-left
   * corner of the screen and they change when we scroll menus
   * up and down! Thus, they correspond to Appium's "locationInView"
   * and we use them directly as such.
   */
  const location = element.getWindowRelativeGeometry().toObject();
  location.x = location.x || 0;
  location.y = location.y || 0;
  location.width = location.width || 0;
  location.height = location.height || 0;

  /*
   * Appium/W3C WebDriver do not define, if this function should return
   * the position of the center or top-left corner or something different.
   * The legacy appium-tizen-driver returned position of the center
   * of an element, thus we return it here, too.
   */
  const x = Math.round(location.x + location.width / 2);
  const y = Math.round(location.y + location.height / 2);

  return {x, y};
};

commands.getLocationInView = async function (elementId) {
  const element = await this.getElement(elementId);

  /*
   * Based on behavior of aurum, tested manually:
   * - when "x", or "y" in "geometry" are not set, it means they're 0s
   * - "x" and "y" are coordinates with regard to the top-left
   * corner of the screen and they change when we scroll menus
   * up and down! Thus, they correspond to Appium's "locationInView"
   * and we use them directly as such.
   */
  const geometry = element.getGeometry().toObject();
  geometry.x = geometry.x || 0;
  geometry.y = geometry.y || 0;
  geometry.width = geometry.width || 0;
  geometry.height = geometry.height || 0;

  /*
   * Appium/W3C WebDriver do not define, if this function should return
   * the position of the center or top-left corner or something different.
   * The legacy appium-tizen-driver returned position of the center
   * of an element, thus we return it here, too.
   */
  const x = Math.round(geometry.x + geometry.width / 2);
  const y = Math.round(geometry.y + geometry.height / 2);

  return {x, y};
};

// Spec: https://w3c.github.io/webdriver/webdriver-spec.html#get-element-text
commands.getText = async function (elementId) {
  // TODO: shouldn't we implement something more like
  // HTML's innerText: https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute?
  return (await this.getElement(elementId)).getText();
};

// Spec: https://w3c.github.io/webdriver/webdriver-spec.html#is-element-enabled
commands.elementEnabled = async function (elementId) {
  // Not really, what we wanted
  // return (await this.getElement(elementId)).getIsenabled();
  // TODO: ask Aurum devs if 'isFocused' is the same
  // as WebDriver's 'isEnabled'
  return (await this.getElement(elementId)).getIsfocused();
};

// Spec: http://appium.io/docs/en/commands/element/attributes/displayed/
commands.elementDisplayed = async function (elementId) {
  return (await this.getElement(elementId)).getIsvisible();
};

// Spec: https://w3c.github.io/webdriver/webdriver-spec.html#dfn-is-element-selected
commands.elementSelected = async function (elementId) {
  return (await this.getElement(elementId)).getIsselected();
};

// Spec: http://appium.io/docs/en/commands/element/attributes/size/
commands.getSize = async function (elementId) {
  const element = await this.getElement(elementId);
  const geometry = element.getGeometry().toObject();
  return {width: geometry.width, height: geometry.height};
};

// Spec: https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-element-property
// Valid property names: names of the fields of "Element" message
// in aurum.proto file.
//
// Meaning of properties: https://developer.gnome.org/libatspi/stable/libatspi-atspi-constants.html
commands.getProperty = async function (elementId, propertyName) {
  /*
   * Auto-generated code we use to handle Protobuf objects changes
   * names of 'Element'. For more info see:
   * https://developers.google.com/protocol-buffers/docs/reference/javascript-generated#fields
   * snake_case with camelCase, e.g. widget_type -> widgetType.
   */
  let protobufPropertyName;
  switch (propertyName) {
    case 'widget_type':
      protobufPropertyName = 'widgetType';
      break;
    case 'widget_style':
      protobufPropertyName = 'widgetStyle';
      break;
    case 'package':
      protobufPropertyName = 'pb_package';
      break;
    case 'child':
      protobufPropertyName = 'childList';
      break;
    default:
      protobufPropertyName = propertyName.toLowerCase();
  }

  const elementObj = (await this.getElement(elementId)).toObject();
  if (!Object.hasOwnProperty.call(elementObj, protobufPropertyName)) {
    return null;
  }
  return elementObj[protobufPropertyName];
};

/*
 * Spec: https://w3c.github.io/webdriver/webdriver-spec.html#dfn-element-send-keys
 *
 * This implementation does not fully comply to the W3C spec.
 * W3C spec requires 2 modes of handling setValue:
 * 1. for "input" elements - set the whole "value" string in one
 * step
 * 2. for other keyboard interactable elements - send the value
 * as a sequence of key presses
 *
 * Aurum supports sending key presses, but only for some special
 * keys (e.g. Volume up) and not for the most used - letters and
 * numbers. Thus we set all values according using the first of
 * the two modes outlined above.
 *
 * We also don't limit the length of the set string value to the
 * length of the field, because Aurum does not support getting
 * lengths of the input fields.
 *
 * W3C only supports setting text values. Appium allows
 * for other types and thus we support setting numbers and booleans,
 * too.
 *
 * Finally, W3C requires setValue to raise ElementNotInteractableError
 * for elements, which values cannot be changed.
 * Aurum supports getting "isFocusable" property,
 * which seems to be meant for checking interactibility
 * of an element, but its value is "true" for some
 * non-interactable elements. Thus, we can't reliably
 * check interactibility of an element and just don't
 * check it.
 */
commands.setValue = async function (value, elementId) {
  await this.scrollElementIntoView(elementId);
  const setValueReq = new messages.ReqSetValue();
  setValueReq.setElementid(elementId);

  switch (typeof value) {
    case 'string':
      setValueReq.setType(messages.ParamType.STRING);
      setValueReq.setStringvalue(value);
      break;
    case 'boolean':
      setValueReq.setType(messages.ParamType.BOOL);
      setValueReq.setBoolvalue(value);
      break;
    case 'Number':
      if (Number.isInteger(value)) {
        setValueReq.setType(messages.ParamType.INT);
        setValueReq.setIntvalue(value);
      } else {
        setValueReq.setType(messages.ParamType.DOUBLE);
        setValueReq.setDoublevalue(value);
      }
      break;
    default:
      throw errors.InvalidArgumentError(`setValue() does not support ${typeof value} arguments. Supported types: string, boolean, Number.`);
  }

  return new Promise((resolve, reject) => {
    this.aurumClient.setValue(setValueReq, (error, result) => {
      throwOnUnsuccessfulAurumCall('setValue', error, result);
      return resolve();
    });
  });
};

/*
 * There's no spec for this command, just laconic comment
 * in appium-base-driver's lib/protocol/routes.js file.
 * We use the implementation of setValue, similarily to
 * the legacy appium-tizen-driver implementation.
 */
commands.setValueImmediate = async function (value, elementId) {
  return this.setValue(value, elementId);
};

/*
 * Spec: https://w3c.github.io/webdriver/webdriver-spec.html#dfn-element-clear
 *
 * W3C requires clear to raise ElementNotInteractableError
 * for elements, which values cannot be changed.
 * Aurum supports getting "isFocusable" property,
 * which seems to be meant for checking interactibility
 * of an element, but its value is "true" for some
 * non-interactable elements. Thus, we can't reliably
 * check interactibility of an element and just don't
 * check it.
 */
commands.clear = async function (elementId) {
  await this.scrollElementIntoView(elementId);

  const clearReq = new messages.ReqClear();
  clearReq.setElementid(elementId);

  return new Promise((resolve, reject) => {
    this.aurumClient.clear(clearReq, (error, result) => {
      throwOnUnsuccessfulAurumCall('clearReq', error, result);
      return resolve();
    });
  });
};

/*
 * There's no spec for this command, just laconic comment
 * in appium-base-driver's lib/protocol/routes.js file.
 * We use the implementation of setValue, similarily to
 * the legacy appium-tizen-driver implementation.
 */
commands.replaceValue = async function (value, elementId) {
  return this.setValue(value, elementId);
};

export default commands;
export { commands };
