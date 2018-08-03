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

#include <tgmath.h>
#include <algorithm>

#define TRACKING_ID_MAX 65535

class Touch : InputGenerator {
 public:
  Touch();
  virtual ~Touch();

  void Click(int x, int y);
  void Up(int x, int y);
  void Down(int x, int y);
  void Move(int x, int y);
  void Flick(int xSpeed, int ySpeed);
  void Swipe(int xDown, int yDown, int xUp, int yUp, int steps);

 protected:
  virtual bool Initialize();
  virtual bool SetInputCodes();
  virtual void SetDeviceInformation();

 private:
  struct Point {
    int x;
    int y;
  };

  int _tracking_id;
  int _screen_width; // ABS_X_MAX
  int _screen_height; // ABS_Y_MAX
  int _x_mid; // ABS_X_MID
  int _y_mid; // ABS_Y_MID

  int GetCurrentTrackingId();
  int GetEndPoint(int mid, int speed);
};
