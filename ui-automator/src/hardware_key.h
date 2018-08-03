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

/*
 0 : Home Button
 1 : Back Button
 2 : Phone Button
 3 : Power Button
 4 : Volume down Button
 5 : Volume up Button
 */
enum KeyCodes {
  HOME = 0,
  BACK,
  PHONE,
  POWER,
  VOLUME_DOWN,
  VOLUME_UP
};

class HardWareKey : InputGenerator {
 public:
  HardWareKey();
  virtual ~HardWareKey();
  void Down(int key);
  void Up(int key);
  void PressKeyCode(KeyCodes keyCode);
  void PressKeyCode(string keyCode);
 protected:
  virtual bool Initialize();
  virtual bool SetInputCodes();
  virtual void SetDeviceInformation();
};
