/*
 * Copyright (c) 2016 Samsung Electronics Co., Ltd All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <Ecore.h>

#include "log.h"
#include "dbus.h"
#include "server.h"

int main(int argc, char **argv) {
  _D("UIAutomator Start");
  eina_init();
  ecore_init();

  Server::GetInstance().init();
  DBusSignal::GetInstance()->InitConnection();

  ecore_main_loop_begin();
  ecore_shutdown();
  return 0;
}
