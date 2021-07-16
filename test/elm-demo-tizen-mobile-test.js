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
  describe('using "-tizen aurum" strategy', function () {
    it('should support nested selectors', async function () {
      let result = await driver.findElement('-tizen aurum', {
        children: [{
          isClickable: true
        }, {
          isShowing: true
        }]
      });
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result));
    });

    it ('should find an array of non-zero elements when no constraint is set', async function () {
      let result = await driver.findElement('-tizen aurum', {/* No constraints */});
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result));
    });

    it ('should find an element with a simple single-condition strategy', async function () {
      let result = await driver.findElement('-tizen aurum', {isClickable: true});
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result));
    });
  });

  describe('using standard JSON Wire Protocol strategies', function () {

    it('should support "id" strategy', async function () {
      const existingId = await driver.findElement('-tizen aurum', {});
      const result = await driver.findElement('id', existingId);
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result), 'elementId should consist of digits only');
      assert.strictEqual(existingId, result);
    });

    it('should support "automationId" strategy', async function () {
      const existingAutomationId = 'TODO';
      const result = await driver.findElement('automationId', existingAutomationId);
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result), 'elementId should consist of digits only');
      assert.strictEqual(existingAutomationId, result);
    });

    it('should support "accessibility id" strategy', async function () {
      const existingAccessibilityId = 'TODO';
      const result = await driver.findElement('accessibility id', existingAccessibilityId);
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result), 'elementId should consist of digits only');
      assert.strictEqual(existingAccessibilityId, result);
    });

    it('should support "name" strategy', async function () {
      const existingName = 'TODO';
      const result = await driver.findElement('name', 'Button');
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result), 'elementId should consist of digits only');
      assert.strictEqual(existingName, result);
    });

    it('should support "class name" strategy', async function () {
      const existingClassName = 'TODO';
      const result = await driver.findElement('class name', existingClassName);
      assert.isNotNull(result);
      assert.isString(result);
      assert.isTrue(utils.hasOnlyDigits(result), 'elementId should consist of digits only');
      assert.strictEqual(existingClassName, result);
    });

    it('should throw NoSuchElementError when element is not found', function () {
      const result = driver.findElement('-tizen aurum', {elementId: 'Non-existent elementId'});
      assert.isRejected(result, errors.NoSuchElementError);
    });
  });

  describe('using unsupported strategy', function () {
    it('should throw InvalidSelectorError', function () {
      const result = driver.findElement('Not supported strategy', 'value');
      assert.isRejected(result, errors.InvalidSelectorError);
    });
  });
});

describe('Element properties and attributes', function () {
  // Element IDs differ between different TizenDriver instances
  let buttonId;
  beforeEach('get buttonId', async function () {
    buttonId = await driver.findElement('-tizen aurum', {textField: 'Button'});
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
      try {
        await driver.getAttribute(unsupportedAttributeName, buttonId);
      } catch (error) {
        assert.instanceOf(error, errors.InvalidArgumentError);
      }
    });
  });
});
