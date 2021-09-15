/*
 * Copyright (c) 2018-2021 Samsung Electronics Co., Ltd All Rights Reserved
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
import log from '../logger';
import { errors } from 'appium-base-driver';
import { throwOnUnsuccessfulAurumCall } from './utils';
import messages from './aurum_pb';

let commands = {};

/*
 * Finger movements shorter than 20 pixels don't trigger screen scrolling
 * on Tizen devices.
 */
const SCROLL_DETECTION_THRESHOLD = 20;

/*
 * When we do a flick and want the screen to scroll the same amount as the
 * length of the flick (minus SCROLL_DETECTION_THRESHOLD), we have to move
 * the finger slowly.
 * If the finger moves fast, the screen scrolls more than the length of the
 * flick due to the simulated inertia of the screen.
 * 2000 ms is slow enough for flicks to scroll the screen the same amount
 * as the length of a flick.
 */
const SLOW_FLICK_DURATION = 2000;

commands.doFlick = function (startXY, stopXY, durationMs) {
  const flickReq = new messages.ReqFlick();
  flickReq.setStartpoint(xyToPoint(...startXY));
  flickReq.setEndpoint(xyToPoint(...stopXY));
  flickReq.setDurationms(durationMs);

  return new Promise((resolve, reject) => {
    const call = this.aurumClient.flick(flickReq,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('flick', error, result);
        return resolve();
      });
  });
};

commands.scrollElementIntoView = async function (elementId) {
  const locationInView = await this.getLocationInView(elementId);
  const needToScrollX = 0 > locationInView.x || locationInView.x >= this.screenResolution.x;
  const needToScrollY = 0 > locationInView.y || locationInView.y >= this.screenResolution.y;
  if (!needToScrollX && !needToScrollY) {
    // Element in view - no need to scroll
    return;
  }

  const screenCenter = {
    x: Math.round(this.screenResolution.x / 2),
    y: Math.round(this.screenResolution.y / 2)
  };

  if (needToScrollX) {
    let toScrollX = needToScrollX ? (locationInView.x - screenCenter.x) : 0;
    const flickFromLeftToRight = toScrollX < 0;
    const startX = flickFromLeftToRight ? 1 : (this.screenResolution.x - 1);
    const stopX = this.screenResolution.x - startX;
    const absStartToStopX = Math.abs(stopX - startX);
    // In case of extremely tiny screens (< 20 px wide)
    const singleFullFlickScreenDisplacementX = Math.max(0, absStartToStopX - SCROLL_DETECTION_THRESHOLD);

    let flicksToDoX;
    if (singleFullFlickScreenDisplacementX <= 0) {
      // Just in case of a highly unlikely case of a screen less than
      // SCROLL_DETECTION_THRESHOLD wide
      flicksToDoX = 0;
    } else {
      /*
      * This is intentionally a float (i.e. a non-integer) - often, this function will
      * have to do non-integral number of flicks, e.g. ~ 1.5 flicks to move the
      * view by 150 pixels on a screen of width = 100.
      */
      flicksToDoX = Math.abs(toScrollX) / singleFullFlickScreenDisplacementX;
    }
    while (flicksToDoX !== 0) {
      if (flicksToDoX >= 1) {
        await this.doFlick([startX, screenCenter.y], [stopX, screenCenter.y], SLOW_FLICK_DURATION);
        flicksToDoX--;
      } else {
        const lastStopX = Math.abs(flicksToDoX * this.screenResolution.x - startX);
        await this.doFlick([startX, screenCenter.y], [lastStopX, screenCenter.y], SLOW_FLICK_DURATION);
        flicksToDoX = 0;
      }
    }
  }

  if (needToScrollY) {
    let toScrollY = needToScrollY ? (locationInView.y - screenCenter.y) : 0;
    const flickFromTopToBottom = toScrollY < 0;
    /*
     * In case of Y-axis and flicking from top to bottom, we mustn't start
     * flicking from the 1st pixel, but somewhere further.
     * Starting from the first pixel pulls down the notification bar.
     */
    const startY = flickFromTopToBottom ? Math.round(this.screenResolution.y / 10) : (this.screenResolution.y - 1);
    const stopY = flickFromTopToBottom ? this.screenResolution.y - 1 : 1;
    const absStartToStopY = Math.abs(stopY - startY);
    const singleFullFlickScreenDisplacementY = absStartToStopY - SCROLL_DETECTION_THRESHOLD;

    let flicksToDoY;
    if (singleFullFlickScreenDisplacementY <= 0) {
      flicksToDoY = 0;
    } else {
      flicksToDoY = Math.abs(toScrollY) / singleFullFlickScreenDisplacementY;
    }
    while (flicksToDoY !== 0) {
      if (flicksToDoY >= 1) {
        await this.doFlick([screenCenter.x, startY], [screenCenter.x, stopY], SLOW_FLICK_DURATION);
        flicksToDoY--;
      } else {
        const lastStopY = Math.abs(Math.round(flicksToDoY * this.screenResolution.y - startY));
        await this.doFlick([screenCenter.x, startY], [screenCenter.x, lastStopY], SLOW_FLICK_DURATION);
        flicksToDoY = 0;
      }
    }
  }
};

