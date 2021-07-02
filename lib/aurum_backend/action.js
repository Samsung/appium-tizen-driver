import { fs } from 'appium-support';
import _ from 'lodash';
import B from 'bluebird';
import path from 'path';
import jimp from 'jimp';
import log from '../logger';

import { errors } from 'appium-base-driver';

let commands = {}, extensions = {};

commands.flick = async function (element, xSpeed, ySpeed, xOffset, yOffset, speed) {
  throw new errors.NotImplementedError('TODO');
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

commands.pushFile = async function (file, base64Data) {
  const rootDir = path.resolve(__dirname, '..', '..', '..');
  const fileDir = path.resolve(rootDir, 'app');
  const localFile = path.resolve(fileDir, file);
  if (file.indexOf('/') > -1) {
    log.errorAndThrow(`It is expected that file point to a file and not to a folder. ` + `'${file}' is given instead`);
  }

  if (_.isArray(base64Data)) {
    base64Data = Buffer.from(base64Data).toString('utf8');
  }

  const content = Buffer.from(base64Data, 'base64');
  let isFileDir = await fs.exists(fileDir);
  if (!isFileDir) {
    await fs.mkdir(fileDir);
  }

  await fs.writeFile(localFile, content.toString('binary'), 'binary');

  return true;
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
