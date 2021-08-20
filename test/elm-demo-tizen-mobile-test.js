import { errors } from 'appium-base-driver';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
const utils = require('./utils');

const TizenDriver = require('../lib/driver').TizenDriver;

chai.use(chaiAsPromised);
const assert = chai.assert;

async function getTizenDriver () {
  const opts = {
    tizenBackend: 'aurum',
    appPackage: 'org.tizen.elm-demo-tizen-mobile'
  };

  const driver = new TizenDriver(opts, true);
  const sessionCaps = {
    platformName: 'tizen',
    deviceName: 'TM1',
    appPackage: 'org.tizen.elm-demo-tizen-mobile'
  };

  await driver.createSession(sessionCaps);
  return driver;
}

let driver;
beforeEach('initialize driver', async function () {
  driver = await getTizenDriver();
});

afterEach('Delete driver\'s session', async function () {
  if (await driver.isStartedApp()) {
    await driver.deleteSession();
  }
});

describe('Application management', function () {
  beforeEach(async function () {
    await driver.closeApp();
  });

  describe('isStartedApp', function () {
    it('should return "false" when app is not running', async function () {
      let result = await driver.isStartedApp();
      assert.isBoolean(result);
      assert.isFalse(result);
    });

    it('should return "true" when app is running', async function () {
      await driver.startApp();
      let result = await driver.isStartedApp();
      assert.isBoolean(result);
      assert.isTrue(result);
    });
  });
});

describe('findElement', function () {
  let buttonObject;
  beforeEach('get buttonId', async function () {
    const buttonId = await driver.findElementId('-tizen aurum', {textField: 'Button'});
    buttonObject = (await driver.getElement(buttonId)).toObject();
  });

  describe('using "-tizen aurum" strategy', function () {
    it('should support nested selectors', async function () {
      let result = (await driver.findElement('-tizen aurum', {
        children: [{
          isClickable: true
        }, {
          isShowing: true
        }]
      })).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
    });

    it ('should find an array of non-zero elements when no constraint is set', async function () {
      let result = (await driver.findElement('-tizen aurum', {/* No constraints */})).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
    });

    it ('should find an element with a simple single-condition strategy', async function () {
      let result = (await driver.findElement('-tizen aurum', {isClickable: true})).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
    });
  });

  describe('using standard JSON Wire Protocol strategies', function () {
    /*
     * There's no test for "automationId" strategy, because
     * no element from elm-demo-tizen-mobile app has "automationId"
     * value set.
     */
    it('should support "accessibility id" strategy', async function () {
      /*
       * As long, as findElement is broken (see
       * https://github.sec.samsung.net/tizen/aurum/issues/10)
       * this test case fails.
       */
      const existingAccessibilityId = buttonObject.elementid;
      const result = (await driver.findElement('accessibility id', existingAccessibilityId)).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
      assert.strictEqual(result, buttonObject.elementid);
    });

    it('should support "name" strategy', async function () {
      const existingName = buttonObject.text;
      const result = (await driver.findElement('name', existingName)).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
      assert.strictEqual(result, buttonObject.elementid);
    });

    it('should support "class name" strategy', async function () {
      const existingClassName = 'Elm_Box';
      const elmBoxObjectId = (await driver.findElement('-tizen aurum', {widgetType: existingClassName})).ELEMENT;
      const result = (await driver.findElement('class name', existingClassName)).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
      assert.strictEqual(result, elmBoxObjectId);
    });

    it('should raise NoSuchElementError when element is not found', function () {
      const result = driver.findElement('-tizen aurum', {textField: 'Non-existent textField value'});
      return assert.isRejected(result, errors.NoSuchElementError);
    });
  });

  describe('using unsupported strategy', function () {
    it('should throw InvalidSelectorError', function () {
      const result = driver.findElement('Not supported strategy', 'value');
      return assert.isRejected(result, errors.InvalidSelectorError);
    });
  });
});