/*
* Spec: https://w3c.github.io/webdriver/webdriver-spec.html#element-click
*/
commands.click = async function (elementId) {
  await this.scrollElementIntoView(elementId);

  const clickReq = new messages.ReqClick();
  clickReq.setType(messages.ReqClick.RequestType.ELEMENTID);
  clickReq.setElementid(elementId);

  return new Promise((resolve, reject) => {
    const call = this.aurumClient.click(clickReq,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('click', error, result);
        return resolve();
      });
  });
};

/*
 * Spec: http://appium.io/docs/en/commands/interactions/touch/long-press/
 * Appium spec does not require touchLongClick to scroll an
 * element into view if it's not visible, but we do this to
 * remain consistent with click().
 */
commands.touchLongClick = async function (elementId) {
  await this.scrollElementIntoView(elementId);

  const {x, y} = await this.getLocationInView(elementId);

  await this.performTouch([
    {
      action: 'press',
      options: {
        x,
        y
      }
    },
    {
      action: 'wait',
      options: {
        ms: 1000
      }
    },
    {
      action: 'release',
      options: {
        x,
        y
      }
    }
  ]);
};

/*
 * Spec: http://appium.io/docs/en/commands/interactions/touch/flick/
 *
 * DO NOT USE xSpeed AND ySpeed ARGUMENTS. Use speed, instead.
 * Explanation:
 * This Appium API is broken by design - xSpeed and ySpeed should be chosen
 * so that the (xSpeed + ySpeed) vector points in the direction of
 * the end point. There's only 1 (xSpeed, ySpeed) pair that fulfills
 * this condition and all others don't.
 * Extreme (but likely to happen in practice) example:
 * xOffset = 10, yOffset = 10, ySpeed = 1, xSpeed = 0
 * The flick shouldn't ever reach the xOffset, because x-axis speed is 0...
 *
 * This is why we throw InvalidArgumentError when (speedX, speedY) vector
 * is misaligned with the (xOffset, yOffset) vector.
 */
