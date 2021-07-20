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
  throw new errors.NotImplementedError('TODO');
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
   * The closest I've found to the "location" definition is:
   * https://w3c.github.io/webdriver/webdriver-spec.html#dfn-in-view-centre-point
   * The legacy appium-tizen-driver also returned position of the center
   * of an element, thus we return it here, too.
   */
  const x = Math.max(geometry.x, geometry.x + geometry.width) / 2;
  const y = Math.max(geometry.y, geometry.y + geometry.height) / 2;

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

commands.setValue = async function (keys, elementId) {
};

commands.setValueImmediate = async function (keys, elementId) {
};

commands.clear = async function (elementId) {
};

commands.replaceValue = async function (value, elementId) {
};

export default commands;
export { commands };