describe('Element properties and attributes', function () {
  // Element IDs differ between different TizenDriver instances
  let buttonId;
  beforeEach('get buttonId', async function () {
    buttonId = (await driver.findElement('-tizen aurum', {textField: 'Button'})).ELEMENT;
  });

  describe('getAttribute', function () {
    // Attributes below are present in org.tizen.elm-demo-tizen-mobile
    // application available at https://github.sec.samsung.net/p-kalota/elm-demo-tizen-mobile/
    // The list below is based on the corresponding test case for Python API:
    // https://github.sec.samsung.net/tizen/aurum/blob/7386c192cdcbea8c831ab7abc0e48a52873f7fed/protocol/examples/python/mobileDemoTestTM1/mobileDemoTest.py#L78

    // Using 'true' and null instead of true/false is required by
    // the W3C and JSONWP specs
    const buttonAttributeValueList = [
      ['VISIBLE', true],
      ['FOCUSABLE', true],
      ['FOCUSED', null],
      ['ENABLED', true],
      ['CLICKABLE', true],
      ['SCROLLABLE', null],
      ['CHECKABLE', null],
      ['CHECKED', null],
      ['SELECTED', null],
      ['SELECTABLE', true],
      ['SHOWING', true],
    ];

    it('should get proper values of "Button"\'s attributes', async function () {
      for (let [attributeName, expectedValue] of buttonAttributeValueList) {
        const foundValue = await driver.getAttribute(attributeName, buttonId);
        assert.strictEqual(expectedValue, foundValue);
      }
    });

    it('should succeed in getting an attribute when its name is not upper-case-only', async function () {
      const [pokemonCaseAttributeName, expectedValue] = ['vIsIbLe', true];
      const foundValue = await driver.getAttribute(pokemonCaseAttributeName, buttonId);
      assert.strictEqual(expectedValue, foundValue);
    });

    it('should raise InvalidArgumentError when given attribute with unsupported name', async function () {
      const unsupportedAttributeName = 'unsupported_attribute_name';
      const result = driver.getAttribute(unsupportedAttributeName, buttonId);
      assert.isRejected(result, errors.InvalidArgumentError);
    });
  });

  describe('Element property getters', function () {
    describe('Getting an Element object', function () {
      /*
      * Getting an Element, which is the first step of all property
      * getters tested further should comply to the W3C WebDriver spec:
      * https://w3c.github.io/webdriver/webdriver-spec.html#dfn-get-a-known-element
      */
      it('should get the proper element object', async function () {
        const element = await driver.getElement(buttonId);
        const elementId = element.getElementid();
        assert.strictEqual(elementId, buttonId);
      });

      it('should raise NoSuchElement when the element does not exist', function () {
        const promise = driver.getElement('non-existent-id');
        assert.isRejected(promise, errors.NoSuchElement);
      });
    });

    describe('getLocation', function () {
      it('should get a valid position of an element', async function () {
        /*
         * It's hard to check in a unit test, if the coordinates are accurate,
         * so we only test if they are valid numbers.
         *
         * Only non-negative coords are valid for "location".
         */
        const location = await driver.getLocation(buttonId);
        assert.isNumber(location.x);
        assert.isFinite(location.x);
        assert.isAtLeast(location.x, 0);
        assert.isNumber(location.y);
        assert.isFinite(location.y);
        assert.isAtLeast(location.y, 0);
      });
    });

    describe('getLocationInView', function () {
      it('should get a valid position of an element', async function () {
        /*
         * It's hard to check in a unit test, if the coordinates are accurate,
         * so we only test if they are valid numbers.
         *
         * Negative coords are valid for "location in view".
         */

        const locationInView = await driver.getLocationInView(buttonId);
        assert.isNumber(locationInView.x);
        assert.isFinite(locationInView.x);
        assert.isNumber(locationInView.y);
        assert.isFinite(locationInView.y);
      });
    });

    describe('getText', function () {
      it('should return proper text', async function () {
        const text = await driver.getText(buttonId);
        assert.isString(text);
        assert.strictEqual(text, 'Button');
      });
    });

    describe('elementEnabled', function () {
      it('should return proper value', async function () {
        const isEnabled = await driver.elementEnabled(buttonId);
        assert.isBoolean(isEnabled);
        // Button is not a form, so it should return false, according to the spec
        assert.isFalse(isEnabled);
      });

      // TODO: when we have a method to go to other menus
      // of elm-demo-tizen-mobile-test application
      // add another test case to test if 'isEnabled'
      // returns a proper value for a form, which should
      // be true, when focused
    });

    describe('elementDisplayed', function () {
      it('should return true for an element that is displayed', async function () {
        // 'Accessibility' is the first element on the list - we assume it should be
        // displayed, but in case you see this test failing, check if
        // that's true for your device
        const accessibilityId = (await driver.findElement('-tizen aurum', {textField: 'Accessibility'})).ELEMENT;
        const isDisplayed = await driver.elementDisplayed(accessibilityId);
        assert.isBoolean(isDisplayed);
        assert.isTrue(isDisplayed);
      });

      it('should return false for an element that is not displayed', async function () {
        // 'VG' is the last element on the list - we assume it should not be
        // displayed, but in case you see this test failing, check if
        // that's true for your device
        const vgId = (await driver.findElement('-tizen aurum', {textField: 'VG'})).ELEMENT;
        const isDisplayed = await driver.elementDisplayed(vgId);
        assert.isBoolean(isDisplayed);
        assert.isTrue(isDisplayed);
      });
    });

    describe('elementSelected', function () {
      it('should return false for an element that is not a checkbox, radio or option', async function () {
        const isSelected = await driver.elementSelected(buttonId);
        assert.isBoolean(isSelected);
        assert.isFalse(isSelected);
      });

      // TODO: when we have a method to go to other menus
      // of elm-demo-tizen-mobile-test application
      // add another test case to test if 'isSelected'
      // returns a proper value for elements for which,
      // which it can be true
    });

    describe('getSize', function () {
      it('should get valid width and height of an element', async function () {
        /*
         * It's hard to check in a unit test, if the width and height are proper,
         * so we only test if they are valid numbers.
         *
         * Negative coords are valid for "location in view".
         */

        const size = await driver.getSize(buttonId);
        assert.isNumber(size.width);
        assert.isAtLeast(size.width, 0);
        assert.isNumber(size.height);
        assert.isAtLeast(size.height, 0);
      });
    });

    describe('getProperty', function () {
      /*
       * This test case is skipped by default, because it takes an
       * unreasonable amount of time to run.
       * Set testTimeout to 600000 in gulpfile.js, if you want to
       * run this test.
       */
      it('should get all properties of an object', async function () {
        const stringProperties = ['elementId', 'widget_type',
          'widget_style', 'text', 'automationId', 'package',
          'role'];

        for (let propertyName of stringProperties) {
          const result = await driver.getProperty(buttonId, propertyName);
          assert.isNotNull(result, `Property: ${propertyName}`);
          assert.isString(result, `Property: ${propertyName}`);
        }
        const boolProperties = ['isChecked', 'isCheckable',
          'isClickable', 'isEnabled', 'isFocused', 'isFocusable',
          'isScrollable', 'isSelected', 'isShowing', 'isActive',
          'isVisible', 'isSelectable'];

        for (let propertyName of boolProperties) {
          const result = await driver.getProperty(buttonId, propertyName);
          assert.isNotNull(result, `Property: ${propertyName}`);
          assert.isBoolean(result, `Property: ${propertyName}`);
        }

        const objectProperties = ['geometry'];
        for (let propertyName of objectProperties) {
          const result = await driver.getProperty(buttonId, propertyName);
          assert.isNotNull(result, `Property: ${propertyName}`);
          assert.isObject(result, `Property: ${propertyName}`);
        }

        const arrayProperties = ['child'];
        for (let propertyName of arrayProperties) {
          const result = await driver.getProperty(buttonId, propertyName);
          assert.isNotNull(result, `Property: ${propertyName}`);
          assert.isArray(result, `Property: ${propertyName}`);
        }
      });

      it('should return a null when asked for a non-existent property', async function () {
        const result = await driver.getProperty(buttonId, 'non-existent-property');
        assert.isNull(result);
      });
    });
  });

  describe('Element property modifiers', function () {
    let singleLineEntryId;
    beforeEach('go to "Singleline Entry" menu and get singleLinentryId', async function () {
      const entryMenuId = (await driver.findElement('-tizen aurum', {textField: 'Entry'})).ELEMENT;
      await driver.click(entryMenuId);
      const singleLineEntryMenuId = (await driver.findElement('-tizen aurum', {textField: 'Singleline Entry'})).ELEMENT;
      await driver.click(singleLineEntryMenuId);
      singleLineEntryId = (await driver.findElement('-tizen aurum', {widgetType: 'Elm_Entry'})).ELEMENT;
    });

    /*
     * We only test "setValue", because setValueImmediate and replaceValue
     * do the same and all three methods share the implementation.
     */
    describe('setValue', function () {
      it('should set the desired text value', async function () {
        const initialText = await driver.getText(singleLineEntryId);
        assert.strictEqual(initialText, '');

        const testTextValue = 'test text value';
        await driver.setValue(testTextValue, singleLineEntryId);

        const finalText = await driver.getText(singleLineEntryId);
        assert.strictEqual(finalText, testTextValue);
      });

      it('should throw NoSuchElementError when called with elementId of a non-existent element', function () {
        const NONEXISTENT_ID = '3999999999';
        const result = driver.setValue('test text value', NONEXISTENT_ID);
        assert.isRejected(result, errors.NoSuchElementError);
      });
    });

    describe('clear', function () {
      it('should leave a text field empty', async function () {
        const initialText = await driver.getText(singleLineEntryId);
        assert.strictEqual(initialText, '');

        await driver.clear(singleLineEntryId);
        const clearingEmptyResult = await driver.getText(singleLineEntryId);
        assert.strictEqual(clearingEmptyResult, '');

        const testTextValue = 'test text value';
        await driver.setValue(testTextValue, singleLineEntryId);

        const clearingTextResult = await driver.getText(singleLineEntryId);
        assert.strictEqual(clearingTextResult, testTextValue);
      });

      it('should throw NoSuchElementError when called with elementId of a non-existent element', function () {
        const NONEXISTENT_ID = '3999999999';
        const result = driver.clear(NONEXISTENT_ID);
        assert.isRejected(result, errors.NoSuchElementError);
      });
    });
  });
});