commands.flick = async function (elementId, xSpeed, ySpeed, xOffset, yOffset, speed) {
  if (!Number.isInteger(xOffset) || !Number.isInteger(yOffset)) {
    throw new errors.InvalidArgumentError('"xOffset" and "yOffset" must be integers');
  }

  const startXY = await this.getLocationInView(elementId);
  if (startXY.x < 0 || startXY.x >= this.screenResolution.x ||
      startXY.y < 0 || startXY.y >= this.screenResolution.y) {
    throw new errors.InvalidCoordinatesError('Start point for flick must be within screen area');
  }

  const stopXY = {
    x: startXY.x + xOffset,
    y: startXY.y + yOffset
  };

  if (stopXY.x < 0 || stopXY.x >= this.screenResolution.x ||
      stopXY.y < 0 || stopXY.y >= this.screenResolution.y) {
    throw new errors.InvalidCoordinatesError('End point for flick must be within screen area');
  }

  const offsetLength = Math.sqrt(xOffset ** 2 + yOffset ** 2);

  if (speed === undefined) {
    if (!Number.isFinite(xSpeed) || !Number.isFinite(ySpeed)) {
      throw new errors.InvalidArgumentError('All speed components must be positive, finite numbers');
    }
    const offsetVersor = {
      x: xOffset / offsetLength,
      y: yOffset / offsetLength
    };

    const speedOffsetVersorDotProduct = xSpeed * offsetVersor.x + ySpeed * offsetVersor.y;
    const speedVectorLength = Math.sqrt(xSpeed ** 2 + ySpeed ** 2);
    /*
     * We allow for some misalignment of the speed and offset vectors
     * - if the length of the projection projection of the speed vector on
     * the offset axis is >= 99% of the speed vector length, then we
     * accept this speed vector.
     */
    if (0.99 * speedVectorLength > speedOffsetVersorDotProduct) {
      throw new errors.InvalidArgumentError('"speedX" and "speedY" must form a vector (speedX, speedY) that points in the same direction as the (offsetX, offsetY) vector direction. It is strongly advised to use "speed" argument instead of "speedX", "speedY" pair to avoid such mistakes');
    }
    speed = Math.round(speedVectorLength);
  } else {
    if (!Number.isFinite(speed) || speed < 0) {
      throw new errors.InvalidArgumentError('Speed must be a positive, finite number');
    }
  }

  const durationMs = Math.round(offsetLength / speed);
  return this.doFlick([startXY.x, startXY.y], [stopXY.x, stopXY.y], durationMs);
};

/*
 * When Aurum's touchDown command is called, a sequence of
 * touch* actions is started, which is finished with a touchUp
 * call. Each such sequence has its id - seqId, which is generated
 * and returned from touchDown and has to be passed to touchMove
 * and touchUp.
 * touch{Move, Up} with a non-existent seqIds are no-ops, Aurum
 * does not return errors on such calls.
 *
 * Appium has no corresponding concept of move sequence (it has performTouch
 * sequences, but they're something different). In Appium
 * touch{Down, Move, Up} can be called in any order.
 *
 * To marry Appium with Aurum's touch operations, we store seqIds
 * on the stack. Each call of touch{Move, Up} uses the last seqId.
 * If there's no started sequence (i.e. the stack is empty), we
 * use NONEXISTENT_SEQ_ID.
 */
const NONEXISTENT_SEQ_ID = -1000_000_000;

function initTouchSequencesStack (targetThis) {
  if (Object.prototype.hasOwnProperty.call(targetThis, '_startedTouchSequencesStack')) {
    return;
  }

  Object.defineProperty(targetThis, '_startedTouchSequencesStack', {
    value: []
  });
}

function xyToPoint (x, y) {
  const coords = new messages.Point();
  /*
   * Aurum ignores commands with x or y = 0 as arguments.
   * Thus, we ensure, that these coordinates are translated to valid
   * values.
   */
  x ||= 1;
  y ||= 1;
  coords.setX(x);
  coords.setY(y);
  return coords;
}

/*
 * Spec: http://appium.io/docs/en/commands/interactions/touch/touch-down/
 */
commands.touchDown = function (x, y) {
  initTouchSequencesStack(this);

  const touchDownReq = new messages.ReqTouchDown();
  touchDownReq.setCoordination(xyToPoint(x, y));

  return new Promise((resolve, reject) => {
    const call = this.aurumClient.touchDown(touchDownReq,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('touchDown', error, result);

        const seqId = result.getSeqid();
        if (seqId < 0) {
          log.error(`touchDown() failed - seqId: ${seqId}`);
          reject(new errors.UnknownError(`touchDown failed! seqId: ${seqId}`));
        }

        this._startedTouchSequencesStack.push(seqId);
        return resolve();
      });
  });
};

/*
 * Spec: http://appium.io/docs/en/commands/interactions/touch/move/
 */
