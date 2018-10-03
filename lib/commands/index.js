import executeCmds from './execute';
import findCmds from './find';
import generalCmds from './general';
import elementCmds from './element';
import actionCmds from './action';
import touchCmds from './touch';

let commands = {};
Object.assign(
  commands,
  executeCmds,
  findCmds,
  generalCmds,
  elementCmds,
  actionCmds,
  touchCmds
);

export { commands };
export default commands;
