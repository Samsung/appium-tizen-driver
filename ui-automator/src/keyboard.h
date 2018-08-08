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

#include <map>

using std::map;

class Keyboard : InputGenerator {
 public:
  Keyboard();
  virtual ~Keyboard();
  void PressKeyCode(char key_code);
  void Down(int key);
  void Up(int key);
 protected:
  virtual bool Initialize();
  virtual bool SetInputCodes();
  virtual void SetDeviceInformation();

 private:
  bool leftShiftStatus;
  map<char, int> keyMap;
  map<char, char> keyMapSecondary;

  int ConvertKeyCode(char key_code);

  bool SetKeyCodes();
  void SetKeyMaps();
};
