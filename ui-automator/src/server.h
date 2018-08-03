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

#ifndef __SERVER_H_
#define __SERVER_H_

#include <map>
#include <string>
#include <Ecore.h>
#include <functional>
#include <condition_variable>

#include "hardware_key.h"
#include "keyboard.h"
#include "touch.h"

using namespace std;

typedef std::function<void(char* first, char* second)> CommandHandler;

class Server {
 public:
  Server();
  virtual ~Server();

  void exit();
  void init();

  static Server& GetInstance();
  CommandHandler GetHandler(string action);

  void AddHandler(string action, CommandHandler function);
  void InputTextHandler(char* first, char* second);
  void ClickHandler(char* first, char* second);
  void DownHandler(char* first, char* second);
  void UpHandler(char* first, char* second);
  void MoveHandler(char* first, char* second);
  void LongPressHandler(char* first, char* second);
  void FlickHandler(char* first, char* second);
  void BackHandler(char* first, char* second);

 private:
  Touch* touch;
  Keyboard* keyboard;
  HardWareKey* hardwareKey;

  std::map<string, CommandHandler> _handlerMap;
};

#endif /* __SERVER_H_ */
