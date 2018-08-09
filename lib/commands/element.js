import log from '../logger';
import { sleep } from 'asyncbox';
let commands = {}, extensions = {};

commands.getAttribute = async function (attribute, elementId) {
  elementId = await this.getAutomationId(elementId);
  let params = { attribute, elementId };
  return await this.bootstrap.sendAction("element:getAttribute", params);
};

commands.setAttribute = async function (attribute, value, elementId) {
  elementId = await this.getAutomationId(elementId);
  let params = { attribute, value, elementId };
  return await this.bootstrap.sendAction("element:setAttribute", params);
};

commands.getLocation = async function (elementId) {
  elementId = await this.getAutomationId(elementId);
  let location = await this.bootstrap.sendAction("element:getLocation", { elementId });
  location.x = location.centerx;
  location.y = location.centery;
  return { "x": location.centerx, "y": location.centery };
};

commands.getLocationInView = async function (elementId) {
  return await this.getLocation(elementId);
};

commands.getLocationValueByElementId = async function (elementId) {
  let location = await this.getLocation(elementId);
  return [location.x, location.y];
};

commands.getText = async function (elementId) {
  elementId = await this.getAutomationId(elementId);
  return await this.bootstrap.sendAction("element:getText", { elementId });
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
  elementId = await this.getAutomationId(elementId);
  let location = await this.bootstrap.sendAction("element:getLocation", { elementId });
  return {"width":location.width, "height":location.height};
};

commands.setValue = async function (keys, elementId) {
  keys = keys.join();
  return await this.setAttribute('Text', keys, elementId);
};

commands.setValueImmediate = async function (keys, elementId) {
  let text = keys;
  if (keys instanceof Array) {
    text = keys.join("");
  }

  await this.click(elementId);
  await sleep(3000);
  return await this.inputText(text);
};

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

commands.click = async function (elementId) {
  let location = await this.getLocationValueByElementId(elementId);

  return await this.bootstrap.sendInputAction("click", location);
};

commands.touchUp = async function (x = 1, y = 1, elementId = null) {
  if (elementId === this.sessionId) {
    elementId = null;
  }
  if (elementId) {
    let location = await this.getLocationValueByElementId(elementId);
    return await this.bootstrap.sendInputAction("touchUp", location);
  } else {
    return await this.bootstrap.sendInputAction("touchUp", [x, y]);
  }
};

commands.touchDown = async function (x, y, elementId = null) {
  if (elementId === this.sessionId) {
    elementId = null;
  }

  if (elementId) {
    let location = await this.getLocationValueByElementId(elementId);
    return await this.bootstrap.sendInputAction("touchDown", location);
  } else {
    return await this.bootstrap.sendInputAction("touchDown", [x, y]);
  }
};

commands.touchMove = async function (x, y, elementId = null) {
  if (elementId === this.sessionId) {
    elementId = null;
  }
  if (elementId) {
    let location = await this.getLocationValueByElementId(elementId);
    return await this.bootstrap.sendInputAction("touchMove", location);
  } else {
    return await this.bootstrap.sendInputAction("touchMove", [x, y]);
  }
};

commands.touchLongClick = async function (elementId, x, y, duration) {
  if (elementId === this.sessionId) {
    elementId = null;
  }
  if (elementId) {
    let location = await this.getLocationValueByElementId(elementId);
    location.push(duration);
    return await this.bootstrap.sendInputAction("touchLongClick", location);
  } else {
    return await this.bootstrap.sendInputAction("touchLongClick", [x, y, duration]);
  }
};

commands.tap = async function (elementId, x = 0, y = 0, count = 1) {
  let result = true;
  for (let i = 0; i < count; i++) {
    if (elementId) {
      let tapResult = await this.click(elementId);
      if (!tapResult) {
        result = false;
      }
    } else {
      let tapResult = await this.bootstrap.sendInputAction("click", [x, y]);
      if (!tapResult) {
        result = false;
      }
    }
  }

  return result;
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
