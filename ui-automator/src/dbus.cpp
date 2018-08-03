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
#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <set>
#include <list>
#include <algorithm>
#include <functional>
#include <boost/tokenizer.hpp>
#include <dbus/dbus.h>
#include <E_DBus.h>

#include "log.h"
#include "server.h"
#include "dbus.h"

#define DBUS_REPLY_TIMEOUT (-1)

using namespace boost;
using namespace std;

vector<SignalHandler> DBusSignal::SignalVector;

DBusSignal::DBusSignal()
    : EdbusConnection(NULL),
      EdbusHandler(NULL) {
}

DBusSignal::~DBusSignal() {
  if (EdbusHandler != NULL) {
    e_dbus_signal_handler_del(EdbusConnection, EdbusHandler);
    EdbusHandler = NULL;
  }

  if (EdbusConnection != NULL) {
    e_dbus_connection_close(EdbusConnection);
    EdbusConnection = NULL;
  }
}

DBusSignal* DBusSignal::GetInstance() {
  static DBusSignal instance;
  return &instance;
}

int DBusSignal::InitConnection() {
  _D("InitConnection");
  if (nullptr != EdbusConnection) {
    _E("Finish already to initailize connection");
  }

  e_dbus_init();
  EdbusConnection = e_dbus_bus_get(DBUS_BUS_SYSTEM);
  if (EdbusConnection == NULL) {
    _E("Failed to e_dbus_bus_get");
    return -1;
  }

  EdbusHandler = e_dbus_signal_handler_add(EdbusConnection, NULL, "/org/tizen/appium", "org.tizen.appium", "Input", DBusSignalHandler, 0);
  if (EdbusHandler == NULL) {
    _E("fail to add size signal");
    return -1;
  }

  EdbusHandler = e_dbus_signal_handler_add(EdbusConnection, NULL, "/aul/dbus_handler", "org.tizen.aul.signal", "app_launch", DBusAppSignalHandler, 0);
  if (EdbusHandler == NULL) {
    _E("Failed to e_dbus_signal_handler_add");
    return -1;
  }

  return 0;
}

void DBusSignal::DBusSignalHandler(void *data, DBusMessage *msg) {
  _D("Enter");
  DBusMessageIter args;
  char* type;
  char* first;
  char* second;
  if (dbus_message_iter_init(msg, &args)) {
    dbus_message_iter_get_basic(&args, &type);
    dbus_message_iter_next(&args);
    dbus_message_iter_get_basic(&args, &first);
    dbus_message_iter_next(&args);
    dbus_message_iter_get_basic(&args, &second);
    dbus_message_iter_next(&args);
    _D("Type=%s, 1st=%s, 2nd=%s", type, first, second);

    string action = type;
    CommandHandler handler = Server::GetInstance().GetHandler(type);

    if(handler != nullptr) {
      //sleep(1);
      handler(first, second);
    } else {
      _D("Invalid Command");
    }

  } else {
    _D("Invalid Message");
  }

  return;
}

void DBusSignal::DBusAppSignalHandler(void *data, DBusMessage *msg) {
  if (NULL == msg) {
    _E("DBusMessage is null");
    return;
  }

  DBusMessageIter args;
  unsigned int pid = -1;
  char* app_name;
  if (dbus_message_iter_init(msg, &args)) {
    dbus_message_iter_get_basic(&args, &pid);
    dbus_message_iter_next(&args);
    dbus_message_iter_get_basic(&args, &app_name);
    _D("pid=%u app_name=%s", pid, app_name);

    if (strstr(app_name, "syspopup") != NULL) {
      kill(pid, 9);
      _D("PopupController kills %s during UI testing", app_name);
    }
  } else {
    _D("Invalid Message");
  }

  return;
}
