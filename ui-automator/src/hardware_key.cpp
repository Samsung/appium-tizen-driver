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

#include "hardware_key.h"

HardWareKey::HardWareKey() {
  Initialize();
}

HardWareKey::~HardWareKey() {
  _D("Enter");
}

bool HardWareKey::Initialize() {
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
    _D("Fail to create hardware key uinput device\n");
    return false;
  }

  return true;
}

void HardWareKey::PressKeyCode(string keyCode) {
  KeyCodes key = KeyCodes::BACK;

  if (keyCode.compare("home") == 0) {
    key = KeyCodes::HOME;
  } else if (keyCode.compare("back") == 0) {
    key = KeyCodes::BACK;
  } else if (keyCode.compare("phone") == 0) {
    key = KeyCodes::PHONE;
  } else if (keyCode.compare("power") == 0) {
    key = KeyCodes::POWER;
  } else if (keyCode.compare("volumnDown") == 0) {
    key = KeyCodes::VOLUME_DOWN;
  } else if (keyCode.compare("volumnUp") == 0) {
    key = KeyCodes::VOLUME_UP;
  }
  PressKeyCode(key);
}

void HardWareKey::PressKeyCode(KeyCodes keyCode) {
  int key;
  switch (keyCode) {
    case HOME:
      key = KEY_MENU;
      break;
    case BACK:
      key = KEY_BACK;
      break;
    case PHONE:
      key = KEY_PHONE;
      break;
    case POWER:
      key = KEY_POWER;
      break;
    case VOLUME_DOWN:
      key = KEY_VOLUMEDOWN;
      break;
    case VOLUME_UP:
      key = KEY_VOLUMEUP;
      break;
    default:
      key = 0;
      break;
  }
  Down(key);
  Up(key);
}

void HardWareKey::Down(int key) {
  SendInputEvent(fake_device, EV_KEY, key, 1);
  SendInputEvent(fake_device, EV_SYN, SYN_REPORT, 0);
}

void HardWareKey::Up(int key) {
  SendInputEvent(fake_device, EV_KEY, key, 0);
  SendInputEvent(fake_device, EV_SYN, SYN_REPORT, 0);
}

bool HardWareKey::SetInputCodes() {
  if (ioctl(fake_device, UI_SET_EVBIT, EV_SYN) < 0) {
    _D("Fail ioctl EV_SYN");
    return false;
  }

  if (ioctl(fake_device, UI_SET_EVBIT, EV_KEY) < 0) {
    _D("Fail ioctl EV_KEY");
    return false;
  }

  if (ioctl(fake_device, UI_SET_KEYBIT, KEY_MENU) < 0) {
    _D("Fail ioctl HOME KEY");
    return false;
  }

  if (ioctl(fake_device, UI_SET_KEYBIT, KEY_BACK) < 0) {
    _D("Fail ioctl BACK KEY");
    return false;
  }

  if (ioctl(fake_device, UI_SET_KEYBIT, KEY_PHONE) < 0) {
    _D("Fail ioctl PHONE KEY");
    return false;
  }

  if (ioctl(fake_device, UI_SET_KEYBIT, KEY_POWER) < 0) {
    _D("Fail ioctl POWER KEY");
    return false;
  }

  if (ioctl(fake_device, UI_SET_KEYBIT, KEY_VOLUMEDOWN) < 0) {
    _D("Fail ioctl VOLUMEDOWN KEY");
    return false;
  }

  if (ioctl(fake_device, UI_SET_KEYBIT, KEY_VOLUMEUP) < 0) {
    _D("Fail ioctl VOLUMEUP KEY");
    return false;
  }
  return true;
}

void HardWareKey::SetDeviceInformation() {
  const char *device_name = "Remote-Input(HardWareKey)";
  strncpy(device_information.name, device_name, sizeof(device_information.name) - 1);
  device_information.id.bustype = BUS_USB;
  device_information.id.vendor = 3;
  device_information.id.product = 3;
  device_information.id.version = 3;
}
