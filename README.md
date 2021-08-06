# Appium Tizen Driver

Appium Tizen Driver is a test automation tool for Tizen devices. Appium Tizen Driver automates application tests on emulators and real devices. Appium Tizen Driver is a part of the [Appium](https://github.com/appium/appium) mobile test automation tool.

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
- `click`
- `touchUp`
- `touchDown`
- `touchMove`
- `touchLongClick`
- `getLocation`
- `getLocationInView`
- `getText`
- `elementEnabled`
- `elementDisplayed`
- `getSize`
- `setValue`
- `setValueImmediate`
- `clear`
- `replaceValue`
- `flick`
- `pullFile`
- `pushFile`
- `takeScreenShot`
- `getScreenshotData`
- `getScreenshot`
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
- `performTouch`

# Development

## npm

Use npm to install all dependencies. From the directory containing `package.json` run:

```bash
npm install
```

## Tasks

You will find the tasks dashboard here: [appium-aurum-driver](https://github.sec.samsung.net/p-wasowski2/appium-aurum-driver/projects/1?fullscreen=true)
## gulp

This project uses https://gulpjs.com/ for automation of builds, tests and linter.

You can install `gulp` by issuing:
```bash
npm install -g gulp
```


The gulp config used for this project can be found here: https://github.com/appium/appium-gulp-plugins/blob/master/lib/boilerplate.js and in https://github.com/appium/appium-gulp-plugins/tree/master/lib/tasks.

### gulp test

Call `gulp unit-test` to run unit tests from `test/` directory.

The tests are implemented with https://mochajs.org/ framework and use asserts from https://www.chaijs.com.

You may want to run only selected tests. To do this, add `.only` to chosen `describe`s or `it`s, e.g.:

```js
describe.only('some test suite, we want to run', function () {
  //...
});


// Within some test suite
  it.only('should should be executed', function () {
    //...
  });
```

You can also disable tests by adding `.skip` to `describe`s, `it`s, e.g.:
```js
  it.skip('won't be run this time', function () {
    //...
  });
```

### gulp eslint

To run auto-linter issue:

```bash
gulp eslint
```

If you want `eslint` to automatically fix problems, run:

```
gulp eslint --fix
```

## Aurum

This implementation of Appium driver uses [aurum](https://github.sec.samsung.net/tizen/aurum) as its backend. You can find Python tutorial for Aurum [here](https://code.sec.samsung.net/confluence/pages/viewpage.action?spaceKey=ENUIFWC&title=Tutorial+%28for+Python%29+-+Part+1).

Aurum project delivers:
- aurum system library for Tizen devices
- `org.tizen.aurum-bootstrap` Tizen application. It implements a server that receives gRPC commands from PC and manipulates the application in response to these requests.

Programs running on PC (test scripts) communicate with the bootstrap app over TCP port 50051, usually forwarded by SDB.
PC programs call remote procedures in bootstrap app using gRPC protocol. All messages sent between PC and devices under test are serialized in Protocol Buffers format.

The communication protocol is defined in `lib/commands/aurum.proto` file in this repo. This file is a mirror of [aurum.proto](https://github.sec.samsung.net/tizen/aurum/blob/tizen/protocol/aurum.proto) file in aurum repository.

The JS code for communication with bootstrap application (`aurum_pb.js` and `aurum_grpc_pb.js`) is generated from `lib/commands/aurum.proto` using `lib/commands/gen.sh` script.
See these docs to learn how to use auto-generated JS code:
[protobuf](https://developers.google.com/protocol-buffers/docs/reference/javascript-generated), [grpc](https://grpc.github.io/grpc/node/).

### Aurum updates

Aurum is still in development and its creators make changes to `aurum.proto`, sometimes breaking ABI. (**Protip: add aurum repo on github to watched repositories get emails about such changes**)
When `aurum.proto` in aurum repo changes, update the `lib/commands/aurum.proto` in this repo to reflect the changes and run `lib/commands/gen.sh` to regenerate `aurum_pb.js` and `aurum_grpc_pb.js` files. Then commit the changes and make a PR with update.

**Always ensure that the protocol version used by bootstrap app is the same as the one used by test scripts.**
(If in doubt, build the latest aurum with gbs and install on the target device.)


## Running under Appium

This repo does not implement a standalone server but a module loaded by [appium](https://github.sec.samsung.net/p-wasowski2/appium) server.
See the readme at that repo to see how to run an appium server for Tizen devices.