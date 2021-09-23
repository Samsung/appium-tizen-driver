'use strict';

const gulp = require('gulp');
const boilerplate = require('appium-gulp-plugins').boilerplate;
const fs = require('fs');

/*
 * aurum.proto is not a JS file, so gulp with "boilerplate" config
 * does not copy it to the build directory by default.
 * Thus we copy it manually here.
 */
(function copyAurumProtoTask () {
  const buildDir = boilerplate.DEFAULTS.transpile ? boilerplate.DEFAULTS.transpileOut : '.';
  const aurumProtoDestDir = `${__dirname}/${buildDir}/lib/commands`;
  fs.mkdirSync(aurumProtoDestDir, {recursive: true});
  fs.copyFileSync(__dirname + '/lib/commands/aurum.proto', `${aurumProtoDestDir}/aurum.proto`);
})();

boilerplate.use(gulp)({
  build: 'appium-tizen-driver',
  testTimeout: 3000000,
  test: {files: ['${testDir}/**/*.js']},
  testReporter: 'spec'
});
