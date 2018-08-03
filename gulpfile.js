"use strict";

let gulp = require('gulp'),
    boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp),
    exec = require('child_process').exec,
    argv = require('yargs').argv,
    Promise = require('es6-promise').Promise,
    util = require('gulp-util');

const { spawn } = require('child_process');

boilerplate({
  build: 'appium-tizen-driver',
  jscs: false,
  testTimeout: 40000
});

function runCommand (command) {
  return new Promise(function (resolve, reject) {
    let run = exec(command, function (error, stdout, stderr) {
      if (error) {
        reject(error);
      } else {
        resolve({stdout, stderr});
      }
    });
    run.stdout.pipe(process.stdout);
  });
}

function cleanup () {
  let files=['-rf',
    'CMakeFiles',
    'CMakeCache.txt',
    'cmake_install.cmake',
    'debugfiles.list',
    'debuglinks.list',
    'debugsources.list',
    'documentation.list',
    'install_manifest.txt',
    'Makefile',
    'uiautomator-debuginfo.manifest',
    'uiautomator-debugsource.manifest'];

  return new Promise(function (resolve, reject) {
    let rm = spawn('rm', files);

    rm.on('error', (err) => {
      reject(err);
    });

    rm.on('close', () => {
      resolve();
    });
  });
}

async function gbsBuild (arch) {
  let clean = argv.clean ? argv.clean : '';
  let rename = `uiautomator_${arch}`;
  let check_gbs = `command -v gbs`;
  let build_gbs = `gbs -v build --packaging-dir ui-automator/packaging/ -A ${arch} --include-all --incremental ${clean}`;
  let move_file = `mkdir -p build | mv uiautomator build/${rename}`;

  try {
    await runCommand(check_gbs);
    await runCommand(build_gbs);
    await runCommand(move_file);
    await cleanup();
  } catch (err) {
    util.log(`Warning: uiautomator(${arch}) creation is failed, prebuilt uiautomator will be used`);
    util.log(err);
  }
}

async function cpUiautomator () {
  let cp_file = `cp ui-automator/build/uiautomator_* ./build`;
  await runCommand(cp_file);
}

gulp.task('copyUiautomator', ['transpile'],  async function () {
  let gbs = argv.gbs;
  let arch = argv.arch ? argv.arch : 'all';

  if (gbs) {
    util.log(`Starting GBS Build, Arch=${arch}`);
    if (arch === 'all') {
      await gbsBuild('armv7l');
      await gbsBuild('i586');
    } else {
      await gbsBuild(arch);
    }
  } else {
    await cpUiautomator();
  }
});

gulp.task('build', ['copyUiautomator']);

gulp.start('copyUiautomator');
