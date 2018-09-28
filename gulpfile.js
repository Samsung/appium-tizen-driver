"use strict";

const gulp = require('gulp');
const boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);
const cp = require('child_process');
const argv = require('yargs').argv;
const B = require('bluebird');
const log = require('fancy-log');


boilerplate({
  build: 'appium-tizen-driver',
  testTimeout: 40000
});

function runCommand (command) {
  return new B(function (resolve, reject) {
    let run = cp.exec(command, function (error, stdout, stderr) {
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
  const files = [
    '-rf',
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
    'uiautomator-debugsource.manifest',
  ];

  return new B(function (resolve, reject) {
    let rm = cp.spawn('rm', files);

    rm.on('error', reject);
    rm.on('close', resolve);
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
    log(`Warning: uiautomator(${arch}) creation is failed, prebuilt uiautomator will be used`);
    log(err);
  }
}

async function cpUiautomator () {
  let cp_file = `cp ui-automator/build/uiautomator_* ./build`;
  await runCommand(cp_file);
}

gulp.task('build-gbs', async function () {
  let gbs = argv.gbs;
  let arch = argv.arch ? argv.arch : 'all';

  if (gbs) {
    log(`Starting GBS Build, Arch=${arch}`);
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
