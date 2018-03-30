let commands = {}, extensions = {};

commands.execute = async function (script) {
  return await eval(script);
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
