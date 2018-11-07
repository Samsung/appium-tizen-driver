import log from '../logger';
import _ from 'lodash';
import { sleep } from 'asyncbox';
let commands = {}, extensions = {};

commands.getAttribute = async function (attribute, elementId) {
  elementId = this.getAutomationId(elementId);
  let params = {
    attribute,
    elementId
  };
  return await this.bootstrap.sendAction("element:getAttribute", params);
};

commands.setAttribute = async function (attribute, value, elementId) {
  elementId = this.getAutomationId(elementId);
  let params = {
    attribute,
    value,
    elementId
  };
  return await this.bootstrap.sendAction("element:setAttribute", params);
};

commands.getLocation = async function (elementId) {
  elementId = this.getAutomationId(elementId);
  return await this.bootstrap.sendAction("element:location", { elementId });
};

commands.getLocationInView = async function (elementId) {
  return await this.getLocation(elementId);
};

commands.getLocationValueByElementId = async function (elementId) {
  return await this.getLocation(elementId);
};

commands.getText = async function (elementId) {
  elementId = this.getAutomationId(elementId);
  return await this.bootstrap.sendAction("element:getText", { elementId });
};

commands.elementEnabled = async function (elementId) {
  elementId = this.getAutomationId(elementId);
  return await this.bootstrap.sendAction("element:enabled", { elementId });
};

commands.elementDisplayed = async function (elementId) {
  elementId = this.getAutomationId(elementId);
  return await this.bootstrap.sendAction("element:displayed", { elementId });
};

commands.elementSelected = function () {
  log.info('elementSelected not supported');
  return false;
};

commands.getSize = async function (elementId) {
  elementId = this.getAutomationId(elementId);
  return await this.bootstrap.sendAction("element:size", { elementId });
};

commands.setValue = async function (keys, elementId) {
  let text = keys.join();
  elementId = this.getAutomationId(elementId);
  let params = {
    elementId,
    text,
    replace: false
  };
  return await this.bootstrap.sendAction("element:setText", params);
};

commands.setValueImmediate = async function (keys, elementId) {
  let text = _.isArray(keys) ? keys.join('') : keys;
  elementId = this.getAutomationId(elementId);
  let params = {
    elementId,
    text,
    replace: false
  };
  return await this.bootstrap.sendAction("element:setText", params);
};

commands.clear = async function (elementId) {
  elementId = this.getAutomationId(elementId);
  let params = {
    elementId,
    text: "",
    replace: true
  };
  return await this.bootstrap.sendAction("element:setText", params);
};

commands.replaceValue = async function (value, elementId) {
  elementId = this.getAutomationId(elementId);
  let params = {
    elementId,
    text: value,
    replace: true
  };
  return await this.bootstrap.sendAction("element:setText", params);
};

commands.click = async function (elementId, x = 0, y = 0) {
  if (x === this.sessionId) {
    x = 0;
  }
  if (y === this.sessionId) {
    y = 0;
  }

  if (elementId) {
    elementId = this.getAutomationId(elementId);
  } else {
    elementId = "";
  }

  let params = {
    elementId,
    x: _.toInteger(x),
    y: _.toInteger(y)
  };
  return await this.bootstrap.sendAction("element:click", params);
};

commands.touchUp = async function (x = 1, y = 1, elementId = "") {
  if (elementId && elementId !== this.sessionId) {
    elementId = this.getAutomationId(elementId);
  } else {
    elementId = "";
  }

  let params = {
    elementId,
    x: _.toInteger(x),
    y: _.toInteger(y)
  };
  return await this.bootstrap.sendAction("element:touchUp", params);
};

commands.touchDown = async function (x, y, elementId = "") {
  if (elementId && elementId !== this.sessionId) {
    elementId = this.getAutomationId(elementId);
  } else {
    elementId = "";
  }

  let params = {
    elementId,
    x: _.toInteger(x),
    y: _.toInteger(y)
  };
  return await this.bootstrap.sendAction("element:touchDown", params);
};

commands.touchMove = async function (xDown, yDown, xUp, yUp, steps = 10, elementId = null) {
  if (elementId && elementId !== this.sessionId) {
    elementId = this.getAutomationId(elementId);
  } else {
    elementId = "";
  }

  let params = {
    elementId,
    xDown: _.toInteger(xDown),
    yDown: _.toInteger(yDown),
    xUp: _.toInteger(xUp),
    yUp: _.toInteger(yUp),
    steps: _.toInteger(steps)
  };
  return await this.bootstrap.sendAction("element:touchMove", params);
};

commands.touchLongClick = async function (elementId, x, y, duration) {
  await this.touchDown(x, y, elementId);
  await sleep(duration);
  return await this.touchUp(x, y, elementId);
};

commands.tap = async function (elementId, x = 0, y = 0, count = 1) {
  let result = true;
  let tapResult = false;
  for (let i = 0; i < count; i++) {
    tapResult = await this.click(elementId, x, y);
    if (!tapResult) {
      result = false;
    }
  }
  return result;
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