commands.touchMove = function (x, y) {
  initTouchSequencesStack(this);

  const touchMoveReq = new messages.ReqTouchMove();
  touchMoveReq.setCoordination(xyToPoint(x, y));

  /*
   * When no touch sequence is started, we pass a non-existent
   * seqId. When tested manually, Aurum's touchMove with
   * bogus seqIds is just a no-op.
   * The Appium/JSONWP spec don't specify any possible errors from
   * touchMove, so we just ignore invalid touchMove calls.
   */
  const seqId = this._startedTouchSequencesStack[this._startedTouchSequencesStack.length - 1] ?? NONEXISTENT_SEQ_ID;
  touchMoveReq.setSeqid(seqId);

  return new Promise((resolve, reject) => {
    const call = this.aurumClient.touchMove(touchMoveReq,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('touchMove', error, result);
        return resolve();
      });
  });
};

/*
 * Spec: http://appium.io/docs/en/commands/interactions/touch/touch-up/
 */
commands.touchUp = function (x, y) {
  initTouchSequencesStack(this);

  /*
   * Some Appium client libraries (e.g. the Java library) don't send
   * (x, y) coordinates for the touchUp command (despite they're
   * not optional according to the spec).
   * To handle such input, we set (x, y) to a valid value. We chose
   * (1, 1), but it seems, that the value doesn't change behavior as long as
   * it is valid.
   */
  x ||= 1;
  y ||= 1;

  const touchUpReq = new messages.ReqTouchUp();
  touchUpReq.setCoordination(xyToPoint(x, y));

  /*
   * When no touch sequence is started, we pass a non-existent
   * seqId. When tested manually, Aurum's touchUp with
   * bogus seqIds is just a no-op.
   * The Appium/JSONWP spec don't specify any possible errors from
   * touchUp, so we just ignore invalid touchUp calls.
   */
  const seqId = this._startedTouchSequencesStack[this._startedTouchSequencesStack.length - 1] ?? NONEXISTENT_SEQ_ID;
  touchUpReq.setSeqid(seqId);

  return new Promise((resolve, reject) => {
    const call = this.aurumClient.touchUp(touchUpReq,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('touchUp', error, result);

        /*
         * touchUp finishes the sequence of touch actions and
         * invalidates the last seqId.
         */
        this._startedTouchSequencesStack.pop();
        return resolve();
      });
  });
};

commands.tap = async function (x, y) {
  const clickReq = new messages.ReqClick();
  clickReq.setType(messages.ReqClick.RequestType.COORD);
  clickReq.setCoordination(xyToPoint(x, y));

  return new Promise((resolve, reject) => {
    const call = this.aurumClient.click(clickReq,
      (error, result) => {
        throwOnUnsuccessfulAurumCall('tap', error, result);
        return resolve();
      });
  });
};

commands.performTouchAction = async function (action, opts) {
  if (action === 'wait') {
    return new Promise((resolve) => {
      setTimeout(resolve, opts.ms);
    });
  }

  opts.count ??= 1;
  if (action === 'tap' && opts.element !== undefined) {
    for (let i = 0; i < opts.count; i++) {
      await this.click(opts.element);
    }
    return;
  }

  // We don't validate elementId or coordinates - touch*
  // commands will do that
  let x, y;
  if (opts.element) {
    const elementPosition = await this.getLocationInView(opts.element);
    ({ x, y } = elementPosition);
  } else {
    ({ x, y } = opts);
  }

  switch (action) {
    case 'press':
      return this.touchDown(x, y);
    case 'release':
      return this.touchUp(x, y);
    case 'moveTo':
      return this.touchMove(x, y);
    case 'tap':
      for (let i = 0; i < opts.count; i++) {
        return this.tap(x, y);
      }
  }
};

/*
 * Spec: http://appium.io/docs/en/commands/interactions/touch/touch-perform/
 *
 * As the spec tells little about how performTouch should work,
 * we've implemented it in a way similar to the legacy implementation.
 */
commands.performTouch = async function (actionSequence) {
  for (let { action, options } of actionSequence) {
    await this.performTouchAction(action, options || {});
  }
  return true;
};

export { commands };
export default commands;
