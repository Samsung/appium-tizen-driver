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

#include "keyboard.h"

Keyboard::Keyboard() {
  leftShiftStatus = false;
  Initialize();
}
Keyboard::~Keyboard() {
  _D("Enter");
}

bool Keyboard::Initialize() {
  memset(&device_information, 0, sizeof device_information);

  const char *file_name = "/dev/uinput";
  fake_device = open(file_name, O_WRONLY | O_NONBLOCK);

  if (fake_device < 0) {
    _D("Fail to open fake uinput device!\n");
    return false;
  }

  SetInputCodes();
  SetDeviceInformation();

  if (write(fake_device, &device_information, sizeof(device_information)) != sizeof(device_information)) {
    _D("Fail to setup uinput structure on fake device\n");
    return false;
  }

  if (ioctl(fake_device, UI_DEV_CREATE) < 0) {
    _D("Fail to create keyboard uinput device\n");
    return false;
  }

  return true;
}

void Keyboard::Down(int key) {
  struct timespec sleeptime = { 0, 1000 };
  if (leftShiftStatus) {
    SendInputEvent(fake_device, EV_KEY, KEY_LEFTSHIFT, 1);
    SendInputEvent(fake_device, EV_SYN, SYN_REPORT, 0);
  }

  SendInputEvent(fake_device, EV_KEY, key, 1);
  SendInputEvent(fake_device, EV_SYN, SYN_REPORT, 0);
  nanosleep(&sleeptime, NULL);

}

void Keyboard::Up(int key) {
  struct timespec sleeptime = { 0, 1000 };
  SendInputEvent(fake_device, EV_KEY, key, 0);
  SendInputEvent(fake_device, EV_SYN, SYN_REPORT, 0);
  nanosleep(&sleeptime, NULL);

  if (leftShiftStatus) {
    SendInputEvent(fake_device, EV_KEY, KEY_LEFTSHIFT, 0);
    SendInputEvent(fake_device, EV_SYN, SYN_REPORT, 0);
    leftShiftStatus = false;
  }
}

void Keyboard::PressKeyCode(char key_code) {
  int key = ConvertKeyCode(key_code);

  Down(key);
  Up(key);
}

int Keyboard::ConvertKeyCode(char key_code) {
  int key = 0;
  map<char, int>::iterator k;
  map<char, char>::iterator ks;

  ks = keyMapSecondary.find(key_code);

  if (ks != keyMapSecondary.end()) {
    k = keyMap.find(ks->second);
    if (k != keyMap.end()) {
      key = k->second;
    }
    leftShiftStatus = true;
  } else if ((int) key_code >= 65 && (int) key_code <= 90) {
    int temp = (int) key_code + 32;
    char tempCode = (char) temp;
    k = keyMap.find(tempCode);
    if (k != keyMap.end()) {
      key = k->second;
    }
    leftShiftStatus = true;
  } else {
    k = keyMap.find(key_code);
    if (k != keyMap.end()) {
      key = k->second;
    }
  }

  return key;
}

bool Keyboard::SetInputCodes() {
  if (ioctl(fake_device, UI_SET_EVBIT, EV_SYN) < 0) {
    _D("Fail ioctl method");
    return false;
  }

  if (ioctl(fake_device, UI_SET_EVBIT, EV_KEY) < 0) {
    _D("Fail ioctl method");
    return false;
  }

  SetKeyCodes();

  return true;
}

void Keyboard::SetDeviceInformation() {
  const char *device_name = "Remote-Input(Keyboard)";
  strncpy(device_information.name, device_name, sizeof(device_information.name) - 1);
  device_information.id.bustype = BUS_USB;
  device_information.id.vendor = 2;
  device_information.id.product = 2;
  device_information.id.version = 2;
}

bool Keyboard::SetKeyCodes() {
  SetKeyMaps();

  for (pair<char, int> k : keyMap) {
    if (ioctl(fake_device, UI_SET_KEYBIT, k.second) < 0) {
      _D("Fail ioctl method");
      return false;
    }
  }

  if (ioctl(fake_device, UI_SET_KEYBIT, KEY_LEFTSHIFT) < 0) {
    _D("Fail ioctl method");
    return false;
  }

  return true;
}

void Keyboard::SetKeyMaps() {
  keyMap['1'] = 2;
  keyMap['2'] = 3;
  keyMap['3'] = 4;
  keyMap['4'] = 5;
  keyMap['5'] = 6;
  keyMap['6'] = 7;
  keyMap['7'] = 8;
  keyMap['8'] = 9;
  keyMap['9'] = 10;
  keyMap['0'] = 11;
  keyMap['-'] = 12;
  keyMap['='] = 13;
  keyMap['q'] = 16;
  keyMap['w'] = 17;
  keyMap['e'] = 18;
  keyMap['r'] = 19;
  keyMap['t'] = 20;
  keyMap['y'] = 21;
  keyMap['u'] = 22;
  keyMap['i'] = 23;
  keyMap['o'] = 24;
  keyMap['p'] = 25;
  keyMap['['] = 26;
  keyMap[']'] = 27;
  keyMap['a'] = 30;
  keyMap['s'] = 31;
  keyMap['d'] = 32;
  keyMap['f'] = 33;
  keyMap['g'] = 34;
  keyMap['h'] = 35;
  keyMap['j'] = 36;
  keyMap['k'] = 37;
  keyMap['l'] = 38;
  keyMap[';'] = 39;
  keyMap['\''] = 40;
  keyMap['z'] = 44;
  keyMap['x'] = 45;
  keyMap['c'] = 46;
  keyMap['v'] = 47;
  keyMap['b'] = 48;
  keyMap['n'] = 49;
  keyMap['m'] = 50;
  keyMap[','] = 51;
  keyMap['.'] = 52;
  keyMap['/'] = 53;
  keyMap[' '] = 57;

  keyMapSecondary['!'] = '1';
  keyMapSecondary['@'] = '2';
  keyMapSecondary['#'] = '3';
  keyMapSecondary['$'] = '4';
  keyMapSecondary['%'] = '5';
  keyMapSecondary['^'] = '6';
  keyMapSecondary['&'] = '7';
  keyMapSecondary['*'] = '8';
  keyMapSecondary['('] = '9';
  keyMapSecondary[')'] = '0';
  keyMapSecondary['_'] = '-';
  keyMapSecondary['+'] = '=';
  keyMapSecondary['{'] = '[';
  keyMapSecondary['}'] = ']';
  keyMapSecondary[':'] = ';';
  keyMapSecondary['"'] = '\'';
  keyMapSecondary['<'] = ',';
  keyMapSecondary['>'] = '.';
  keyMapSecondary['?'] = '/';
}
