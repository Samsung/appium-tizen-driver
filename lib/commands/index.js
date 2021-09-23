/*
 * Copyright (c) 2018-2021 Samsung Electronics Co., Ltd All Rights Reserved
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
import executeCmds from './execute';
import { extensions as findCmds, SUPPORTED_LOCATOR_STRATEGIES } from './find';
import generalCmds from './general';
import elementCmds from './element';
import actionCmds from './action';
import { commands as touchCmds } from './touch';

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

const AURUM_PORT = 50051;

export default commands;
export { commands, AURUM_PORT, SUPPORTED_LOCATOR_STRATEGIES };
