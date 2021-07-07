import { errors } from 'appium-base-driver/build/lib/protocol';
import { assert } from 'chai';
const utils = require('./utils');

const TizenDriver = require('../lib/driver').TizenDriver;

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
      console.log(result);
      assert(typeof result === 'boolean');
      assert(result === false);
    });

    it('should return "true" when app is running', async function () {
      await driver.startApp();
      let result = await driver.isStartedApp();
      assert(typeof result === 'boolean');
      assert(result === true);
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
      assert(result !== null);
      assert(typeof result === 'string');
      assert(utils.hasOnlyDigits(result));
      return;
    });

    it ('should find an array of non-zero elements when no constraint is set', async function () {
      let result = await driver.findElement('-tizen aurum', {/* No constraints */});
      assert(result !== null);
      assert(typeof result === 'string');
      assert(utils.hasOnlyDigits(result));
      return;
    });

    it ('should find an element with a simple single-condition strategy', async function () {
      let result = await driver.findElement('-tizen aurum', {isClickable: true});
      assert(result !== null);
      assert(typeof result === 'string');
      assert(utils.hasOnlyDigits(result));
      return;
    });
  });

  describe('using standard JSON Wire Protocol strategies', function () {

    it('should support "id" strategy', async function () {
      const existingId = await driver.findElement('-tizen aurum', {});
      const result = await driver.findElement('id', existingId);
      assert(result !== null);
      assert(typeof result === 'string');
      assert(utils.hasOnlyDigits(result));
      assert(existingId === result);
      return;
    });

    it('should support "automationId" strategy', async function () {
      const result = await driver.findElement('automationId', 'TODO');
      assert(result !== null);
      assert(typeof result === 'string');
      assert(utils.hasOnlyDigits(result));
      return;
    });

    it('should support "accessibility id" strategy', async function () {
      // TODO: finish
      const existingId = await driver.findElement('-tizen aurum', {});
      const result = await driver.findElement('accessibility id', 'TODO');
      assert(result !== null);
      assert(typeof result === 'string');
      assert(utils.hasOnlyDigits(result));
      return;
    });

    it('should support "name" strategy', async function () {
      const result = await driver.findElement('name', 'Button');
      assert(result !== null);
      assert(typeof result === 'string');
      assert(utils.hasOnlyDigits(result));
      return;
    });

    it('should support "class name" strategy', async function () {
      const result = await driver.findElement('class name', 'TODO');
      assert(result !== null);
      assert(typeof result === 'string');
      assert(utils.hasOnlyDigits(result));
      return;
    });

    it('should throw NoSuchElementError when element is not found', async function () {
      await driver.findElement('-tizen aurum', {
        elementId: 'Non-existent elementId'
      });
      return;
    });
  });

  describe('using unsupported strategy', function () {

    it('should throw InvalidSelectorError', async function () {
      assert.rejects(
                async function () {
                  return await driver.findElement('Not supported strategy', 'value');
                },
                {
                  name: 'InvalidSelectorError'
                });
      return;
    });
  });
});

describe('getAttribute', async function () {
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

  // Element IDs differ between different TizenDriver instances
  let buttonId;
  beforeEach('get buttonId', async function () {
    buttonId = await driver.findElement('-tizen aurum', {textField: 'Button'});
  });

  it('should get proper values of "Button"\'s attributes', async function () {
    for (let [attributeName, expectedValue] of buttonAttributeValueList) {
      const foundValue = await driver.getAttribute(attributeName, buttonId);
      if (foundValue === null) {
        assert.isNull(foundValue);
      } else {
        assert.typeOf(foundValue, typeof expectedValue);
      }
      assert.strictEqual(expectedValue, foundValue);
    }
  });

  it('should succeed in getting an attribute when its name is not upper-case-only', async function () {
    const [pokemonCaseAttributeName, expectedValue] = ['vIsIbLe', true];
    const foundValue = await driver.getAttribute(pokemonCaseAttributeName, buttonId);
    if (foundValue === null) {
      assert.isNull(foundValue);
    } else {
      assert.typeOf(foundValue, typeof expectedValue);
    }
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