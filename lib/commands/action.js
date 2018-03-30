import { fs, util } from 'appium-support';
import _ from 'lodash';
import B from 'bluebird';
import path from 'path';
import jimp from 'jimp';

const swipeStepsPerSec = 28;

let commands = {}, extensions = {};

commands.pressKeyCode = async function (keycode) {
  return await this.bootstrap.sendAction("pressKeyCode", { keycode });
};

commands.keys = async function (keys) {
  keys = _.isArray(keys) ? keys.join('') : keys;
  return await this.inputText(keys);
};

commands.flick = async function (element, xSpeed, ySpeed, xOffset, yOffset, speed) {
  if (element) {
    return await this.fakeFlickElement(element, xOffset, yOffset, speed);
  } else {
    return await this.fakeFlick(xSpeed, ySpeed);
  }
};

commands.fakeFlick = async function (xSpeed, ySpeed) {
  return await this.bootstrap.sendAction('flick', { xSpeed, ySpeed });
};

commands.fakeFlickElement = async function (elementId, xoffset, yoffset, speed) {
  let params = { xoffset, yoffset, speed, elementId };
  return await this.bootstrap.sendAction('element:flick', params);
};

commands.swipe = async function (startX, startY, endX, endY, duration, touchCount, elId) {
  if (startX === 'null') {
    startX = 0.5;
  }
  if (startY === 'null') {
    startY = 0.5;
  }
  let swipeOpts = {
    startX, startY, endX, endY,
    steps: Math.round(duration * swipeStepsPerSec)
  };
  // going the long way and checking for undefined and null since
  // we can't be assured `elId` is a string and not an int
  if (util.hasValue(elId)) {
    swipeOpts.elementId = elId;
  }
  return await this.doSwipe(swipeOpts);
};

commands.doSwipe = async function (swipeOpts) {
  if (util.hasValue(swipeOpts.elementId)) {
    return await this.bootstrap.sendAction("element:swipe", swipeOpts);
  } else {
    return await this.bootstrap.sendAction("swipe", swipeOpts);
  }
};

commands.pullFile = async function (remotePath) {
  const rootDir = path.resolve(__dirname, '..', '..');
  const filePath = path.resolve(rootDir, 'file');
  let localFile = filePath + '/appiumfile.tmp';
  await this.sdb.pull(remotePath, localFile);
  let data = await fs.readFile(localFile);
  let b64data = new Buffer(data).toString('base64');
  if (await fs.exists(localFile)) {
    await fs.unlink(localFile);
  }
  return b64data;
};

async function takeScreenShot (sdb) {
  return await sdb.takeScreenShot();
}

async function getScreenshotData (sdb) {
  const rootDir = path.resolve(__dirname, '..', '..');
  const filePath = path.resolve(rootDir, 'file');
  let localFile = filePath + '/screenShot.tmp';
  if (await fs.exists(localFile)) {
    await fs.unlink(localFile);
  }
  try {
    const pngDir = '/tmp/';
    const png = path.posix.resolve(pngDir, 'dump_screen.png');
    await sdb.pull(png, localFile);
    return await jimp.read(localFile);
  } finally {
    if (await fs.exists(localFile)) {
      await fs.unlink(localFile);
    }
  }
}

commands.getScreenshot = async function () {
  let result = await takeScreenShot(this.sdb);

  if (result) {
    let image = await getScreenshotData(this.sdb);
    const getBuffer = B.promisify(image.getBuffer, { context: image });
    const imgBuffer = await getBuffer(jimp.MIME_PNG);
    return imgBuffer.toString('base64');
  } else {
    return null;
  }
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