describe('Touching and clicking', function () {
  // Element IDs differ between different TizenDriver instances
  let buttonId;
  beforeEach('get buttonId', async function () {
    buttonId = (await driver.findElement('-tizen aurum', {textField: 'Button'})).ELEMENT;
  });

  describe('A typical touchDown->touchMove->touchMove->...->touchUp sequence', function () {
    it('should change the positions of elements with reference to the screen, when screen is scrolled down', async function () {
      const initialPosition = await driver.getLocationInView(buttonId);
      const TOUCH_X = 160;
      const TOUCH_DOWN_Y = 640;
      const Y_DISPLACEMENT = 600;
      await driver.touchDown(TOUCH_X, TOUCH_DOWN_Y);
      for (let newY = TOUCH_DOWN_Y; newY >= TOUCH_DOWN_Y - Y_DISPLACEMENT; newY -= 10) {
        await driver.touchMove(TOUCH_X, newY);
      }
      await driver.touchUp(TOUCH_X, 0);
      const finalPosition = await driver.getLocationInView(buttonId);

      assert.strictEqual(initialPosition.x, finalPosition.x);
      /*
       * The difference between the first and last Y position
       * passed to touchMove (i.e. Y_DISPLACEMENT) is always
       * 20 pixels greater than the actual change in element's
       * position.
       * It may be, that there is some finger movement length
       * threshold below which the finger movement does not
       * trigger UI change.
       * This is why, we add this threshold to the expected
       * new position of UI element.
       */
      const Y_UI_MOVEMENT_THRESHOLD = 20;
      assert.strictEqual(initialPosition.y - Y_DISPLACEMENT + Y_UI_MOVEMENT_THRESHOLD, finalPosition.y);
    });

    it('should properly handle touch{Move, Up} commands when x or y is 0', async function () {
      const MID_SCREEN = Math.round(driver.screenResolution.x / 2);
      /*
       * VG is the last element on the list in the main menu.
       * It must not visible in the beginning of the test case.
       */
      const vgId = (await driver.findElement('-tizen aurum', {textField: 'VG'})).ELEMENT;
      const vgInitialPosition = await driver.getLocationInView(vgId);
      assertNotInView(driver.screenResolution, vgInitialPosition);

      /*
       * Very fast touchDown->touchMove->touchUp sequence should scroll
       * the list to the end.
       */
      await driver.touchDown(MID_SCREEN, driver.screenResolution.y - 1);
      /*
       * The most important thing - will these work with (x, y) == (0, 0)?
       */
      await driver.touchMove(0, 0);
      await driver.touchUp(0, 0);

      /*
       * If touch* work with (0, 0), then the sequence should scroll the
       * menu to the bottom and we should be able to see the VG element.
       */
      const vgFinalPosition = await driver.getLocationInView(vgId);
      assertInView(driver.screenResolution, vgFinalPosition);
    });
  });

  function assertInView (screenResolution, elementXY) {
    assert.isAtLeast(elementXY.x, 0);
    assert.isAtLeast(elementXY.y, 0);
    assert.isBelow(elementXY.x, screenResolution.x);
    assert.isBelow(elementXY.y, screenResolution.y);
  }

  function assertNotInView (screenResolution, elementXY) {
    assert.isTrue(elementXY.x < 0 || elementXY.x >= screenResolution.x ||
                  elementXY.y < 0 || elementXY.y >= screenResolution.y);
  }

  describe('scrollElementIntoView', function () {
    it('should do nothing for an element that is visible', async function () {
      const initialPosition = await driver.getLocationInView(buttonId);
      await driver.scrollElementIntoView(buttonId);
      const finalPosition = await driver.getLocationInView(buttonId);

      assert.strictEqual(initialPosition.x, finalPosition.x);
      assert.strictEqual(initialPosition.y, finalPosition.y);
    });

    it('should move an element from the bottom to the visible part of the app window', async function () {
      const spinnerId = (await driver.findElement('-tizen aurum', { textField: 'Spinner' })).ELEMENT;
      const initialPosition = await driver.getLocationInView(spinnerId);
      assertNotInView(driver.screenResolution, initialPosition);
      await driver.scrollElementIntoView(spinnerId);
      const finalPosition = await driver.getLocationInView(spinnerId);
      assertInView(driver.screenResolution, finalPosition);
    });

    it('should move an element from the top to the visible part of the app window', async function () {
      /*
       * 2 flicks to move "Button" out of view
       */
      const flickX = Math.round(driver.screenResolution.x / 2);
      await driver.doFlick([flickX, driver.screenResolution.y - 1],
                           [flickX, 1], 2000);
      await driver.doFlick([flickX, driver.screenResolution.y - 1],
                           [flickX, 1], 2000);
      const initialPosition = await driver.getLocationInView(buttonId);
      assertNotInView(driver.screenResolution, initialPosition);

      await driver.scrollElementIntoView(buttonId);
      const finalPosition = await driver.getLocationInView(buttonId);
      assertInView(driver.screenResolution, finalPosition);
    });
  });

  describe('click', function () {
    it('should change the menu when a navigational element is clicked', async function () {
      const phoneInMainMenu = driver.findElement('-tizen aurum', {textField: 'Phone'});
      assert.isRejected(phoneInMainMenu, errors.NoSuchElementError);

      await driver.click(buttonId);
      const phoneInButtonMenuPromise = driver.findElement('-tizen aurum', {textField: 'Phone'});
      assert.isFulfilled(phoneInButtonMenuPromise);

      const phoneInButtonMenu = (await phoneInButtonMenuPromise).ELEMENT;
      assert.isNotNull(phoneInButtonMenu);
      assert.isString(phoneInButtonMenu);
    });

    it('should scroll element into view when it is not in current view', async function () {
      const spinnerId = (await driver.findElement('-tizen aurum', { textField: 'Spinner' })).ELEMENT;
      const initialPosition = await driver.getLocationInView(spinnerId);
      assertNotInView(driver.screenResolution, initialPosition);
      await driver.click(spinnerId);

      const januarySearchResultPromise = driver.findElement('-tizen aurum', {textField: 'January'});
      assert.isFulfilled(januarySearchResultPromise);

      const januarySearchResult = (await januarySearchResultPromise).ELEMENT;
      assert.isNotNull(januarySearchResult);
      assert.isString(januarySearchResult);
    });

    it('should throw a NoSuchElement error when non-existent elementId is passed', function () {
      const NONEXISTENT_ID = '3999999999';
      const result = driver.click(NONEXISTENT_ID);
      assert.isRejected(result, errors.NoSuchElementError);
    });
  });

  describe('touchLongClick', function () {
    /*
     * Checking if a long click triggers this tooltip menu is an easy
     * way to check if the click is "long".
     */
    it('should trigger a tooltip menu when a text entry is touched', async function () {
      const entryId = (await driver.findElement('-tizen aurum', { textField: 'Entry' })).ELEMENT;
      await driver.click(entryId);

      const singleLineEntryId = (await driver.findElement('-tizen aurum', { textField: 'Singleline Entry' })).ELEMENT;
      await driver.click(singleLineEntryId);

      const pasteTooltipButtonBeforeLongClick = driver.findElement('-tizen aurum', { textField: 'Select'});
      assert.isRejected(pasteTooltipButtonBeforeLongClick, errors.NoSuchElementError);

      const entryFieldId = (await driver.findElement('-tizen aurum', { widgetType: 'Elm_Entry' })).ELEMENT;
      /*
       * The tooltip only appears after a long touch of the field
       * if either:
       * a) there is some input in that field
       * b) there is something in the clipboard.
       * Thus we input the test string.
       */
      await driver.setValue('test string', entryFieldId);
      await driver.touchLongClick(entryFieldId);

      const pasteTooltipButtonAfterLongClickPromise = driver.findElement('-tizen aurum', { textField: 'Select'});
      assert.isFulfilled(pasteTooltipButtonAfterLongClickPromise);

      const pasteTooltipButtonAfterLongClick = (await pasteTooltipButtonAfterLongClickPromise).ELEMENT;
      assert.isNotNull(pasteTooltipButtonAfterLongClick);
      assert.isString(pasteTooltipButtonAfterLongClick);
    });

    it('should scroll element into view when it is not in current view', async function () {
      const spinnerId = (await driver.findElement('-tizen aurum', { textField: 'Spinner' })).ELEMENT;
      const initialPosition = await driver.getLocationInView(spinnerId);
      assertNotInView(driver.screenResolution, initialPosition);
      await driver.touchLongClick(spinnerId);

      const finalPosition = await driver.getLocationInView(spinnerId);
      assertInView(driver.screenResolution, finalPosition);
    });

    it('should throw a NoSuchElement error when non-existent elementId is passed', function () {
      const NONEXISTENT_ID = '3999999999';
      const result = driver.touchLongClick(NONEXISTENT_ID);
      assert.isRejected(result, errors.NoSuchElementError);
    });
  });

  describe('flick', function () {
    it('should change positions of elements on the screen', async function () {
      const initialPosition = await driver.getLocationInView(buttonId);
      await driver.flick(buttonId, undefined, undefined, 0, -300, 20);
      const finalPosition = await driver.getLocationInView(buttonId);

      assert.isTrue(initialPosition.x !== finalPosition.x || initialPosition.y !== finalPosition.y);
    });

    it('should raise InvalidCoordinatesError, when start or stop point are outside of the screen', async function () {
      const spinnerId = (await driver.findElement('-tizen aurum', {textField: 'Spinner'})).ELEMENT;
      const startOutsidePromise = driver.flick(spinnerId, undefined, undefined, 2000, 100, 20);
      assert.isRejected(startOutsidePromise, errors.InvalidCoordinatesError);

      const stopOutsidePromise = driver.flick(buttonId, undefined, undefined, -900, 100, 20);
      assert.isRejected(stopOutsidePromise, errors.InvalidCoordinatesError);
    });

    it('should raise NoSuchElementError when a non-existent or invalid elementId is passed', function () {
      const nonExistentElementIdPromise = driver.flick('3999999999', undefined, undefined, 20, 100, 20);
      assert.isRejected(nonExistentElementIdPromise, errors.NoSuchElementError);

      const invalidElementIdPromise = driver.flick('invalid elementId', undefined, undefined, 20, 100, 20);
      assert.isRejected(invalidElementIdPromise, errors.NoSuchElementError);
    });

    it('should raise InvalidArgumentError when invalid "speed" is passed', function () {
      const unfulfilledPromises = [];
      unfulfilledPromises.push(driver.flick(buttonId, undefined, undefined, 20, 10));
      unfulfilledPromises.push(driver.flick(buttonId, undefined, undefined, 20, 10, -123));
      unfulfilledPromises.push(driver.flick(buttonId, undefined, undefined, 20, 10, 'not a number'));
      unfulfilledPromises.push(driver.flick(buttonId, undefined, undefined, 20, 10, NaN));
      unfulfilledPromises.push(driver.flick(buttonId, undefined, undefined, 20, 10, 0));

      for (let promise of unfulfilledPromises) {
        assert.isRejected(promise, errors.InvalidArgumentError);
      }
    });

    it('should raise InvalidArgumentError when (speedX, speedY) and (offsetX, offsetY) vectors are misaligned and the "speed" argument is not provided', function () {
      const misalignedVectorsPromise = driver.flick(buttonId, -199, 112333, 20, 10);
      assert.isRejected(misalignedVectorsPromise, errors.InvalidArgumentError);
    });
  });

  describe('touchPerform', function () {
    it('should perform a series of tasks', async function () {
      const touchTasks = [
        {
          action: 'press',
          options: {
            x: Math.round(driver.screenResolution.x / 2),
            y: driver.screenResolution.y - 1
          }
        },
        {
          action: 'moveTo',
          options: {
            x: Math.round(driver.screenResolution.x / 2),
            y: 1
          }
        },
        {
          action: 'release',
          options: {
            x: Math.round(driver.screenResolution.x / 2),
            y: 1
          }
        },
        {
          action: 'tap',
          options: {
            element: buttonId
          }
        },
        {
          action: 'wait',
          options: {
            ms: 15_000
          }
        },
      ];
      await driver.performTouch(touchTasks);

      // Check, if we're in the desired menu
      const phoneButtonIdPromise = driver.findElement('-tizen aurum', {textField: 'Phone'});
      return assert.isFulfilled(phoneButtonIdPromise);
    });

    it('should scroll the screen down when (x, y) coordinates for "release" are not provided', async function () {
      /*
       * VG is the last element on the list in the main menu. It should
       * be outside of the view in the beginning of the test.
       */
      const vgId = (await driver.findElement('-tizen aurum', {textField: 'VG'})).ELEMENT;
      const vgInitialPosition = await driver.getLocationInView(vgId);
      assertNotInView(driver.screenResolution, vgInitialPosition);

      const touchTasks = [
        {
          action: 'press',
          options: {
            x: Math.round(driver.screenResolution.x / 2),
            y: driver.screenResolution.y - 1
          }
        },
        {
          action: 'moveTo',
          options: {
            x: Math.round(driver.screenResolution.x / 2),
            y: 1
          }
        },
        {
          action: 'release',
          options: {}
        }
      ];
      await driver.performTouch(touchTasks);

      /*
       * If the scroll is performed successfully, we should be able
       * to see the VG element.
       */
      const vgFinalPosition = await driver.getLocationInView(vgId);
      assertInView(driver.screenResolution, vgFinalPosition);
    });
  });

  describe('back', function () {
    it('should go back to the previous menu when "back" is issued', async function () {
      await driver.click(buttonId);

      // Assert, that we're in the "button menu"
      const calendarPromiseInButtonMenu = driver.findElement('-tizen aurum', {textField: 'Calendar'});
      assert.isRejected(calendarPromiseInButtonMenu, errors.NoSuchElementError);

      await driver.back();
      const calendarPromiseInMainMenu = driver.findElement('-tizen aurum', {textField: 'Calendar'});
      assert.isFulfilled(calendarPromiseInMainMenu);
    });
  });
});