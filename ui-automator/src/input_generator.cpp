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

#include "input_generator.h"

InputGenerator::~InputGenerator() {
  if (ioctl(fake_device, UI_DEV_DESTROY) < 0) {
    _D("Fail to destroy fake uinput device\n");
  }
  close(fake_device);
}

void InputGenerator::SendInputEvent(int fake_device, int type, int code, int value) {
  struct input_event event;

  memset(&event, 0, sizeof(event));
  event.type = type;
  event.code = code;
  event.value = value;

  if (write(fake_device, &event, sizeof(event)) != sizeof(event)) {
    _D("Error to send uinput event");
  }
}
