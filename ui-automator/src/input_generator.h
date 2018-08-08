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

#ifndef __INPUT_GENERATOR_H_
#define __INPUT_GENERATOR_H_

#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <linux/input.h>
#include <linux/uinput.h>
#include <string>
#include <string.h>

#include "log.h"

using namespace std;

class InputGenerator {
 public:
  void SendInputEvent(int fake_device, int type, int code, int value);
 protected:
  ~InputGenerator();

  int fake_device;
  struct uinput_user_dev device_information;
  virtual bool Initialize() = 0;
  virtual bool SetInputCodes() = 0;
  virtual void SetDeviceInformation() = 0;
 private:
  int fd_uinput_mouse;
  int id;
};

#endif /* __INPUT_GENERATOR_H_ */
