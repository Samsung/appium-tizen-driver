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
import { errors } from 'appium-base-driver';

let commands = {}, extensions = {};

commands.execute = async function (script) {
  // Aurum does not support JS script execution on-device
  throw new errors.UnsupportedOpperationError('Execution of JS on device under test is not supported.');
};

Object.assign(extensions, commands);
export { commands };
export default extensions;
