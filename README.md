# Appium Tizen Driver

Appium Tizen Driver is a test automation tool for Tizen devices. Appium Tizen Driver automates application tests on emulators and real devices. Appium Tizen Driver is a part of the [Appium](https://github.com/appium/appium) mobile test automation tool.

## Getting started with Appium on Tizen devices

In this short guide we will show how to write automation for end-to-end tests of Tizen applications.
We will write the automation code in JS, using [webdriver.io](https://webdriver.io/) to control Aurum server and Tizen device.

You can find the entire source code used in tutorial and `package.json` with dependencies in the [example](example/) directory.
You will also find the application we used for tests there - `org.example.appium-test-application` for x86 and armv7l architectures (application source: https://github.sec.samsung.net/p-wasowski2/appium-test-application).

### Set up Appium server

First, you need to set up Appium server. Follow [this](https://github.com/Samsung/Tizen.Appium/wiki/How-to-use-appium) manual to do this.

To use `-tizen aurum` strategy in `findElement` you will need to apply the [add_aurum_support.patch](./add_aurum_support.patch) from this repo.
It adds the strategy and a new automation engine (`aurum`) to the Appium server.

To apply the patch:

1. Copy it to the `appium` repository on your PC
2. In `appium` repository, issue the following command:

```bash
git am add_aurum_support.patch
```

Now, your Appium will be ready

### Install webdriver.io

Now, install the webdriver.io NPM package:

```bash
npm install webdriverio
```

You are now ready to write the tests.

---
**Note**

In this tutorial we show how to automate interaction with an application. Use your favorite test framework (e.g. [mocha](https://mochajs.org/) to add testing logic).

---

### Write automation code

---
**Note**

In this tutorial we will show basic methods of interaction with an application. We don't cover all the supported commands - you will find their list [here](#commands). See the [Appium](https://appium.io/) and [webdriver.io](https://webdriver.io/docs/api) docs for detailed information about all supported commands.
---

#### Initialization

Import the `webdriverio` module:

```js
const { remote } = require('webdriverio');
```

Now, start a webdriverio session by creating a `browser` object.
It will be used to interact with the device:

```js
const browser = await remote({
    capabilities: {
        platformName: 'tizen',
        deviceName: 'TM1', // you will find this in "sdb devices" output
        appPackage: 'org.example.appium-test-application', // full package name of the tested app
        automationName: 'Aurum', // name of the automation engine to be used
        newCommandTimeout: 600
    },
    appPackage: 'org.example.appium-test-application', // full package name of the tested app
    path: '/wd/hub/',
    port: 4723 // port on which Appium server listens to requests
})
```
#### Finding elements

To interact with a specific application UI element, get it with `findElement()` method:

```js
const dummyButton = await browser.findElement('-tizen aurum', JSON.stringify({textField: "Dummy button [6/10]"}))
```

You can use one of the standard element search strategies [supported by Appium](https://appium.io/docs/en/commands/element/find-elements/) or a much more powerful `-tizen aurum` strategy available only for Tizen devices and applications.
With `-tizen aurum` strategy you can specify one or more selectors from the list below:
- `elementId` - EFL's element ID
- `automationId` - EFL's automation ID
- `textField` - the text displayed on an element
- `widgetType` - the widget type, e.g. `Elm_Entry`
- `widgetStyle` - the widget style
- `isChecked`, `isCheckable`, `isClickable`, `isEnabled`, `isFocused`, `isFocusable`, `isScrollable`, `isSelected`, `isShowing`, `isActive` - binary (`true`/`false`) EFL attributes of the elements
- `minDepth`, `maxDepth` - the depth of an element in the tree
- `children` - nested selectors

When you specify more than one selector, e.g.: `{textField: "Password", widgetType: "Elm_Entry", isFocusable: true}`, Appium will search for elements that fulfill **all** requirements - in the case of this example.

#### Interaction with elements

The `touchFlick()` method can be used to simulate swipes on a touchscreen. It may be useful to quickly move around an application:

```js
const dummyButton = await browser.findElement('-tizen aurum', JSON.stringify({textField: "Dummy button [6/10]"}))
await browser.touchFlick(0,// x-offset - how much to move in the x-direction
                         -800, // y-offset - how much to move in the y-direction
                         dummyButton.ELEMENT, // the element used as the start point for the swiping finger
                         40) // the speed in pixels per second
```
To run complex touch sequences use `touchPerform`. It takes an array of actions to be performed as its argument:

```js
await browser.touchPerform([
    {
        action: 'press',
        options: {
            x: 360,
            y: 1000
        }
    },
    {
        action: 'moveTo',
        options: {
            x: 360,
            y: 1
        }
    },
    {
        action: 'release',
        options: {
            x: 360,
            y: 1
        }
    }
]);
```

When specifying such action sequences remember, that touches **must** start with a `press` action and finish with `release` actions. If they don't, Appium won't be able to perform movement sequence.
Add as many `moveTo` actions as you need.

To get the text displayed on an element, use webdriverio `getElementText` method:

```js
const entryJson = await browser.findElement('-tizen aurum', JSON.stringify({textField: "Entry"}))
const entryId = entryJson.ELEMENT;

const entryText = await browser.getElementText(entryId);
console.log(`Entry button text: ${entryText}`);
```

See the documentation of other `get*` Appium methods to learn how to  get other properties.

Use the `click` method to easily click elements:

```js
const singlelineEntryJson = await browser.findElement('-tizen aurum', JSON.stringify({textField: "Singleline Entry"}))
const singlelineEntry = browser.$(singlelineEntryJson);
await singlelineEntry.click();
```

Finally, if you want to set a value of an element, use the `setValue` method:

```js
const entryField = browser.$(await browser.findElement('-tizen aurum', JSON.stringify({widgetType: "Elm_Entry"})));
await entryField.setValue('test text string');
```

#### Terminating a session

Remember to terminate an Appium session after tests. Use `deleteSession` method to do this:

```js
await browser.deleteSession()
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

To run unit tests you need `org.tizen.elm-demo-tizen-mobile` application installed on the device under test. The app: [armv7l device](https://github.sec.samsung.net/p-wasowski2/appium-aurum-driver/blob/master/test/org.tizen.elm-demo-tizen-mobile-0.2-1.armv7l.rpm), [x86 emulator](https://github.sec.samsung.net/p-wasowski2/appium-aurum-driver/blob/master/test/org.tizen.elm-demo-tizen-mobile-0.2-1.i686.rpm).

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
