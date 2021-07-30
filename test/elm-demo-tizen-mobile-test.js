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

describe.only('findElement', function () {
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
      assert.isTrue(utils.hasOnlyDigits(result));
    });

    it ('should find an array of non-zero elements when no constraint is set', async function () {
      let result = (await driver.findElement('-tizen aurum', {/* No constraints */})).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result));
    });

    it ('should find an element with a simple single-condition strategy', async function () {
      let result = (await driver.findElement('-tizen aurum', {isClickable: true})).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result));
    });
  });

  describe('using standard JSON Wire Protocol strategies', function () {
    /*
     * There's no test for "automationId" strategy, because
     * no element from elm-demo-tizen-mobile app has "automationId"
     * value set.
     */
    it.skip('should support "accessibility id" strategy', async function () {
      /*
       * As long, as findElement is broken (see
       * https://github.sec.samsung.net/tizen/aurum/issues/10)
       * this test case fails.
       */
      const existingAccessibilityId = buttonObject.elementid;
      const result = (await driver.findElement('accessibility id', existingAccessibilityId)).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result), 'elementId should consist of digits only');
      assert.strictEqual(result, buttonObject.elementid);
    });

    it('should support "name" strategy', async function () {
      const existingName = buttonObject.text;
      const result = (await driver.findElement('name', existingName)).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result), 'elementId should consist of digits only');
      assert.strictEqual(result, buttonObject.elementid);
    });

    it('should support "class name" strategy', async function () {
      const existingClassName = 'Elm_Box';
      const elmBoxObjectId = (await driver.findElement('-tizen aurum', {widgetType: existingClassName})).ELEMENT;
      const result = (await driver.findElement('class name', existingClassName)).ELEMENT;
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result), 'elementId should consist of digits only');
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
      it.skip('should get all properties of an object', async function () {
        const stringProperties = ['elementId', 'widget_type',
          'widget_style', 'text', 'id', 'automationId', 'package',
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
});
