// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var aurum_pb = require('./aurum_pb.js');

function serialize_aurum_ReqClear(arg) {
  if (!(arg instanceof aurum_pb.ReqClear)) {
    throw new Error('Expected argument of type aurum.ReqClear');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqClear(buffer_arg) {
  return aurum_pb.ReqClear.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqClick(arg) {
  if (!(arg instanceof aurum_pb.ReqClick)) {
    throw new Error('Expected argument of type aurum.ReqClick');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqClick(buffer_arg) {
  return aurum_pb.ReqClick.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqCloseApp(arg) {
  if (!(arg instanceof aurum_pb.ReqCloseApp)) {
    throw new Error('Expected argument of type aurum.ReqCloseApp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqCloseApp(buffer_arg) {
  return aurum_pb.ReqCloseApp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqDumpObjectTree(arg) {
  if (!(arg instanceof aurum_pb.ReqDumpObjectTree)) {
    throw new Error('Expected argument of type aurum.ReqDumpObjectTree');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqDumpObjectTree(buffer_arg) {
  return aurum_pb.ReqDumpObjectTree.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqEmpty(arg) {
  if (!(arg instanceof aurum_pb.ReqEmpty)) {
    throw new Error('Expected argument of type aurum.ReqEmpty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqEmpty(buffer_arg) {
  return aurum_pb.ReqEmpty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqFindElement(arg) {
  if (!(arg instanceof aurum_pb.ReqFindElement)) {
    throw new Error('Expected argument of type aurum.ReqFindElement');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqFindElement(buffer_arg) {
  return aurum_pb.ReqFindElement.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqFlick(arg) {
  if (!(arg instanceof aurum_pb.ReqFlick)) {
    throw new Error('Expected argument of type aurum.ReqFlick');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqFlick(buffer_arg) {
  return aurum_pb.ReqFlick.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqGetAppInfo(arg) {
  if (!(arg instanceof aurum_pb.ReqGetAppInfo)) {
    throw new Error('Expected argument of type aurum.ReqGetAppInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqGetAppInfo(buffer_arg) {
  return aurum_pb.ReqGetAppInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqGetAttribute(arg) {
  if (!(arg instanceof aurum_pb.ReqGetAttribute)) {
    throw new Error('Expected argument of type aurum.ReqGetAttribute');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqGetAttribute(buffer_arg) {
  return aurum_pb.ReqGetAttribute.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqGetDeviceTime(arg) {
  if (!(arg instanceof aurum_pb.ReqGetDeviceTime)) {
    throw new Error('Expected argument of type aurum.ReqGetDeviceTime');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqGetDeviceTime(buffer_arg) {
  return aurum_pb.ReqGetDeviceTime.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqGetLocation(arg) {
  if (!(arg instanceof aurum_pb.ReqGetLocation)) {
    throw new Error('Expected argument of type aurum.ReqGetLocation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqGetLocation(buffer_arg) {
  return aurum_pb.ReqGetLocation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqGetSize(arg) {
  if (!(arg instanceof aurum_pb.ReqGetSize)) {
    throw new Error('Expected argument of type aurum.ReqGetSize');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqGetSize(buffer_arg) {
  return aurum_pb.ReqGetSize.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqGetValue(arg) {
  if (!(arg instanceof aurum_pb.ReqGetValue)) {
    throw new Error('Expected argument of type aurum.ReqGetValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqGetValue(buffer_arg) {
  return aurum_pb.ReqGetValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqInstallApp(arg) {
  if (!(arg instanceof aurum_pb.ReqInstallApp)) {
    throw new Error('Expected argument of type aurum.ReqInstallApp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqInstallApp(buffer_arg) {
  return aurum_pb.ReqInstallApp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqKey(arg) {
  if (!(arg instanceof aurum_pb.ReqKey)) {
    throw new Error('Expected argument of type aurum.ReqKey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqKey(buffer_arg) {
  return aurum_pb.ReqKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqLaunchApp(arg) {
  if (!(arg instanceof aurum_pb.ReqLaunchApp)) {
    throw new Error('Expected argument of type aurum.ReqLaunchApp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqLaunchApp(buffer_arg) {
  return aurum_pb.ReqLaunchApp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqRemoveApp(arg) {
  if (!(arg instanceof aurum_pb.ReqRemoveApp)) {
    throw new Error('Expected argument of type aurum.ReqRemoveApp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqRemoveApp(buffer_arg) {
  return aurum_pb.ReqRemoveApp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqSetValue(arg) {
  if (!(arg instanceof aurum_pb.ReqSetValue)) {
    throw new Error('Expected argument of type aurum.ReqSetValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqSetValue(buffer_arg) {
  return aurum_pb.ReqSetValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqTakeScreenshot(arg) {
  if (!(arg instanceof aurum_pb.ReqTakeScreenshot)) {
    throw new Error('Expected argument of type aurum.ReqTakeScreenshot');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqTakeScreenshot(buffer_arg) {
  return aurum_pb.ReqTakeScreenshot.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqTouchDown(arg) {
  if (!(arg instanceof aurum_pb.ReqTouchDown)) {
    throw new Error('Expected argument of type aurum.ReqTouchDown');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqTouchDown(buffer_arg) {
  return aurum_pb.ReqTouchDown.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqTouchMove(arg) {
  if (!(arg instanceof aurum_pb.ReqTouchMove)) {
    throw new Error('Expected argument of type aurum.ReqTouchMove');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqTouchMove(buffer_arg) {
  return aurum_pb.ReqTouchMove.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_ReqTouchUp(arg) {
  if (!(arg instanceof aurum_pb.ReqTouchUp)) {
    throw new Error('Expected argument of type aurum.ReqTouchUp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_ReqTouchUp(buffer_arg) {
  return aurum_pb.ReqTouchUp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspClear(arg) {
  if (!(arg instanceof aurum_pb.RspClear)) {
    throw new Error('Expected argument of type aurum.RspClear');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspClear(buffer_arg) {
  return aurum_pb.RspClear.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspClick(arg) {
  if (!(arg instanceof aurum_pb.RspClick)) {
    throw new Error('Expected argument of type aurum.RspClick');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspClick(buffer_arg) {
  return aurum_pb.RspClick.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspCloseApp(arg) {
  if (!(arg instanceof aurum_pb.RspCloseApp)) {
    throw new Error('Expected argument of type aurum.RspCloseApp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspCloseApp(buffer_arg) {
  return aurum_pb.RspCloseApp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspDumpObjectTree(arg) {
  if (!(arg instanceof aurum_pb.RspDumpObjectTree)) {
    throw new Error('Expected argument of type aurum.RspDumpObjectTree');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspDumpObjectTree(buffer_arg) {
  return aurum_pb.RspDumpObjectTree.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspEmpty(arg) {
  if (!(arg instanceof aurum_pb.RspEmpty)) {
    throw new Error('Expected argument of type aurum.RspEmpty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspEmpty(buffer_arg) {
  return aurum_pb.RspEmpty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspFindElement(arg) {
  if (!(arg instanceof aurum_pb.RspFindElement)) {
    throw new Error('Expected argument of type aurum.RspFindElement');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspFindElement(buffer_arg) {
  return aurum_pb.RspFindElement.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspFlick(arg) {
  if (!(arg instanceof aurum_pb.RspFlick)) {
    throw new Error('Expected argument of type aurum.RspFlick');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspFlick(buffer_arg) {
  return aurum_pb.RspFlick.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspGetAppInfo(arg) {
  if (!(arg instanceof aurum_pb.RspGetAppInfo)) {
    throw new Error('Expected argument of type aurum.RspGetAppInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspGetAppInfo(buffer_arg) {
  return aurum_pb.RspGetAppInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspGetAttribute(arg) {
  if (!(arg instanceof aurum_pb.RspGetAttribute)) {
    throw new Error('Expected argument of type aurum.RspGetAttribute');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspGetAttribute(buffer_arg) {
  return aurum_pb.RspGetAttribute.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspGetDeviceTime(arg) {
  if (!(arg instanceof aurum_pb.RspGetDeviceTime)) {
    throw new Error('Expected argument of type aurum.RspGetDeviceTime');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspGetDeviceTime(buffer_arg) {
  return aurum_pb.RspGetDeviceTime.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspGetLocation(arg) {
  if (!(arg instanceof aurum_pb.RspGetLocation)) {
    throw new Error('Expected argument of type aurum.RspGetLocation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspGetLocation(buffer_arg) {
  return aurum_pb.RspGetLocation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspGetSize(arg) {
  if (!(arg instanceof aurum_pb.RspGetSize)) {
    throw new Error('Expected argument of type aurum.RspGetSize');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspGetSize(buffer_arg) {
  return aurum_pb.RspGetSize.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspGetValue(arg) {
  if (!(arg instanceof aurum_pb.RspGetValue)) {
    throw new Error('Expected argument of type aurum.RspGetValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspGetValue(buffer_arg) {
  return aurum_pb.RspGetValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspInstallApp(arg) {
  if (!(arg instanceof aurum_pb.RspInstallApp)) {
    throw new Error('Expected argument of type aurum.RspInstallApp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspInstallApp(buffer_arg) {
  return aurum_pb.RspInstallApp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspKey(arg) {
  if (!(arg instanceof aurum_pb.RspKey)) {
    throw new Error('Expected argument of type aurum.RspKey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspKey(buffer_arg) {
  return aurum_pb.RspKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspLaunchApp(arg) {
  if (!(arg instanceof aurum_pb.RspLaunchApp)) {
    throw new Error('Expected argument of type aurum.RspLaunchApp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspLaunchApp(buffer_arg) {
  return aurum_pb.RspLaunchApp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspRemoveApp(arg) {
  if (!(arg instanceof aurum_pb.RspRemoveApp)) {
    throw new Error('Expected argument of type aurum.RspRemoveApp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspRemoveApp(buffer_arg) {
  return aurum_pb.RspRemoveApp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspSetValue(arg) {
  if (!(arg instanceof aurum_pb.RspSetValue)) {
    throw new Error('Expected argument of type aurum.RspSetValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspSetValue(buffer_arg) {
  return aurum_pb.RspSetValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspTakeScreenshot(arg) {
  if (!(arg instanceof aurum_pb.RspTakeScreenshot)) {
    throw new Error('Expected argument of type aurum.RspTakeScreenshot');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspTakeScreenshot(buffer_arg) {
  return aurum_pb.RspTakeScreenshot.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspTouchDown(arg) {
  if (!(arg instanceof aurum_pb.RspTouchDown)) {
    throw new Error('Expected argument of type aurum.RspTouchDown');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspTouchDown(buffer_arg) {
  return aurum_pb.RspTouchDown.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspTouchMove(arg) {
  if (!(arg instanceof aurum_pb.RspTouchMove)) {
    throw new Error('Expected argument of type aurum.RspTouchMove');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspTouchMove(buffer_arg) {
  return aurum_pb.RspTouchMove.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_aurum_RspTouchUp(arg) {
  if (!(arg instanceof aurum_pb.RspTouchUp)) {
    throw new Error('Expected argument of type aurum.RspTouchUp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_aurum_RspTouchUp(buffer_arg) {
  return aurum_pb.RspTouchUp.deserializeBinary(new Uint8Array(buffer_arg));
}


// This file was copied from https://github.sec.samsung.net/tizen/aurum
// Go to the repo for the latest version of this file
//
// *
// @page protocol Protocol
// Here is a page with some descriptions about protocol explained
var BootstrapService = exports.BootstrapService = {
  sync: {
    path: '/aurum.Bootstrap/sync',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqEmpty,
    responseType: aurum_pb.RspEmpty,
    requestSerialize: serialize_aurum_ReqEmpty,
    requestDeserialize: deserialize_aurum_ReqEmpty,
    responseSerialize: serialize_aurum_RspEmpty,
    responseDeserialize: deserialize_aurum_RspEmpty,
  },
  killServer: {
    path: '/aurum.Bootstrap/killServer',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqEmpty,
    responseType: aurum_pb.RspEmpty,
    requestSerialize: serialize_aurum_ReqEmpty,
    requestDeserialize: deserialize_aurum_ReqEmpty,
    responseSerialize: serialize_aurum_RspEmpty,
    responseDeserialize: deserialize_aurum_RspEmpty,
  },
  findElement: {
    path: '/aurum.Bootstrap/findElement',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqFindElement,
    responseType: aurum_pb.RspFindElement,
    requestSerialize: serialize_aurum_ReqFindElement,
    requestDeserialize: deserialize_aurum_ReqFindElement,
    responseSerialize: serialize_aurum_RspFindElement,
    responseDeserialize: deserialize_aurum_RspFindElement,
  },
  getValue: {
    path: '/aurum.Bootstrap/getValue',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqGetValue,
    responseType: aurum_pb.RspGetValue,
    requestSerialize: serialize_aurum_ReqGetValue,
    requestDeserialize: deserialize_aurum_ReqGetValue,
    responseSerialize: serialize_aurum_RspGetValue,
    responseDeserialize: deserialize_aurum_RspGetValue,
  },
  setValue: {
    path: '/aurum.Bootstrap/setValue',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqSetValue,
    responseType: aurum_pb.RspSetValue,
    requestSerialize: serialize_aurum_ReqSetValue,
    requestDeserialize: deserialize_aurum_ReqSetValue,
    responseSerialize: serialize_aurum_RspSetValue,
    responseDeserialize: deserialize_aurum_RspSetValue,
  },
  getSize: {
    path: '/aurum.Bootstrap/getSize',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqGetSize,
    responseType: aurum_pb.RspGetSize,
    requestSerialize: serialize_aurum_ReqGetSize,
    requestDeserialize: deserialize_aurum_ReqGetSize,
    responseSerialize: serialize_aurum_RspGetSize,
    responseDeserialize: deserialize_aurum_RspGetSize,
  },
  clear: {
    path: '/aurum.Bootstrap/clear',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqClear,
    responseType: aurum_pb.RspClear,
    requestSerialize: serialize_aurum_ReqClear,
    requestDeserialize: deserialize_aurum_ReqClear,
    responseSerialize: serialize_aurum_RspClear,
    responseDeserialize: deserialize_aurum_RspClear,
  },
  getAttribute: {
    path: '/aurum.Bootstrap/getAttribute',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqGetAttribute,
    responseType: aurum_pb.RspGetAttribute,
    requestSerialize: serialize_aurum_ReqGetAttribute,
    requestDeserialize: deserialize_aurum_ReqGetAttribute,
    responseSerialize: serialize_aurum_RspGetAttribute,
    responseDeserialize: deserialize_aurum_RspGetAttribute,
  },
  click: {
    path: '/aurum.Bootstrap/click',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqClick,
    responseType: aurum_pb.RspClick,
    requestSerialize: serialize_aurum_ReqClick,
    requestDeserialize: deserialize_aurum_ReqClick,
    responseSerialize: serialize_aurum_RspClick,
    responseDeserialize: deserialize_aurum_RspClick,
  },
  longClick: {
    path: '/aurum.Bootstrap/longClick',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqClick,
    responseType: aurum_pb.RspClick,
    requestSerialize: serialize_aurum_ReqClick,
    requestDeserialize: deserialize_aurum_ReqClick,
    responseSerialize: serialize_aurum_RspClick,
    responseDeserialize: deserialize_aurum_RspClick,
  },
  flick: {
    path: '/aurum.Bootstrap/flick',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqFlick,
    responseType: aurum_pb.RspFlick,
    requestSerialize: serialize_aurum_ReqFlick,
    requestDeserialize: deserialize_aurum_ReqFlick,
    responseSerialize: serialize_aurum_RspFlick,
    responseDeserialize: deserialize_aurum_RspFlick,
  },
  touchDown: {
    path: '/aurum.Bootstrap/touchDown',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqTouchDown,
    responseType: aurum_pb.RspTouchDown,
    requestSerialize: serialize_aurum_ReqTouchDown,
    requestDeserialize: deserialize_aurum_ReqTouchDown,
    responseSerialize: serialize_aurum_RspTouchDown,
    responseDeserialize: deserialize_aurum_RspTouchDown,
  },
  touchMove: {
    path: '/aurum.Bootstrap/touchMove',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqTouchMove,
    responseType: aurum_pb.RspTouchMove,
    requestSerialize: serialize_aurum_ReqTouchMove,
    requestDeserialize: deserialize_aurum_ReqTouchMove,
    responseSerialize: serialize_aurum_RspTouchMove,
    responseDeserialize: deserialize_aurum_RspTouchMove,
  },
  touchUp: {
    path: '/aurum.Bootstrap/touchUp',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqTouchUp,
    responseType: aurum_pb.RspTouchUp,
    requestSerialize: serialize_aurum_ReqTouchUp,
    requestDeserialize: deserialize_aurum_ReqTouchUp,
    responseSerialize: serialize_aurum_RspTouchUp,
    responseDeserialize: deserialize_aurum_RspTouchUp,
  },
  installApp: {
    path: '/aurum.Bootstrap/installApp',
    requestStream: true,
    responseStream: false,
    requestType: aurum_pb.ReqInstallApp,
    responseType: aurum_pb.RspInstallApp,
    requestSerialize: serialize_aurum_ReqInstallApp,
    requestDeserialize: deserialize_aurum_ReqInstallApp,
    responseSerialize: serialize_aurum_RspInstallApp,
    responseDeserialize: deserialize_aurum_RspInstallApp,
  },
  removeApp: {
    path: '/aurum.Bootstrap/removeApp',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqRemoveApp,
    responseType: aurum_pb.RspRemoveApp,
    requestSerialize: serialize_aurum_ReqRemoveApp,
    requestDeserialize: deserialize_aurum_ReqRemoveApp,
    responseSerialize: serialize_aurum_RspRemoveApp,
    responseDeserialize: deserialize_aurum_RspRemoveApp,
  },
  getAppInfo: {
    path: '/aurum.Bootstrap/getAppInfo',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqGetAppInfo,
    responseType: aurum_pb.RspGetAppInfo,
    requestSerialize: serialize_aurum_ReqGetAppInfo,
    requestDeserialize: deserialize_aurum_ReqGetAppInfo,
    responseSerialize: serialize_aurum_RspGetAppInfo,
    responseDeserialize: deserialize_aurum_RspGetAppInfo,
  },
  launchApp: {
    path: '/aurum.Bootstrap/launchApp',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqLaunchApp,
    responseType: aurum_pb.RspLaunchApp,
    requestSerialize: serialize_aurum_ReqLaunchApp,
    requestDeserialize: deserialize_aurum_ReqLaunchApp,
    responseSerialize: serialize_aurum_RspLaunchApp,
    responseDeserialize: deserialize_aurum_RspLaunchApp,
  },
  closeApp: {
    path: '/aurum.Bootstrap/closeApp',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqCloseApp,
    responseType: aurum_pb.RspCloseApp,
    requestSerialize: serialize_aurum_ReqCloseApp,
    requestDeserialize: deserialize_aurum_ReqCloseApp,
    responseSerialize: serialize_aurum_RspCloseApp,
    responseDeserialize: deserialize_aurum_RspCloseApp,
  },
  getDeviceTime: {
    path: '/aurum.Bootstrap/getDeviceTime',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqGetDeviceTime,
    responseType: aurum_pb.RspGetDeviceTime,
    requestSerialize: serialize_aurum_ReqGetDeviceTime,
    requestDeserialize: deserialize_aurum_ReqGetDeviceTime,
    responseSerialize: serialize_aurum_RspGetDeviceTime,
    responseDeserialize: deserialize_aurum_RspGetDeviceTime,
  },
  getLocation: {
    path: '/aurum.Bootstrap/getLocation',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqGetLocation,
    responseType: aurum_pb.RspGetLocation,
    requestSerialize: serialize_aurum_ReqGetLocation,
    requestDeserialize: deserialize_aurum_ReqGetLocation,
    responseSerialize: serialize_aurum_RspGetLocation,
    responseDeserialize: deserialize_aurum_RspGetLocation,
  },
  sendKey: {
    path: '/aurum.Bootstrap/sendKey',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqKey,
    responseType: aurum_pb.RspKey,
    requestSerialize: serialize_aurum_ReqKey,
    requestDeserialize: deserialize_aurum_ReqKey,
    responseSerialize: serialize_aurum_RspKey,
    responseDeserialize: deserialize_aurum_RspKey,
  },
  takeScreenshot: {
    path: '/aurum.Bootstrap/takeScreenshot',
    requestStream: false,
    responseStream: true,
    requestType: aurum_pb.ReqTakeScreenshot,
    responseType: aurum_pb.RspTakeScreenshot,
    requestSerialize: serialize_aurum_ReqTakeScreenshot,
    requestDeserialize: deserialize_aurum_ReqTakeScreenshot,
    responseSerialize: serialize_aurum_RspTakeScreenshot,
    responseDeserialize: deserialize_aurum_RspTakeScreenshot,
  },
  dumpObjectTree: {
    path: '/aurum.Bootstrap/dumpObjectTree',
    requestStream: false,
    responseStream: false,
    requestType: aurum_pb.ReqDumpObjectTree,
    responseType: aurum_pb.RspDumpObjectTree,
    requestSerialize: serialize_aurum_ReqDumpObjectTree,
    requestDeserialize: deserialize_aurum_ReqDumpObjectTree,
    responseSerialize: serialize_aurum_RspDumpObjectTree,
    responseDeserialize: deserialize_aurum_RspDumpObjectTree,
  },
};

exports.BootstrapClient = grpc.makeGenericClientConstructor(BootstrapService);
