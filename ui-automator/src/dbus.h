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

#ifndef _DBUS_UTILS_H_
#define _DBUS_UTILS_H_

#include <string>
#include <vector>
#include <map>
#include <set>
#include <functional>
#include <dbus/dbus.h>
#include <E_DBus.h>

using namespace std;

typedef std::function<void(void *data, DBusMessage *msg)> SignalHandler;

class DBusSignal {
 public:
  DBusSignal();
  virtual ~DBusSignal();
  static DBusSignal* GetInstance();

  int InitConnection();
  static void DBusAppSignalHandler(void *data, DBusMessage *msg);
  static void DBusSignalHandler(void *data, DBusMessage *msg);
  static void TouchHandler(void *data, DBusMessage *msg);
  static void KeyboardHandler(void *data, DBusMessage *msg);
  static void HardwareKeyHandler(void *data, DBusMessage *msg);
 private:
  E_DBus_Connection* EdbusConnection;
  E_DBus_Signal_Handler* EdbusHandler;
  static vector<SignalHandler> SignalVector;
};

#endif // _DBUS_UTILS_H_
