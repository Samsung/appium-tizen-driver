import { errors } from 'appium-base-driver';

let commands = {}, extensions = {};

commands.execute = async function (script) {
  // Aurum does not support JS script execution on-device
  throw new errors.UnsupportedOpperationError('Execution of JS on device under test is not supported.');
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
