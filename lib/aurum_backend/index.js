import executeCmds from './execute';
import { extensions as findCmds, SUPPORTED_LOCATOR_STRATEGIES } from './find';
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

const SYSTEM_PORT = 50051;

export default commands;
export { commands, SYSTEM_PORT, SUPPORTED_LOCATOR_STRATEGIES };
