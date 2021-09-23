/*
 * Copyright (c) 2021 Samsung Electronics Co., Ltd All Rights Reserved
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

const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        capabilities: {
            platformName: 'tizen',
            deviceName: 'TM1',
            appPackage: 'org.example.appium-test-application',
            automationName: 'Aurum',
            newCommandTimeout: 600 // Aurum needs some optimization (https://github.sec.samsung.net/tizen/aurum/issues/3) and thus sometimes we have to wait for a while
        },
        appPackage: 'org.example.appium-test-application',
        path: '/wd/hub/',
        port: 4723
    })

    const dummyButton = await browser.findElement('-tizen aurum', JSON.stringify({textField: "Dummy button [4/10]"}))
    // Flick doesn't work on TV: https://github.sec.samsung.net/tizen/aurum/issues/29
    // so we commented it out for now
    // await browser.touchFlick(0, -100, dummyButton.ELEMENT, 40)

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
    const entryJson = await browser.findElement('-tizen aurum', JSON.stringify({textField: "Entry"}))
    const entryId = entryJson.ELEMENT;

    const entryText = await browser.getElementText(entryId);
    console.log(`Entry button text: ${entryText}`);
    await browser.elementClick(entryId);
    const singlelineEntryJson = await browser.findElement('-tizen aurum', JSON.stringify({textField: "Singleline Entry"}))
    const singlelineEntry = browser.$(singlelineEntryJson);
    await singlelineEntry.click();

    const entryField = browser.$(await browser.findElement('-tizen aurum', JSON.stringify({widgetType: "Elm_Entry"})));
    await entryField.setValue('test text string');
    await browser.touchPerform([{

        action: 'wait',
        options: {
            ms: 10_000
        }
    }]);
    await browser.deleteSession()
})()