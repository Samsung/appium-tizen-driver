import log from '../logger';
import tizenHelpers from '../tizen-helpers';
import { sleep } from 'asyncbox';
let commands = {}, extensions = {};

commands.click = async function (elementId) {
  return await this.bootstrap.sendAction("click", {elementId});
};

commands.getAttribute = async function (attribute, elementId) {
  let params = { attribute, elementId };
  return await this.bootstrap.sendAction("element:getAttribute", params);
};

commands.setAttribute = async function (attribute, value, elementId) {
  let params = { attribute, value, elementId };
  return await this.bootstrap.sendAction("element:setAttribute", params);
};

commands.getLocation = async function (elementId) {
  return await this.bootstrap.sendAction("element:getLocation", { elementId });
};

commands.getLocationInView = async function (elementId) {
  return await this.getLocation(elementId);
};

commands.getText = async function (elementId) {
  return await this.getAttribute("text", elementId);
};

commands.elementEnabled = async function (elementId) {
  return await this.getAttribute("enabled", elementId) === 'true';
};

commands.elementDisplayed = async function (elementId) {
  return await this.getAttribute("displayed", elementId) === 'true';
};

commands.elementSelected = async function () {
  log.info('elementSelcted not supported');
  return false;
};

commands.getSize = async function (elementId) {
  return await this.getAttribute("size", elementId);
};

commands.setValueImmediate = async function (keys, elementId) {
  let text = keys;
  if (keys instanceof Array) {
    text = keys.join("");
  }

  // first, make sure we are focused on the element
  await this.click(elementId);
  await sleep(3000);
  return await this.inputText(text);
};

//clear text attribute
commands.clear = async function (elementId) {
  let text = (await this.getText(elementId)) || '';
  let length = text.length;
  if (length === 0) {
    return true;
  } else {
    return await this.setAttribute('Text', '', elementId);
  }
};

commands.replaceValue = async function (value, elementId) {
  return await this.setAttribute('Text', value, elementId);
};


commands.touchUp = async function (x = 1, y = 1, elementId = null) {
  let params = { elementId, x, y };
  tizenHelpers.removeNullProperties(params);
  return await this.bootstrap.sendAction("touchUp", params);
};

commands.touchDown = async function (x, y, elementId = null) {
  let params = { elementId, x, y };
  tizenHelpers.removeNullProperties(params);
  return await this.bootstrap.sendAction("touchDown", params);
};

commands.touchMove = async function (x, y, elementId = null) {
  let params = { elementId, x, y };
  tizenHelpers.removeNullProperties(params);
  return await this.bootstrap.sendAction("touchMove", params);
};

commands.touchLongClick = async function (elementId, x, y, duration) {
  let params = { elementId, x, y, duration };
  tizenHelpers.removeNullProperties(params);
  return await this.bootstrap.sendAction("touchLongClick", params);
};

commands.tap = async function (elementId, x = 0, y = 0, count = 1) {
  for (let i = 0; i < count; i++) {
    if (elementId) {
      // we are either tapping on the default location of the element
      // or an offset from the top left corner
      if (x !== 0 || y !== 0) {
        return await this.bootstrap.sendAction("click", { elementId, x, y });
      } else {
        return await this.bootstrap.sendAction("click", { elementId });
      }
    } else {
      return await this.bootstrap.sendAction("click", { x, y });
    }
  }
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
