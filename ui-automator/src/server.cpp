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

#include "type.h"
#include "server.h"

using namespace std;

Server::Server() {
  _D("Enter");
  touch = new Touch();
  keyboard = new Keyboard();
  hardwareKey = new HardWareKey();
}

Server::~Server() {
  _D("Enter");
  delete touch;
  delete keyboard;
  delete hardwareKey;
}

Server& Server::GetInstance() {
  static Server instance;
  return instance;
}

CommandHandler Server::GetHandler(string action)
{
  _D("action: %s", action.c_str());

  if (_handlerMap.find(action) != _handlerMap.end()) {
       _D("[%s] Handler", action.c_str());
       return _handlerMap[action];
     } else {
       _D("Not found action");
       return nullptr;
     }
}

void Server::AddHandler(string action, CommandHandler function) {
  _handlerMap[action] = std::move(function);
}

void Server::InputTextHandler(char* first, char* second) {
  int count = strlen(first);
  for (int i = 0; i < count; i++) {
    keyboard->PressKeyCode(first[i]);
  }
}

void Server::ClickHandler(char* first, char* second) {
  int x = atoi(first);
  int y = atoi(second);
  touch->Click(x, y);
}

void Server::DownHandler(char* first, char* second) {
  int x = atoi(first);
  int y = atoi(second);
  touch->Down(x, y);
}

void Server::UpHandler(char* first, char* second) {
  int x = atoi(first);
  int y = atoi(second);
  touch->Up(x, y);
}

void Server::MoveHandler(char* first, char* second) {
  int x = atoi(first);
  int y = atoi(second);
  touch->Move(x, y);
}

void Server::LongPressHandler(char* first, char* second) {
  int x = atoi(first);
  int y = atoi(second);
  int duration = 2000;
  touch->Down(x, y);
  usleep(duration);
  touch->Up(x, y);
}

void Server::FlickHandler(char* first, char* second) {
  int xSpeed = atoi(first);
  int ySpeed = atoi(second);
  touch->Flick(xSpeed, ySpeed);
}

void Server::BackHandler(char* first, char* second) {
  hardwareKey->PressKeyCode("back");
}

void Server::init() {
  _D("Init");

  AddHandler(EVENT_CLICK, std::bind(&Server::ClickHandler, this, std::placeholders::_1, std::placeholders::_2));
  AddHandler(EVENT_DOWN, std::bind(&Server::DownHandler, this, std::placeholders::_1, std::placeholders::_2));
  AddHandler(EVENT_UP, std::bind(&Server::UpHandler, this, std::placeholders::_1, std::placeholders::_2));
  AddHandler(EVENT_MOVE, std::bind(&Server::MoveHandler, this, std::placeholders::_1, std::placeholders::_2));
  AddHandler(EVENT_LONGPRESS, std::bind(&Server::LongPressHandler, this, std::placeholders::_1, std::placeholders::_2));
  AddHandler(EVENT_FLICK, std::bind(&Server::FlickHandler, this, std::placeholders::_1, std::placeholders::_2));
  AddHandler(EVENT_INPUTTEXT, std::bind(&Server::InputTextHandler, this, std::placeholders::_1, std::placeholders::_2));
  AddHandler(EVENT_BACK, std::bind(&Server::BackHandler, this, std::placeholders::_1, std::placeholders::_2));
}
