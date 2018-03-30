"use strict";

let gulp = require('gulp'),
    boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);

boilerplate({
  build: 'appium-tizen-driver',
  jscs: false,
  e2eTest: {android: true},
  testTimeout: 40000
});
