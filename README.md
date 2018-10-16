# Appium Tizen Driver

[![NPM version](http://img.shields.io/npm/v/appium-tizen-driver.svg)](https://npmjs.org/package/appium-tizen-driver)
[![Downloads](http://img.shields.io/npm/dm/appium-tizen-driver.svg)](https://npmjs.org/package/appium-tizen-driver)
[![Dependency Status](https://david-dm.org/Samsung/appium-tizen-driver.svg)](https://david-dm.org/Samsung/appium-tizen-driver)
[![devDependency Status](https://david-dm.org/Samsung/appium-tizen-driver/dev-status.svg)](https://david-dm.org/Samsung/appium-tizen-driver#info=devDependencies)

[![Build Status](https://api.travis-ci.org/Samsung/appium-tizen-driver.png?branch=master)](https://travis-ci.org/Samsung/appium-tizen-driver)

Appium Tizen Driver is a test automation tool for Tizen devices. Appium Tizen Driver automates .NET applications, tested on emulators and real devices. Appium Tizen Driver is part of the [Appium](https://github.com/appium/appium) mobile test automation tool.

## Usage
Import Tizen Driver, set and create a session:

```
import { TizenDriver } from `appium-tizen-driver`

let defaultCaps = {
  appPackage: 'tizen.sample',
  deviceName: 'Tizen',
  platformName: 'Tizen'
};

let driver = new TizenDriver();
await driver.createSession(defaultCaps);
```

## Commands
- `getAttribute`
- `setAttribute`
- `click`
- `touchUp`
- `touchDown`
- `touchMove`
- `touchLongClick`
- `tap`
- `getLocation`
- `getLocationValueByElementId`
- `getText`
- `elementEnabled`
- `elementDisplayed`
- `getSize`
- `setValue`
- `setValueImmediate`
- `clear`
- `replaceValue`
- `flick`
- `fakeFlick`
- `fakeFlickElement`
- `swipe`
- `doSwipe`
- `pullFile`
- `takeScreenShot`
- `getScreenshotData`
- `getScreenshot`
- `execute`
- `doFindElementOrEls`
- `findElOrEls`
- `getAutomationId`
- `getDeviceTime`
- `inputText`
- `pressHardwareKey`
- `back`
- `installApp`
- `removeApp`
- `isAppInstalled`
- `launchApp`
- `startApp`
- `closeApp`
- `isStartedApp`
- `doTouchAction`
- `performGesture`
- `performTouch`
