// source: aurum.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.aurum.Element', null, global);
goog.exportSymbol('proto.aurum.LaunchData', null, global);
goog.exportSymbol('proto.aurum.ParamType', null, global);
goog.exportSymbol('proto.aurum.Point', null, global);
goog.exportSymbol('proto.aurum.Rect', null, global);
goog.exportSymbol('proto.aurum.ReqClear', null, global);
goog.exportSymbol('proto.aurum.ReqClick', null, global);
goog.exportSymbol('proto.aurum.ReqClick.ParamsCase', null, global);
goog.exportSymbol('proto.aurum.ReqClick.RequestType', null, global);
goog.exportSymbol('proto.aurum.ReqCloseApp', null, global);
goog.exportSymbol('proto.aurum.ReqDumpObjectTree', null, global);
goog.exportSymbol('proto.aurum.ReqEmpty', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.AutomationidCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.ElementidCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IsactiveCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IscheckableCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IscheckedCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IsclickableCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IsenabledCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IsfocusableCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IsfocusedCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IsscrollableCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IsselectedCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.IsshowingCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.MaxdepthCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.MindepthCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.PackagenameCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.TextfieldCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.WidgetstyleCase', null, global);
goog.exportSymbol('proto.aurum.ReqFindElement.WidgettypeCase', null, global);
goog.exportSymbol('proto.aurum.ReqFlick', null, global);
goog.exportSymbol('proto.aurum.ReqGetAppInfo', null, global);
goog.exportSymbol('proto.aurum.ReqGetAttribute', null, global);
goog.exportSymbol('proto.aurum.ReqGetAttribute.RequestType', null, global);
goog.exportSymbol('proto.aurum.ReqGetDeviceTime', null, global);
goog.exportSymbol('proto.aurum.ReqGetDeviceTime.TimeType', null, global);
goog.exportSymbol('proto.aurum.ReqGetLocation', null, global);
goog.exportSymbol('proto.aurum.ReqGetSize', null, global);
goog.exportSymbol('proto.aurum.ReqGetSize.CoordType', null, global);
goog.exportSymbol('proto.aurum.ReqGetValue', null, global);
goog.exportSymbol('proto.aurum.ReqInstallApp', null, global);
goog.exportSymbol('proto.aurum.ReqKey', null, global);
goog.exportSymbol('proto.aurum.ReqKey.KeyActionType', null, global);
goog.exportSymbol('proto.aurum.ReqKey.KeyType', null, global);
goog.exportSymbol('proto.aurum.ReqLaunchApp', null, global);
goog.exportSymbol('proto.aurum.ReqRemoveApp', null, global);
goog.exportSymbol('proto.aurum.ReqSetValue', null, global);
goog.exportSymbol('proto.aurum.ReqSetValue.ParamsCase', null, global);
goog.exportSymbol('proto.aurum.ReqTakeScreenshot', null, global);
goog.exportSymbol('proto.aurum.ReqTouchDown', null, global);
goog.exportSymbol('proto.aurum.ReqTouchMove', null, global);
goog.exportSymbol('proto.aurum.ReqTouchUp', null, global);
goog.exportSymbol('proto.aurum.RspClear', null, global);
goog.exportSymbol('proto.aurum.RspClick', null, global);
goog.exportSymbol('proto.aurum.RspCloseApp', null, global);
goog.exportSymbol('proto.aurum.RspDumpObjectTree', null, global);
goog.exportSymbol('proto.aurum.RspEmpty', null, global);
goog.exportSymbol('proto.aurum.RspFindElement', null, global);
goog.exportSymbol('proto.aurum.RspFlick', null, global);
goog.exportSymbol('proto.aurum.RspGetAppInfo', null, global);
goog.exportSymbol('proto.aurum.RspGetAttribute', null, global);
goog.exportSymbol('proto.aurum.RspGetDeviceTime', null, global);
goog.exportSymbol('proto.aurum.RspGetLocation', null, global);
goog.exportSymbol('proto.aurum.RspGetSize', null, global);
goog.exportSymbol('proto.aurum.RspGetValue', null, global);
goog.exportSymbol('proto.aurum.RspGetValue.ParamsCase', null, global);
goog.exportSymbol('proto.aurum.RspInstallApp', null, global);
goog.exportSymbol('proto.aurum.RspKey', null, global);
goog.exportSymbol('proto.aurum.RspLaunchApp', null, global);
goog.exportSymbol('proto.aurum.RspRemoveApp', null, global);
goog.exportSymbol('proto.aurum.RspSetValue', null, global);
goog.exportSymbol('proto.aurum.RspStatus', null, global);
goog.exportSymbol('proto.aurum.RspTakeScreenshot', null, global);
goog.exportSymbol('proto.aurum.RspTouchDown', null, global);
goog.exportSymbol('proto.aurum.RspTouchMove', null, global);
goog.exportSymbol('proto.aurum.RspTouchUp', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.Element = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aurum.Element.repeatedFields_, null);
};
goog.inherits(proto.aurum.Element, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.Element.displayName = 'proto.aurum.Element';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.Point = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.Point, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.Point.displayName = 'proto.aurum.Point';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.Rect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.Rect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.Rect.displayName = 'proto.aurum.Rect';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.LaunchData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.LaunchData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.LaunchData.displayName = 'proto.aurum.LaunchData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqFindElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aurum.ReqFindElement.repeatedFields_, proto.aurum.ReqFindElement.oneofGroups_);
};
goog.inherits(proto.aurum.ReqFindElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqFindElement.displayName = 'proto.aurum.ReqFindElement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspFindElement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aurum.RspFindElement.repeatedFields_, null);
};
goog.inherits(proto.aurum.RspFindElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspFindElement.displayName = 'proto.aurum.RspFindElement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqGetValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqGetValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqGetValue.displayName = 'proto.aurum.ReqGetValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspGetValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aurum.RspGetValue.oneofGroups_);
};
goog.inherits(proto.aurum.RspGetValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspGetValue.displayName = 'proto.aurum.RspGetValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqSetValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aurum.ReqSetValue.oneofGroups_);
};
goog.inherits(proto.aurum.ReqSetValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqSetValue.displayName = 'proto.aurum.ReqSetValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspSetValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspSetValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspSetValue.displayName = 'proto.aurum.RspSetValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqGetSize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqGetSize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqGetSize.displayName = 'proto.aurum.ReqGetSize';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspGetSize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspGetSize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspGetSize.displayName = 'proto.aurum.RspGetSize';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqClear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqClear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqClear.displayName = 'proto.aurum.ReqClear';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspClear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspClear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspClear.displayName = 'proto.aurum.RspClear';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqGetAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqGetAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqGetAttribute.displayName = 'proto.aurum.ReqGetAttribute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspGetAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspGetAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspGetAttribute.displayName = 'proto.aurum.RspGetAttribute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.aurum.ReqClick.oneofGroups_);
};
goog.inherits(proto.aurum.ReqClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqClick.displayName = 'proto.aurum.ReqClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspClick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspClick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspClick.displayName = 'proto.aurum.RspClick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqFlick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqFlick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqFlick.displayName = 'proto.aurum.ReqFlick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspFlick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspFlick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspFlick.displayName = 'proto.aurum.RspFlick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqTouchDown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqTouchDown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqTouchDown.displayName = 'proto.aurum.ReqTouchDown';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspTouchDown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspTouchDown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspTouchDown.displayName = 'proto.aurum.RspTouchDown';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqTouchMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqTouchMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqTouchMove.displayName = 'proto.aurum.ReqTouchMove';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspTouchMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspTouchMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspTouchMove.displayName = 'proto.aurum.RspTouchMove';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqTouchUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqTouchUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqTouchUp.displayName = 'proto.aurum.ReqTouchUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspTouchUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspTouchUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspTouchUp.displayName = 'proto.aurum.RspTouchUp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqInstallApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqInstallApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqInstallApp.displayName = 'proto.aurum.ReqInstallApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspInstallApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspInstallApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspInstallApp.displayName = 'proto.aurum.RspInstallApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqRemoveApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqRemoveApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqRemoveApp.displayName = 'proto.aurum.ReqRemoveApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspRemoveApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspRemoveApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspRemoveApp.displayName = 'proto.aurum.RspRemoveApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqGetAppInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqGetAppInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqGetAppInfo.displayName = 'proto.aurum.ReqGetAppInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspGetAppInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspGetAppInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspGetAppInfo.displayName = 'proto.aurum.RspGetAppInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqLaunchApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aurum.ReqLaunchApp.repeatedFields_, null);
};
goog.inherits(proto.aurum.ReqLaunchApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqLaunchApp.displayName = 'proto.aurum.ReqLaunchApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspLaunchApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspLaunchApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspLaunchApp.displayName = 'proto.aurum.RspLaunchApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqCloseApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqCloseApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqCloseApp.displayName = 'proto.aurum.ReqCloseApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspCloseApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspCloseApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspCloseApp.displayName = 'proto.aurum.RspCloseApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqGetDeviceTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqGetDeviceTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqGetDeviceTime.displayName = 'proto.aurum.ReqGetDeviceTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspGetDeviceTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspGetDeviceTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspGetDeviceTime.displayName = 'proto.aurum.RspGetDeviceTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqGetLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqGetLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqGetLocation.displayName = 'proto.aurum.ReqGetLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspGetLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspGetLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspGetLocation.displayName = 'proto.aurum.RspGetLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqKey.displayName = 'proto.aurum.ReqKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspKey.displayName = 'proto.aurum.RspKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqTakeScreenshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqTakeScreenshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqTakeScreenshot.displayName = 'proto.aurum.ReqTakeScreenshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspTakeScreenshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspTakeScreenshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspTakeScreenshot.displayName = 'proto.aurum.RspTakeScreenshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqEmpty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqEmpty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqEmpty.displayName = 'proto.aurum.ReqEmpty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspEmpty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.RspEmpty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspEmpty.displayName = 'proto.aurum.RspEmpty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.ReqDumpObjectTree = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aurum.ReqDumpObjectTree, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.ReqDumpObjectTree.displayName = 'proto.aurum.ReqDumpObjectTree';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aurum.RspDumpObjectTree = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.aurum.RspDumpObjectTree.repeatedFields_, null);
};
goog.inherits(proto.aurum.RspDumpObjectTree, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aurum.RspDumpObjectTree.displayName = 'proto.aurum.RspDumpObjectTree';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aurum.Element.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.Element.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.Element.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.Element} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.Element.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    childList: jspb.Message.toObjectList(msg.getChildList(),
    proto.aurum.Element.toObject, includeInstance),
    geometry: (f = msg.getGeometry()) && proto.aurum.Rect.toObject(includeInstance, f),
    windowRelativeGeometry: (f = msg.getWindowRelativeGeometry()) && proto.aurum.Rect.toObject(includeInstance, f),
    widgetType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    widgetStyle: jspb.Message.getFieldWithDefault(msg, 6, ""),
    text: jspb.Message.getFieldWithDefault(msg, 7, ""),
    id: jspb.Message.getFieldWithDefault(msg, 8, ""),
    automationid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    pb_package: jspb.Message.getFieldWithDefault(msg, 10, ""),
    role: jspb.Message.getFieldWithDefault(msg, 11, ""),
    ischecked: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    ischeckable: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    isclickable: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    isenabled: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    isfocused: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    isfocusable: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    isscrollable: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    isselected: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    isshowing: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    isactive: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isvisible: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    isselectable: jspb.Message.getBooleanFieldWithDefault(msg, 23, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.Element}
 */
proto.aurum.Element.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.Element;
  return proto.aurum.Element.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.Element} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.Element}
 */
proto.aurum.Element.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementid(value);
      break;
    case 2:
      var value = new proto.aurum.Element;
      reader.readMessage(value,proto.aurum.Element.deserializeBinaryFromReader);
      msg.addChild(value);
      break;
    case 3:
      var value = new proto.aurum.Rect;
      reader.readMessage(value,proto.aurum.Rect.deserializeBinaryFromReader);
      msg.setGeometry(value);
      break;
    case 4:
      var value = new proto.aurum.Rect;
      reader.readMessage(value,proto.aurum.Rect.deserializeBinaryFromReader);
      msg.setWindowRelativeGeometry(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWidgetType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWidgetStyle(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAutomationid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackage(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIschecked(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIscheckable(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsclickable(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsenabled(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfocused(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfocusable(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsscrollable(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsselected(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsshowing(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsactive(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsvisible(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsselectable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.Element.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.Element.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.Element} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.Element.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChildList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.aurum.Element.serializeBinaryToWriter
    );
  }
  f = message.getGeometry();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.aurum.Rect.serializeBinaryToWriter
    );
  }
  f = message.getWindowRelativeGeometry();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.aurum.Rect.serializeBinaryToWriter
    );
  }
  f = message.getWidgetType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWidgetStyle();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAutomationid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPackage();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getIschecked();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIscheckable();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getIsclickable();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getIsenabled();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getIsfocused();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getIsfocusable();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getIsscrollable();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getIsselected();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getIsshowing();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getIsactive();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIsvisible();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getIsselectable();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
};


/**
 * optional string elementId = 1;
 * @return {string}
 */
proto.aurum.Element.prototype.getElementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setElementid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Element child = 2;
 * @return {!Array<!proto.aurum.Element>}
 */
proto.aurum.Element.prototype.getChildList = function() {
  return /** @type{!Array<!proto.aurum.Element>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.aurum.Element, 2));
};


/**
 * @param {!Array<!proto.aurum.Element>} value
 * @return {!proto.aurum.Element} returns this
*/
proto.aurum.Element.prototype.setChildList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.aurum.Element=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aurum.Element}
 */
proto.aurum.Element.prototype.addChild = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.aurum.Element, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.clearChildList = function() {
  return this.setChildList([]);
};


/**
 * optional Rect geometry = 3;
 * @return {?proto.aurum.Rect}
 */
proto.aurum.Element.prototype.getGeometry = function() {
  return /** @type{?proto.aurum.Rect} */ (
    jspb.Message.getWrapperField(this, proto.aurum.Rect, 3));
};


/**
 * @param {?proto.aurum.Rect|undefined} value
 * @return {!proto.aurum.Element} returns this
*/
proto.aurum.Element.prototype.setGeometry = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.clearGeometry = function() {
  return this.setGeometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.Element.prototype.hasGeometry = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Rect window_relative_geometry = 4;
 * @return {?proto.aurum.Rect}
 */
proto.aurum.Element.prototype.getWindowRelativeGeometry = function() {
  return /** @type{?proto.aurum.Rect} */ (
    jspb.Message.getWrapperField(this, proto.aurum.Rect, 4));
};


/**
 * @param {?proto.aurum.Rect|undefined} value
 * @return {!proto.aurum.Element} returns this
*/
proto.aurum.Element.prototype.setWindowRelativeGeometry = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.clearWindowRelativeGeometry = function() {
  return this.setWindowRelativeGeometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.Element.prototype.hasWindowRelativeGeometry = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string widget_type = 5;
 * @return {string}
 */
proto.aurum.Element.prototype.getWidgetType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setWidgetType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string widget_style = 6;
 * @return {string}
 */
proto.aurum.Element.prototype.getWidgetStyle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setWidgetStyle = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string text = 7;
 * @return {string}
 */
proto.aurum.Element.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string id = 8;
 * @return {string}
 */
proto.aurum.Element.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string automationId = 9;
 * @return {string}
 */
proto.aurum.Element.prototype.getAutomationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setAutomationid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string package = 10;
 * @return {string}
 */
proto.aurum.Element.prototype.getPackage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setPackage = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string role = 11;
 * @return {string}
 */
proto.aurum.Element.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool isChecked = 12;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIschecked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIschecked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool isCheckable = 13;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIscheckable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIscheckable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool isClickable = 14;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsclickable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsclickable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool isEnabled = 15;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool isFocused = 16;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsfocused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsfocused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool isFocusable = 17;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsfocusable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsfocusable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool isScrollable = 18;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsscrollable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsscrollable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bool isSelected = 19;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsselected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsselected = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional bool isShowing = 20;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsshowing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsshowing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool isActive = 21;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsactive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsactive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool isVisible = 22;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsvisible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsvisible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool isSelectable = 23;
 * @return {boolean}
 */
proto.aurum.Element.prototype.getIsselectable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.Element} returns this
 */
proto.aurum.Element.prototype.setIsselectable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.Point.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.Point.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.Point} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.Point.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.Point}
 */
proto.aurum.Point.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.Point;
  return proto.aurum.Point.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.Point} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.Point}
 */
proto.aurum.Point.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.Point.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.Point.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.Point} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.Point.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.aurum.Point.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.Point} returns this
 */
proto.aurum.Point.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.aurum.Point.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.Point} returns this
 */
proto.aurum.Point.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.Rect.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.Rect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.Rect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.Rect.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0),
    width: jspb.Message.getFieldWithDefault(msg, 3, 0),
    height: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.Rect}
 */
proto.aurum.Rect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.Rect;
  return proto.aurum.Rect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.Rect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.Rect}
 */
proto.aurum.Rect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.Rect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.Rect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.Rect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.Rect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.aurum.Rect.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.Rect} returns this
 */
proto.aurum.Rect.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.aurum.Rect.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.Rect} returns this
 */
proto.aurum.Rect.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 width = 3;
 * @return {number}
 */
proto.aurum.Rect.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.Rect} returns this
 */
proto.aurum.Rect.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 height = 4;
 * @return {number}
 */
proto.aurum.Rect.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.Rect} returns this
 */
proto.aurum.Rect.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.LaunchData.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.LaunchData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.LaunchData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.LaunchData.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.LaunchData}
 */
proto.aurum.LaunchData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.LaunchData;
  return proto.aurum.LaunchData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.LaunchData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.LaunchData}
 */
proto.aurum.LaunchData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.LaunchData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.LaunchData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.LaunchData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.LaunchData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.aurum.LaunchData.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.LaunchData} returns this
 */
proto.aurum.LaunchData.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.aurum.LaunchData.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.LaunchData} returns this
 */
proto.aurum.LaunchData.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aurum.ReqFindElement.repeatedFields_ = [19];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aurum.ReqFindElement.oneofGroups_ = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18]];

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.ElementidCase = {
  _ELEMENTID_NOT_SET: 0,
  ELEMENTID: 1
};

/**
 * @return {proto.aurum.ReqFindElement.ElementidCase}
 */
proto.aurum.ReqFindElement.prototype.getElementidCase = function() {
  return /** @type {proto.aurum.ReqFindElement.ElementidCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.AutomationidCase = {
  _AUTOMATIONID_NOT_SET: 0,
  AUTOMATIONID: 2
};

/**
 * @return {proto.aurum.ReqFindElement.AutomationidCase}
 */
proto.aurum.ReqFindElement.prototype.getAutomationidCase = function() {
  return /** @type {proto.aurum.ReqFindElement.AutomationidCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[1]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.TextfieldCase = {
  _TEXTFIELD_NOT_SET: 0,
  TEXTFIELD: 3
};

/**
 * @return {proto.aurum.ReqFindElement.TextfieldCase}
 */
proto.aurum.ReqFindElement.prototype.getTextfieldCase = function() {
  return /** @type {proto.aurum.ReqFindElement.TextfieldCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[2]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.WidgettypeCase = {
  _WIDGETTYPE_NOT_SET: 0,
  WIDGETTYPE: 4
};

/**
 * @return {proto.aurum.ReqFindElement.WidgettypeCase}
 */
proto.aurum.ReqFindElement.prototype.getWidgettypeCase = function() {
  return /** @type {proto.aurum.ReqFindElement.WidgettypeCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[3]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.WidgetstyleCase = {
  _WIDGETSTYLE_NOT_SET: 0,
  WIDGETSTYLE: 5
};

/**
 * @return {proto.aurum.ReqFindElement.WidgetstyleCase}
 */
proto.aurum.ReqFindElement.prototype.getWidgetstyleCase = function() {
  return /** @type {proto.aurum.ReqFindElement.WidgetstyleCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[4]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IscheckedCase = {
  _ISCHECKED_NOT_SET: 0,
  ISCHECKED: 6
};

/**
 * @return {proto.aurum.ReqFindElement.IscheckedCase}
 */
proto.aurum.ReqFindElement.prototype.getIscheckedCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IscheckedCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[5]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IscheckableCase = {
  _ISCHECKABLE_NOT_SET: 0,
  ISCHECKABLE: 7
};

/**
 * @return {proto.aurum.ReqFindElement.IscheckableCase}
 */
proto.aurum.ReqFindElement.prototype.getIscheckableCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IscheckableCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[6]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IsclickableCase = {
  _ISCLICKABLE_NOT_SET: 0,
  ISCLICKABLE: 8
};

/**
 * @return {proto.aurum.ReqFindElement.IsclickableCase}
 */
proto.aurum.ReqFindElement.prototype.getIsclickableCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IsclickableCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[7]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IsenabledCase = {
  _ISENABLED_NOT_SET: 0,
  ISENABLED: 9
};

/**
 * @return {proto.aurum.ReqFindElement.IsenabledCase}
 */
proto.aurum.ReqFindElement.prototype.getIsenabledCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IsenabledCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[8]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IsfocusedCase = {
  _ISFOCUSED_NOT_SET: 0,
  ISFOCUSED: 10
};

/**
 * @return {proto.aurum.ReqFindElement.IsfocusedCase}
 */
proto.aurum.ReqFindElement.prototype.getIsfocusedCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IsfocusedCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[9]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IsfocusableCase = {
  _ISFOCUSABLE_NOT_SET: 0,
  ISFOCUSABLE: 11
};

/**
 * @return {proto.aurum.ReqFindElement.IsfocusableCase}
 */
proto.aurum.ReqFindElement.prototype.getIsfocusableCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IsfocusableCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[10]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IsscrollableCase = {
  _ISSCROLLABLE_NOT_SET: 0,
  ISSCROLLABLE: 12
};

/**
 * @return {proto.aurum.ReqFindElement.IsscrollableCase}
 */
proto.aurum.ReqFindElement.prototype.getIsscrollableCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IsscrollableCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[11]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IsselectedCase = {
  _ISSELECTED_NOT_SET: 0,
  ISSELECTED: 13
};

/**
 * @return {proto.aurum.ReqFindElement.IsselectedCase}
 */
proto.aurum.ReqFindElement.prototype.getIsselectedCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IsselectedCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[12]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IsshowingCase = {
  _ISSHOWING_NOT_SET: 0,
  ISSHOWING: 14
};

/**
 * @return {proto.aurum.ReqFindElement.IsshowingCase}
 */
proto.aurum.ReqFindElement.prototype.getIsshowingCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IsshowingCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[13]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.IsactiveCase = {
  _ISACTIVE_NOT_SET: 0,
  ISACTIVE: 15
};

/**
 * @return {proto.aurum.ReqFindElement.IsactiveCase}
 */
proto.aurum.ReqFindElement.prototype.getIsactiveCase = function() {
  return /** @type {proto.aurum.ReqFindElement.IsactiveCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[14]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.MindepthCase = {
  _MINDEPTH_NOT_SET: 0,
  MINDEPTH: 16
};

/**
 * @return {proto.aurum.ReqFindElement.MindepthCase}
 */
proto.aurum.ReqFindElement.prototype.getMindepthCase = function() {
  return /** @type {proto.aurum.ReqFindElement.MindepthCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[15]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.MaxdepthCase = {
  _MAXDEPTH_NOT_SET: 0,
  MAXDEPTH: 17
};

/**
 * @return {proto.aurum.ReqFindElement.MaxdepthCase}
 */
proto.aurum.ReqFindElement.prototype.getMaxdepthCase = function() {
  return /** @type {proto.aurum.ReqFindElement.MaxdepthCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[16]));
};

/**
 * @enum {number}
 */
proto.aurum.ReqFindElement.PackagenameCase = {
  _PACKAGENAME_NOT_SET: 0,
  PACKAGENAME: 18
};

/**
 * @return {proto.aurum.ReqFindElement.PackagenameCase}
 */
proto.aurum.ReqFindElement.prototype.getPackagenameCase = function() {
  return /** @type {proto.aurum.ReqFindElement.PackagenameCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqFindElement.oneofGroups_[17]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqFindElement.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqFindElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqFindElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqFindElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    automationid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    textfield: jspb.Message.getFieldWithDefault(msg, 3, ""),
    widgettype: jspb.Message.getFieldWithDefault(msg, 4, ""),
    widgetstyle: jspb.Message.getFieldWithDefault(msg, 5, ""),
    ischecked: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    ischeckable: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    isclickable: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    isenabled: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    isfocused: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    isfocusable: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    isscrollable: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    isselected: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    isshowing: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    isactive: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    mindepth: jspb.Message.getFieldWithDefault(msg, 16, 0),
    maxdepth: jspb.Message.getFieldWithDefault(msg, 17, 0),
    packagename: jspb.Message.getFieldWithDefault(msg, 18, ""),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.aurum.ReqFindElement.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqFindElement}
 */
proto.aurum.ReqFindElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqFindElement;
  return proto.aurum.ReqFindElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqFindElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqFindElement}
 */
proto.aurum.ReqFindElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAutomationid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextfield(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWidgettype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWidgetstyle(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIschecked(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIscheckable(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsclickable(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsenabled(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfocused(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfocusable(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsscrollable(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsselected(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsshowing(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsactive(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMindepth(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxdepth(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackagename(value);
      break;
    case 19:
      var value = new proto.aurum.ReqFindElement;
      reader.readMessage(value,proto.aurum.ReqFindElement.deserializeBinaryFromReader);
      msg.addChildren(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqFindElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqFindElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqFindElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqFindElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.aurum.ReqFindElement.serializeBinaryToWriter
    );
  }
};


/**
 * optional string elementId = 1;
 * @return {string}
 */
proto.aurum.ReqFindElement.prototype.getElementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setElementid = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.aurum.ReqFindElement.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearElementid = function() {
  return jspb.Message.setOneofField(this, 1, proto.aurum.ReqFindElement.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasElementid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string automationId = 2;
 * @return {string}
 */
proto.aurum.ReqFindElement.prototype.getAutomationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setAutomationid = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.aurum.ReqFindElement.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearAutomationid = function() {
  return jspb.Message.setOneofField(this, 2, proto.aurum.ReqFindElement.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasAutomationid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string textField = 3;
 * @return {string}
 */
proto.aurum.ReqFindElement.prototype.getTextfield = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setTextfield = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.aurum.ReqFindElement.oneofGroups_[2], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearTextfield = function() {
  return jspb.Message.setOneofField(this, 3, proto.aurum.ReqFindElement.oneofGroups_[2], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasTextfield = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string widgetType = 4;
 * @return {string}
 */
proto.aurum.ReqFindElement.prototype.getWidgettype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setWidgettype = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.aurum.ReqFindElement.oneofGroups_[3], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearWidgettype = function() {
  return jspb.Message.setOneofField(this, 4, proto.aurum.ReqFindElement.oneofGroups_[3], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasWidgettype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string widgetStyle = 5;
 * @return {string}
 */
proto.aurum.ReqFindElement.prototype.getWidgetstyle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setWidgetstyle = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.aurum.ReqFindElement.oneofGroups_[4], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearWidgetstyle = function() {
  return jspb.Message.setOneofField(this, 5, proto.aurum.ReqFindElement.oneofGroups_[4], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasWidgetstyle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool isChecked = 6;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIschecked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIschecked = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.aurum.ReqFindElement.oneofGroups_[5], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIschecked = function() {
  return jspb.Message.setOneofField(this, 6, proto.aurum.ReqFindElement.oneofGroups_[5], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIschecked = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool isCheckable = 7;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIscheckable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIscheckable = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.aurum.ReqFindElement.oneofGroups_[6], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIscheckable = function() {
  return jspb.Message.setOneofField(this, 7, proto.aurum.ReqFindElement.oneofGroups_[6], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIscheckable = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool isClickable = 8;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIsclickable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIsclickable = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.aurum.ReqFindElement.oneofGroups_[7], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIsclickable = function() {
  return jspb.Message.setOneofField(this, 8, proto.aurum.ReqFindElement.oneofGroups_[7], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIsclickable = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool isEnabled = 9;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIsenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIsenabled = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.aurum.ReqFindElement.oneofGroups_[8], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIsenabled = function() {
  return jspb.Message.setOneofField(this, 9, proto.aurum.ReqFindElement.oneofGroups_[8], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIsenabled = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool isFocused = 10;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIsfocused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIsfocused = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.aurum.ReqFindElement.oneofGroups_[9], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIsfocused = function() {
  return jspb.Message.setOneofField(this, 10, proto.aurum.ReqFindElement.oneofGroups_[9], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIsfocused = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool isFocusable = 11;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIsfocusable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIsfocusable = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.aurum.ReqFindElement.oneofGroups_[10], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIsfocusable = function() {
  return jspb.Message.setOneofField(this, 11, proto.aurum.ReqFindElement.oneofGroups_[10], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIsfocusable = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool isScrollable = 12;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIsscrollable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIsscrollable = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.aurum.ReqFindElement.oneofGroups_[11], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIsscrollable = function() {
  return jspb.Message.setOneofField(this, 12, proto.aurum.ReqFindElement.oneofGroups_[11], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIsscrollable = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool isSelected = 13;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIsselected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIsselected = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.aurum.ReqFindElement.oneofGroups_[12], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIsselected = function() {
  return jspb.Message.setOneofField(this, 13, proto.aurum.ReqFindElement.oneofGroups_[12], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIsselected = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool isShowing = 14;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIsshowing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIsshowing = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.aurum.ReqFindElement.oneofGroups_[13], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIsshowing = function() {
  return jspb.Message.setOneofField(this, 14, proto.aurum.ReqFindElement.oneofGroups_[13], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIsshowing = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool isActive = 15;
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.getIsactive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setIsactive = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.aurum.ReqFindElement.oneofGroups_[14], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearIsactive = function() {
  return jspb.Message.setOneofField(this, 15, proto.aurum.ReqFindElement.oneofGroups_[14], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasIsactive = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional int32 minDepth = 16;
 * @return {number}
 */
proto.aurum.ReqFindElement.prototype.getMindepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setMindepth = function(value) {
  return jspb.Message.setOneofField(this, 16, proto.aurum.ReqFindElement.oneofGroups_[15], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearMindepth = function() {
  return jspb.Message.setOneofField(this, 16, proto.aurum.ReqFindElement.oneofGroups_[15], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasMindepth = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int32 maxDepth = 17;
 * @return {number}
 */
proto.aurum.ReqFindElement.prototype.getMaxdepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setMaxdepth = function(value) {
  return jspb.Message.setOneofField(this, 17, proto.aurum.ReqFindElement.oneofGroups_[16], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearMaxdepth = function() {
  return jspb.Message.setOneofField(this, 17, proto.aurum.ReqFindElement.oneofGroups_[16], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasMaxdepth = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string packageName = 18;
 * @return {string}
 */
proto.aurum.ReqFindElement.prototype.getPackagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.setPackagename = function(value) {
  return jspb.Message.setOneofField(this, 18, proto.aurum.ReqFindElement.oneofGroups_[17], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearPackagename = function() {
  return jspb.Message.setOneofField(this, 18, proto.aurum.ReqFindElement.oneofGroups_[17], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFindElement.prototype.hasPackagename = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * repeated ReqFindElement children = 19;
 * @return {!Array<!proto.aurum.ReqFindElement>}
 */
proto.aurum.ReqFindElement.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.aurum.ReqFindElement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.aurum.ReqFindElement, 19));
};


/**
 * @param {!Array<!proto.aurum.ReqFindElement>} value
 * @return {!proto.aurum.ReqFindElement} returns this
*/
proto.aurum.ReqFindElement.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.aurum.ReqFindElement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aurum.ReqFindElement}
 */
proto.aurum.ReqFindElement.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.aurum.ReqFindElement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aurum.ReqFindElement} returns this
 */
proto.aurum.ReqFindElement.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aurum.RspFindElement.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspFindElement.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspFindElement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspFindElement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspFindElement.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.aurum.Element.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspFindElement}
 */
proto.aurum.RspFindElement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspFindElement;
  return proto.aurum.RspFindElement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspFindElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspFindElement}
 */
proto.aurum.RspFindElement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.aurum.Element;
      reader.readMessage(value,proto.aurum.Element.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspFindElement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspFindElement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspFindElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspFindElement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.aurum.Element.serializeBinaryToWriter
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspFindElement.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspFindElement} returns this
 */
proto.aurum.RspFindElement.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated Element elements = 2;
 * @return {!Array<!proto.aurum.Element>}
 */
proto.aurum.RspFindElement.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.aurum.Element>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.aurum.Element, 2));
};


/**
 * @param {!Array<!proto.aurum.Element>} value
 * @return {!proto.aurum.RspFindElement} returns this
*/
proto.aurum.RspFindElement.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.aurum.Element=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aurum.Element}
 */
proto.aurum.RspFindElement.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.aurum.Element, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aurum.RspFindElement} returns this
 */
proto.aurum.RspFindElement.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqGetValue.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqGetValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqGetValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqGetValue}
 */
proto.aurum.ReqGetValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqGetValue;
  return proto.aurum.ReqGetValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqGetValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqGetValue}
 */
proto.aurum.ReqGetValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqGetValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqGetValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqGetValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string elementId = 1;
 * @return {string}
 */
proto.aurum.ReqGetValue.prototype.getElementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqGetValue} returns this
 */
proto.aurum.ReqGetValue.prototype.setElementid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aurum.RspGetValue.oneofGroups_ = [[3,4,5,6]];

/**
 * @enum {number}
 */
proto.aurum.RspGetValue.ParamsCase = {
  PARAMS_NOT_SET: 0,
  STRINGVALUE: 3,
  INTVALUE: 4,
  DOUBLEVALUE: 5,
  BOOLVALUE: 6
};

/**
 * @return {proto.aurum.RspGetValue.ParamsCase}
 */
proto.aurum.RspGetValue.prototype.getParamsCase = function() {
  return /** @type {proto.aurum.RspGetValue.ParamsCase} */(jspb.Message.computeOneofCase(this, proto.aurum.RspGetValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspGetValue.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspGetValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspGetValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intvalue: jspb.Message.getFieldWithDefault(msg, 4, 0),
    doublevalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspGetValue}
 */
proto.aurum.RspGetValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspGetValue;
  return proto.aurum.RspGetValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspGetValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspGetValue}
 */
proto.aurum.RspGetValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.aurum.ParamType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntvalue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoublevalue(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspGetValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspGetValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspGetValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspGetValue.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ParamType type = 2;
 * @return {!proto.aurum.ParamType}
 */
proto.aurum.RspGetValue.prototype.getType = function() {
  return /** @type {!proto.aurum.ParamType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.aurum.ParamType} value
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string stringValue = 3;
 * @return {string}
 */
proto.aurum.RspGetValue.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.setStringvalue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.aurum.RspGetValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.clearStringvalue = function() {
  return jspb.Message.setOneofField(this, 3, proto.aurum.RspGetValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.RspGetValue.prototype.hasStringvalue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 intValue = 4;
 * @return {number}
 */
proto.aurum.RspGetValue.prototype.getIntvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.setIntvalue = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.aurum.RspGetValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.clearIntvalue = function() {
  return jspb.Message.setOneofField(this, 4, proto.aurum.RspGetValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.RspGetValue.prototype.hasIntvalue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double doubleValue = 5;
 * @return {number}
 */
proto.aurum.RspGetValue.prototype.getDoublevalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.setDoublevalue = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.aurum.RspGetValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.clearDoublevalue = function() {
  return jspb.Message.setOneofField(this, 5, proto.aurum.RspGetValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.RspGetValue.prototype.hasDoublevalue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool boolValue = 6;
 * @return {boolean}
 */
proto.aurum.RspGetValue.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.setBoolvalue = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.aurum.RspGetValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.RspGetValue} returns this
 */
proto.aurum.RspGetValue.prototype.clearBoolvalue = function() {
  return jspb.Message.setOneofField(this, 6, proto.aurum.RspGetValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.RspGetValue.prototype.hasBoolvalue = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aurum.ReqSetValue.oneofGroups_ = [[3,4,5,6]];

/**
 * @enum {number}
 */
proto.aurum.ReqSetValue.ParamsCase = {
  PARAMS_NOT_SET: 0,
  STRINGVALUE: 3,
  INTVALUE: 4,
  DOUBLEVALUE: 5,
  BOOLVALUE: 6
};

/**
 * @return {proto.aurum.ReqSetValue.ParamsCase}
 */
proto.aurum.ReqSetValue.prototype.getParamsCase = function() {
  return /** @type {proto.aurum.ReqSetValue.ParamsCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqSetValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqSetValue.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqSetValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqSetValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqSetValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intvalue: jspb.Message.getFieldWithDefault(msg, 4, 0),
    doublevalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqSetValue}
 */
proto.aurum.ReqSetValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqSetValue;
  return proto.aurum.ReqSetValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqSetValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqSetValue}
 */
proto.aurum.ReqSetValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementid(value);
      break;
    case 2:
      var value = /** @type {!proto.aurum.ParamType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntvalue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoublevalue(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqSetValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqSetValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqSetValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqSetValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string elementId = 1;
 * @return {string}
 */
proto.aurum.ReqSetValue.prototype.getElementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.setElementid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ParamType type = 2;
 * @return {!proto.aurum.ParamType}
 */
proto.aurum.ReqSetValue.prototype.getType = function() {
  return /** @type {!proto.aurum.ParamType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.aurum.ParamType} value
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string stringValue = 3;
 * @return {string}
 */
proto.aurum.ReqSetValue.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.setStringvalue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.aurum.ReqSetValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.clearStringvalue = function() {
  return jspb.Message.setOneofField(this, 3, proto.aurum.ReqSetValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqSetValue.prototype.hasStringvalue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 intValue = 4;
 * @return {number}
 */
proto.aurum.ReqSetValue.prototype.getIntvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.setIntvalue = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.aurum.ReqSetValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.clearIntvalue = function() {
  return jspb.Message.setOneofField(this, 4, proto.aurum.ReqSetValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqSetValue.prototype.hasIntvalue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double doubleValue = 5;
 * @return {number}
 */
proto.aurum.ReqSetValue.prototype.getDoublevalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.setDoublevalue = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.aurum.ReqSetValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.clearDoublevalue = function() {
  return jspb.Message.setOneofField(this, 5, proto.aurum.ReqSetValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqSetValue.prototype.hasDoublevalue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool boolValue = 6;
 * @return {boolean}
 */
proto.aurum.ReqSetValue.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.setBoolvalue = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.aurum.ReqSetValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqSetValue} returns this
 */
proto.aurum.ReqSetValue.prototype.clearBoolvalue = function() {
  return jspb.Message.setOneofField(this, 6, proto.aurum.ReqSetValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqSetValue.prototype.hasBoolvalue = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspSetValue.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspSetValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspSetValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspSetValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspSetValue}
 */
proto.aurum.RspSetValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspSetValue;
  return proto.aurum.RspSetValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspSetValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspSetValue}
 */
proto.aurum.RspSetValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspSetValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspSetValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspSetValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspSetValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspSetValue.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspSetValue} returns this
 */
proto.aurum.RspSetValue.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqGetSize.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqGetSize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqGetSize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetSize.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    elementid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqGetSize}
 */
proto.aurum.ReqGetSize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqGetSize;
  return proto.aurum.ReqGetSize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqGetSize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqGetSize}
 */
proto.aurum.ReqGetSize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.ReqGetSize.CoordType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqGetSize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqGetSize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqGetSize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetSize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getElementid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.aurum.ReqGetSize.CoordType = {
  SCREEN: 0,
  WINDOW: 1
};

/**
 * optional CoordType type = 1;
 * @return {!proto.aurum.ReqGetSize.CoordType}
 */
proto.aurum.ReqGetSize.prototype.getType = function() {
  return /** @type {!proto.aurum.ReqGetSize.CoordType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.ReqGetSize.CoordType} value
 * @return {!proto.aurum.ReqGetSize} returns this
 */
proto.aurum.ReqGetSize.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string elementId = 2;
 * @return {string}
 */
proto.aurum.ReqGetSize.prototype.getElementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqGetSize} returns this
 */
proto.aurum.ReqGetSize.prototype.setElementid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspGetSize.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspGetSize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspGetSize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetSize.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    size: (f = msg.getSize()) && proto.aurum.Rect.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspGetSize}
 */
proto.aurum.RspGetSize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspGetSize;
  return proto.aurum.RspGetSize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspGetSize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspGetSize}
 */
proto.aurum.RspGetSize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.aurum.Rect;
      reader.readMessage(value,proto.aurum.Rect.deserializeBinaryFromReader);
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspGetSize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspGetSize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspGetSize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetSize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.aurum.Rect.serializeBinaryToWriter
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspGetSize.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspGetSize} returns this
 */
proto.aurum.RspGetSize.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Rect size = 2;
 * @return {?proto.aurum.Rect}
 */
proto.aurum.RspGetSize.prototype.getSize = function() {
  return /** @type{?proto.aurum.Rect} */ (
    jspb.Message.getWrapperField(this, proto.aurum.Rect, 2));
};


/**
 * @param {?proto.aurum.Rect|undefined} value
 * @return {!proto.aurum.RspGetSize} returns this
*/
proto.aurum.RspGetSize.prototype.setSize = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aurum.RspGetSize} returns this
 */
proto.aurum.RspGetSize.prototype.clearSize = function() {
  return this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.RspGetSize.prototype.hasSize = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqClear.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqClear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqClear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqClear.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqClear}
 */
proto.aurum.ReqClear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqClear;
  return proto.aurum.ReqClear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqClear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqClear}
 */
proto.aurum.ReqClear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqClear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqClear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqClear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqClear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string elementId = 1;
 * @return {string}
 */
proto.aurum.ReqClear.prototype.getElementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqClear} returns this
 */
proto.aurum.ReqClear.prototype.setElementid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspClear.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspClear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspClear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspClear.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspClear}
 */
proto.aurum.RspClear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspClear;
  return proto.aurum.RspClear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspClear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspClear}
 */
proto.aurum.RspClear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspClear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspClear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspClear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspClear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspClear.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspClear} returns this
 */
proto.aurum.RspClear.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqGetAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqGetAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqGetAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attribute: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqGetAttribute}
 */
proto.aurum.ReqGetAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqGetAttribute;
  return proto.aurum.ReqGetAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqGetAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqGetAttribute}
 */
proto.aurum.ReqGetAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementid(value);
      break;
    case 2:
      var value = /** @type {!proto.aurum.ReqGetAttribute.RequestType} */ (reader.readEnum());
      msg.setAttribute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqGetAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqGetAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqGetAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttribute();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.aurum.ReqGetAttribute.RequestType = {
  VISIBLE: 0,
  FOCUSABLE: 1,
  FOCUSED: 2,
  ENABLED: 3,
  CLICKABLE: 4,
  SCROLLABLE: 5,
  CHECKABLE: 6,
  CHECKED: 7,
  SELECTED: 8,
  SELECTABLE: 9,
  SHOWING: 10,
  ACTIVE: 11
};

/**
 * optional string elementId = 1;
 * @return {string}
 */
proto.aurum.ReqGetAttribute.prototype.getElementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqGetAttribute} returns this
 */
proto.aurum.ReqGetAttribute.prototype.setElementid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RequestType attribute = 2;
 * @return {!proto.aurum.ReqGetAttribute.RequestType}
 */
proto.aurum.ReqGetAttribute.prototype.getAttribute = function() {
  return /** @type {!proto.aurum.ReqGetAttribute.RequestType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.aurum.ReqGetAttribute.RequestType} value
 * @return {!proto.aurum.ReqGetAttribute} returns this
 */
proto.aurum.ReqGetAttribute.prototype.setAttribute = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspGetAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspGetAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspGetAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspGetAttribute}
 */
proto.aurum.RspGetAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspGetAttribute;
  return proto.aurum.RspGetAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspGetAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspGetAttribute}
 */
proto.aurum.RspGetAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspGetAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspGetAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspGetAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBoolvalue();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspGetAttribute.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspGetAttribute} returns this
 */
proto.aurum.RspGetAttribute.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool boolValue = 2;
 * @return {boolean}
 */
proto.aurum.RspGetAttribute.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.RspGetAttribute} returns this
 */
proto.aurum.RspGetAttribute.prototype.setBoolvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.aurum.ReqClick.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.aurum.ReqClick.ParamsCase = {
  PARAMS_NOT_SET: 0,
  ELEMENTID: 2,
  COORDINATION: 3
};

/**
 * @return {proto.aurum.ReqClick.ParamsCase}
 */
proto.aurum.ReqClick.prototype.getParamsCase = function() {
  return /** @type {proto.aurum.ReqClick.ParamsCase} */(jspb.Message.computeOneofCase(this, proto.aurum.ReqClick.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqClick.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    elementid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coordination: (f = msg.getCoordination()) && proto.aurum.Point.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqClick}
 */
proto.aurum.ReqClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqClick;
  return proto.aurum.ReqClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqClick}
 */
proto.aurum.ReqClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.ReqClick.RequestType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementid(value);
      break;
    case 3:
      var value = new proto.aurum.Point;
      reader.readMessage(value,proto.aurum.Point.deserializeBinaryFromReader);
      msg.setCoordination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCoordination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.aurum.Point.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.aurum.ReqClick.RequestType = {
  ELEMENTID: 0,
  COORD: 1,
  ATSPI: 2
};

/**
 * optional RequestType type = 1;
 * @return {!proto.aurum.ReqClick.RequestType}
 */
proto.aurum.ReqClick.prototype.getType = function() {
  return /** @type {!proto.aurum.ReqClick.RequestType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.ReqClick.RequestType} value
 * @return {!proto.aurum.ReqClick} returns this
 */
proto.aurum.ReqClick.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string elementId = 2;
 * @return {string}
 */
proto.aurum.ReqClick.prototype.getElementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqClick} returns this
 */
proto.aurum.ReqClick.prototype.setElementid = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.aurum.ReqClick.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aurum.ReqClick} returns this
 */
proto.aurum.ReqClick.prototype.clearElementid = function() {
  return jspb.Message.setOneofField(this, 2, proto.aurum.ReqClick.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqClick.prototype.hasElementid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Point coordination = 3;
 * @return {?proto.aurum.Point}
 */
proto.aurum.ReqClick.prototype.getCoordination = function() {
  return /** @type{?proto.aurum.Point} */ (
    jspb.Message.getWrapperField(this, proto.aurum.Point, 3));
};


/**
 * @param {?proto.aurum.Point|undefined} value
 * @return {!proto.aurum.ReqClick} returns this
*/
proto.aurum.ReqClick.prototype.setCoordination = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.aurum.ReqClick.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aurum.ReqClick} returns this
 */
proto.aurum.ReqClick.prototype.clearCoordination = function() {
  return this.setCoordination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqClick.prototype.hasCoordination = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspClick.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspClick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspClick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspClick.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspClick}
 */
proto.aurum.RspClick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspClick;
  return proto.aurum.RspClick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspClick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspClick}
 */
proto.aurum.RspClick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspClick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspClick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspClick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspClick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspClick.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspClick} returns this
 */
proto.aurum.RspClick.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqFlick.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqFlick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqFlick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqFlick.toObject = function(includeInstance, msg) {
  var f, obj = {
    startpoint: (f = msg.getStartpoint()) && proto.aurum.Point.toObject(includeInstance, f),
    endpoint: (f = msg.getEndpoint()) && proto.aurum.Point.toObject(includeInstance, f),
    durationms: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqFlick}
 */
proto.aurum.ReqFlick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqFlick;
  return proto.aurum.ReqFlick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqFlick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqFlick}
 */
proto.aurum.ReqFlick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.aurum.Point;
      reader.readMessage(value,proto.aurum.Point.deserializeBinaryFromReader);
      msg.setStartpoint(value);
      break;
    case 2:
      var value = new proto.aurum.Point;
      reader.readMessage(value,proto.aurum.Point.deserializeBinaryFromReader);
      msg.setEndpoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDurationms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqFlick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqFlick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqFlick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqFlick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartpoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.aurum.Point.serializeBinaryToWriter
    );
  }
  f = message.getEndpoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.aurum.Point.serializeBinaryToWriter
    );
  }
  f = message.getDurationms();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional Point startPoint = 1;
 * @return {?proto.aurum.Point}
 */
proto.aurum.ReqFlick.prototype.getStartpoint = function() {
  return /** @type{?proto.aurum.Point} */ (
    jspb.Message.getWrapperField(this, proto.aurum.Point, 1));
};


/**
 * @param {?proto.aurum.Point|undefined} value
 * @return {!proto.aurum.ReqFlick} returns this
*/
proto.aurum.ReqFlick.prototype.setStartpoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aurum.ReqFlick} returns this
 */
proto.aurum.ReqFlick.prototype.clearStartpoint = function() {
  return this.setStartpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFlick.prototype.hasStartpoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Point endPoint = 2;
 * @return {?proto.aurum.Point}
 */
proto.aurum.ReqFlick.prototype.getEndpoint = function() {
  return /** @type{?proto.aurum.Point} */ (
    jspb.Message.getWrapperField(this, proto.aurum.Point, 2));
};


/**
 * @param {?proto.aurum.Point|undefined} value
 * @return {!proto.aurum.ReqFlick} returns this
*/
proto.aurum.ReqFlick.prototype.setEndpoint = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aurum.ReqFlick} returns this
 */
proto.aurum.ReqFlick.prototype.clearEndpoint = function() {
  return this.setEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqFlick.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 durationMs = 3;
 * @return {number}
 */
proto.aurum.ReqFlick.prototype.getDurationms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.ReqFlick} returns this
 */
proto.aurum.ReqFlick.prototype.setDurationms = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspFlick.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspFlick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspFlick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspFlick.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspFlick}
 */
proto.aurum.RspFlick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspFlick;
  return proto.aurum.RspFlick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspFlick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspFlick}
 */
proto.aurum.RspFlick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspFlick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspFlick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspFlick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspFlick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspFlick.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspFlick} returns this
 */
proto.aurum.RspFlick.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqTouchDown.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqTouchDown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqTouchDown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqTouchDown.toObject = function(includeInstance, msg) {
  var f, obj = {
    coordination: (f = msg.getCoordination()) && proto.aurum.Point.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqTouchDown}
 */
proto.aurum.ReqTouchDown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqTouchDown;
  return proto.aurum.ReqTouchDown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqTouchDown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqTouchDown}
 */
proto.aurum.ReqTouchDown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.aurum.Point;
      reader.readMessage(value,proto.aurum.Point.deserializeBinaryFromReader);
      msg.setCoordination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqTouchDown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqTouchDown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqTouchDown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqTouchDown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoordination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.aurum.Point.serializeBinaryToWriter
    );
  }
};


/**
 * optional Point coordination = 1;
 * @return {?proto.aurum.Point}
 */
proto.aurum.ReqTouchDown.prototype.getCoordination = function() {
  return /** @type{?proto.aurum.Point} */ (
    jspb.Message.getWrapperField(this, proto.aurum.Point, 1));
};


/**
 * @param {?proto.aurum.Point|undefined} value
 * @return {!proto.aurum.ReqTouchDown} returns this
*/
proto.aurum.ReqTouchDown.prototype.setCoordination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aurum.ReqTouchDown} returns this
 */
proto.aurum.ReqTouchDown.prototype.clearCoordination = function() {
  return this.setCoordination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqTouchDown.prototype.hasCoordination = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspTouchDown.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspTouchDown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspTouchDown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspTouchDown.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    seqid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspTouchDown}
 */
proto.aurum.RspTouchDown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspTouchDown;
  return proto.aurum.RspTouchDown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspTouchDown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspTouchDown}
 */
proto.aurum.RspTouchDown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeqid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspTouchDown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspTouchDown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspTouchDown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspTouchDown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSeqid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspTouchDown.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspTouchDown} returns this
 */
proto.aurum.RspTouchDown.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 seqId = 2;
 * @return {number}
 */
proto.aurum.RspTouchDown.prototype.getSeqid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.RspTouchDown} returns this
 */
proto.aurum.RspTouchDown.prototype.setSeqid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqTouchMove.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqTouchMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqTouchMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqTouchMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    seqid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    coordination: (f = msg.getCoordination()) && proto.aurum.Point.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqTouchMove}
 */
proto.aurum.ReqTouchMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqTouchMove;
  return proto.aurum.ReqTouchMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqTouchMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqTouchMove}
 */
proto.aurum.ReqTouchMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeqid(value);
      break;
    case 2:
      var value = new proto.aurum.Point;
      reader.readMessage(value,proto.aurum.Point.deserializeBinaryFromReader);
      msg.setCoordination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqTouchMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqTouchMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqTouchMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqTouchMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeqid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCoordination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.aurum.Point.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 seqId = 1;
 * @return {number}
 */
proto.aurum.ReqTouchMove.prototype.getSeqid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.ReqTouchMove} returns this
 */
proto.aurum.ReqTouchMove.prototype.setSeqid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Point coordination = 2;
 * @return {?proto.aurum.Point}
 */
proto.aurum.ReqTouchMove.prototype.getCoordination = function() {
  return /** @type{?proto.aurum.Point} */ (
    jspb.Message.getWrapperField(this, proto.aurum.Point, 2));
};


/**
 * @param {?proto.aurum.Point|undefined} value
 * @return {!proto.aurum.ReqTouchMove} returns this
*/
proto.aurum.ReqTouchMove.prototype.setCoordination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aurum.ReqTouchMove} returns this
 */
proto.aurum.ReqTouchMove.prototype.clearCoordination = function() {
  return this.setCoordination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqTouchMove.prototype.hasCoordination = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspTouchMove.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspTouchMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspTouchMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspTouchMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspTouchMove}
 */
proto.aurum.RspTouchMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspTouchMove;
  return proto.aurum.RspTouchMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspTouchMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspTouchMove}
 */
proto.aurum.RspTouchMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspTouchMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspTouchMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspTouchMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspTouchMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspTouchMove.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspTouchMove} returns this
 */
proto.aurum.RspTouchMove.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqTouchUp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqTouchUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqTouchUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqTouchUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    seqid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    coordination: (f = msg.getCoordination()) && proto.aurum.Point.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqTouchUp}
 */
proto.aurum.ReqTouchUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqTouchUp;
  return proto.aurum.ReqTouchUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqTouchUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqTouchUp}
 */
proto.aurum.ReqTouchUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeqid(value);
      break;
    case 2:
      var value = new proto.aurum.Point;
      reader.readMessage(value,proto.aurum.Point.deserializeBinaryFromReader);
      msg.setCoordination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqTouchUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqTouchUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqTouchUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqTouchUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeqid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCoordination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.aurum.Point.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 seqId = 1;
 * @return {number}
 */
proto.aurum.ReqTouchUp.prototype.getSeqid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.ReqTouchUp} returns this
 */
proto.aurum.ReqTouchUp.prototype.setSeqid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Point coordination = 2;
 * @return {?proto.aurum.Point}
 */
proto.aurum.ReqTouchUp.prototype.getCoordination = function() {
  return /** @type{?proto.aurum.Point} */ (
    jspb.Message.getWrapperField(this, proto.aurum.Point, 2));
};


/**
 * @param {?proto.aurum.Point|undefined} value
 * @return {!proto.aurum.ReqTouchUp} returns this
*/
proto.aurum.ReqTouchUp.prototype.setCoordination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aurum.ReqTouchUp} returns this
 */
proto.aurum.ReqTouchUp.prototype.clearCoordination = function() {
  return this.setCoordination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aurum.ReqTouchUp.prototype.hasCoordination = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspTouchUp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspTouchUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspTouchUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspTouchUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspTouchUp}
 */
proto.aurum.RspTouchUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspTouchUp;
  return proto.aurum.RspTouchUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspTouchUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspTouchUp}
 */
proto.aurum.RspTouchUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspTouchUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspTouchUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspTouchUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspTouchUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspTouchUp.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspTouchUp} returns this
 */
proto.aurum.RspTouchUp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqInstallApp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqInstallApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqInstallApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqInstallApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_package: msg.getPackage_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqInstallApp}
 */
proto.aurum.ReqInstallApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqInstallApp;
  return proto.aurum.ReqInstallApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqInstallApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqInstallApp}
 */
proto.aurum.ReqInstallApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPackage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqInstallApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqInstallApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqInstallApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqInstallApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes package = 1;
 * @return {!(string|Uint8Array)}
 */
proto.aurum.ReqInstallApp.prototype.getPackage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes package = 1;
 * This is a type-conversion wrapper around `getPackage()`
 * @return {string}
 */
proto.aurum.ReqInstallApp.prototype.getPackage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPackage()));
};


/**
 * optional bytes package = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPackage()`
 * @return {!Uint8Array}
 */
proto.aurum.ReqInstallApp.prototype.getPackage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPackage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.aurum.ReqInstallApp} returns this
 */
proto.aurum.ReqInstallApp.prototype.setPackage = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspInstallApp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspInstallApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspInstallApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspInstallApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspInstallApp}
 */
proto.aurum.RspInstallApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspInstallApp;
  return proto.aurum.RspInstallApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspInstallApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspInstallApp}
 */
proto.aurum.RspInstallApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspInstallApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspInstallApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspInstallApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspInstallApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspInstallApp.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspInstallApp} returns this
 */
proto.aurum.RspInstallApp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqRemoveApp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqRemoveApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqRemoveApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqRemoveApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    packagename: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqRemoveApp}
 */
proto.aurum.ReqRemoveApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqRemoveApp;
  return proto.aurum.ReqRemoveApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqRemoveApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqRemoveApp}
 */
proto.aurum.ReqRemoveApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackagename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqRemoveApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqRemoveApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqRemoveApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqRemoveApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackagename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string packageName = 1;
 * @return {string}
 */
proto.aurum.ReqRemoveApp.prototype.getPackagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqRemoveApp} returns this
 */
proto.aurum.ReqRemoveApp.prototype.setPackagename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspRemoveApp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspRemoveApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspRemoveApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspRemoveApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspRemoveApp}
 */
proto.aurum.RspRemoveApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspRemoveApp;
  return proto.aurum.RspRemoveApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspRemoveApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspRemoveApp}
 */
proto.aurum.RspRemoveApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspRemoveApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspRemoveApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspRemoveApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspRemoveApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspRemoveApp.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspRemoveApp} returns this
 */
proto.aurum.RspRemoveApp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqGetAppInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqGetAppInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqGetAppInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetAppInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    packagename: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqGetAppInfo}
 */
proto.aurum.ReqGetAppInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqGetAppInfo;
  return proto.aurum.ReqGetAppInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqGetAppInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqGetAppInfo}
 */
proto.aurum.ReqGetAppInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackagename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqGetAppInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqGetAppInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqGetAppInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetAppInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackagename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string packageName = 1;
 * @return {string}
 */
proto.aurum.ReqGetAppInfo.prototype.getPackagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqGetAppInfo} returns this
 */
proto.aurum.ReqGetAppInfo.prototype.setPackagename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspGetAppInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspGetAppInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspGetAppInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetAppInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isinstalled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isrunning: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isfocused: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspGetAppInfo}
 */
proto.aurum.RspGetAppInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspGetAppInfo;
  return proto.aurum.RspGetAppInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspGetAppInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspGetAppInfo}
 */
proto.aurum.RspGetAppInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsinstalled(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsrunning(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfocused(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspGetAppInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspGetAppInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspGetAppInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetAppInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIsinstalled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsrunning();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsfocused();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspGetAppInfo.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspGetAppInfo} returns this
 */
proto.aurum.RspGetAppInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool isInstalled = 2;
 * @return {boolean}
 */
proto.aurum.RspGetAppInfo.prototype.getIsinstalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.RspGetAppInfo} returns this
 */
proto.aurum.RspGetAppInfo.prototype.setIsinstalled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool isRunning = 3;
 * @return {boolean}
 */
proto.aurum.RspGetAppInfo.prototype.getIsrunning = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.RspGetAppInfo} returns this
 */
proto.aurum.RspGetAppInfo.prototype.setIsrunning = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool isFocused = 4;
 * @return {boolean}
 */
proto.aurum.RspGetAppInfo.prototype.getIsfocused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aurum.RspGetAppInfo} returns this
 */
proto.aurum.RspGetAppInfo.prototype.setIsfocused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aurum.ReqLaunchApp.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqLaunchApp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqLaunchApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqLaunchApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqLaunchApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    packagename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.aurum.LaunchData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqLaunchApp}
 */
proto.aurum.ReqLaunchApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqLaunchApp;
  return proto.aurum.ReqLaunchApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqLaunchApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqLaunchApp}
 */
proto.aurum.ReqLaunchApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackagename(value);
      break;
    case 2:
      var value = new proto.aurum.LaunchData;
      reader.readMessage(value,proto.aurum.LaunchData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqLaunchApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqLaunchApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqLaunchApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqLaunchApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackagename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.aurum.LaunchData.serializeBinaryToWriter
    );
  }
};


/**
 * optional string packageName = 1;
 * @return {string}
 */
proto.aurum.ReqLaunchApp.prototype.getPackagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqLaunchApp} returns this
 */
proto.aurum.ReqLaunchApp.prototype.setPackagename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated LaunchData data = 2;
 * @return {!Array<!proto.aurum.LaunchData>}
 */
proto.aurum.ReqLaunchApp.prototype.getDataList = function() {
  return /** @type{!Array<!proto.aurum.LaunchData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.aurum.LaunchData, 2));
};


/**
 * @param {!Array<!proto.aurum.LaunchData>} value
 * @return {!proto.aurum.ReqLaunchApp} returns this
*/
proto.aurum.ReqLaunchApp.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.aurum.LaunchData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aurum.LaunchData}
 */
proto.aurum.ReqLaunchApp.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.aurum.LaunchData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aurum.ReqLaunchApp} returns this
 */
proto.aurum.ReqLaunchApp.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspLaunchApp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspLaunchApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspLaunchApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspLaunchApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspLaunchApp}
 */
proto.aurum.RspLaunchApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspLaunchApp;
  return proto.aurum.RspLaunchApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspLaunchApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspLaunchApp}
 */
proto.aurum.RspLaunchApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspLaunchApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspLaunchApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspLaunchApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspLaunchApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspLaunchApp.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspLaunchApp} returns this
 */
proto.aurum.RspLaunchApp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqCloseApp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqCloseApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqCloseApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqCloseApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    packagename: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqCloseApp}
 */
proto.aurum.ReqCloseApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqCloseApp;
  return proto.aurum.ReqCloseApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqCloseApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqCloseApp}
 */
proto.aurum.ReqCloseApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackagename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqCloseApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqCloseApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqCloseApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqCloseApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackagename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string packageName = 1;
 * @return {string}
 */
proto.aurum.ReqCloseApp.prototype.getPackagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqCloseApp} returns this
 */
proto.aurum.ReqCloseApp.prototype.setPackagename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspCloseApp.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspCloseApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspCloseApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspCloseApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspCloseApp}
 */
proto.aurum.RspCloseApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspCloseApp;
  return proto.aurum.RspCloseApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspCloseApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspCloseApp}
 */
proto.aurum.RspCloseApp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspCloseApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspCloseApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspCloseApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspCloseApp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspCloseApp.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspCloseApp} returns this
 */
proto.aurum.RspCloseApp.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqGetDeviceTime.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqGetDeviceTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqGetDeviceTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetDeviceTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqGetDeviceTime}
 */
proto.aurum.ReqGetDeviceTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqGetDeviceTime;
  return proto.aurum.ReqGetDeviceTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqGetDeviceTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqGetDeviceTime}
 */
proto.aurum.ReqGetDeviceTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.ReqGetDeviceTime.TimeType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqGetDeviceTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqGetDeviceTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqGetDeviceTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetDeviceTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.aurum.ReqGetDeviceTime.TimeType = {
  WALLCLOCK: 0,
  SYSTEM: 1
};

/**
 * optional TimeType type = 1;
 * @return {!proto.aurum.ReqGetDeviceTime.TimeType}
 */
proto.aurum.ReqGetDeviceTime.prototype.getType = function() {
  return /** @type {!proto.aurum.ReqGetDeviceTime.TimeType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.ReqGetDeviceTime.TimeType} value
 * @return {!proto.aurum.ReqGetDeviceTime} returns this
 */
proto.aurum.ReqGetDeviceTime.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspGetDeviceTime.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspGetDeviceTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspGetDeviceTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetDeviceTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timestamputc: jspb.Message.getFieldWithDefault(msg, 2, 0),
    localedatetime: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspGetDeviceTime}
 */
proto.aurum.RspGetDeviceTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspGetDeviceTime;
  return proto.aurum.RspGetDeviceTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspGetDeviceTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspGetDeviceTime}
 */
proto.aurum.RspGetDeviceTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamputc(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocaledatetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspGetDeviceTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspGetDeviceTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspGetDeviceTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetDeviceTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTimestamputc();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLocaledatetime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspGetDeviceTime.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspGetDeviceTime} returns this
 */
proto.aurum.RspGetDeviceTime.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 timestampUTC = 2;
 * @return {number}
 */
proto.aurum.RspGetDeviceTime.prototype.getTimestamputc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.RspGetDeviceTime} returns this
 */
proto.aurum.RspGetDeviceTime.prototype.setTimestamputc = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string localeDatetime = 3;
 * @return {string}
 */
proto.aurum.RspGetDeviceTime.prototype.getLocaledatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.RspGetDeviceTime} returns this
 */
proto.aurum.RspGetDeviceTime.prototype.setLocaledatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqGetLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqGetLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqGetLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetLocation.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqGetLocation}
 */
proto.aurum.ReqGetLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqGetLocation;
  return proto.aurum.ReqGetLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqGetLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqGetLocation}
 */
proto.aurum.ReqGetLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqGetLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqGetLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqGetLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqGetLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspGetLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspGetLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspGetLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alt: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    lat: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspGetLocation}
 */
proto.aurum.RspGetLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspGetLocation;
  return proto.aurum.RspGetLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspGetLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspGetLocation}
 */
proto.aurum.RspGetLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAlt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspGetLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspGetLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspGetLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspGetLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAlt();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLat();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspGetLocation.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspGetLocation} returns this
 */
proto.aurum.RspGetLocation.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double alt = 2;
 * @return {number}
 */
proto.aurum.RspGetLocation.prototype.getAlt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.RspGetLocation} returns this
 */
proto.aurum.RspGetLocation.prototype.setAlt = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double lat = 3;
 * @return {number}
 */
proto.aurum.RspGetLocation.prototype.getLat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.aurum.RspGetLocation} returns this
 */
proto.aurum.RspGetLocation.prototype.setLat = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqKey.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actiontype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    xf86keycode: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqKey}
 */
proto.aurum.ReqKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqKey;
  return proto.aurum.ReqKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqKey}
 */
proto.aurum.ReqKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.ReqKey.KeyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.aurum.ReqKey.KeyActionType} */ (reader.readEnum());
      msg.setActiontype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setXf86keycode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActiontype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getXf86keycode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.aurum.ReqKey.KeyType = {
  BACK: 0,
  MENU: 1,
  HOME: 2,
  VOLUP: 3,
  VOLDOWN: 4,
  POWER: 5,
  XF86: 7,
  WHEELUP: 8,
  WHEELDOWN: 9
};

/**
 * @enum {number}
 */
proto.aurum.ReqKey.KeyActionType = {
  STROKE: 0,
  LONG_STROKE: 1,
  PRESS: 2,
  RELEASE: 3
};

/**
 * optional KeyType type = 1;
 * @return {!proto.aurum.ReqKey.KeyType}
 */
proto.aurum.ReqKey.prototype.getType = function() {
  return /** @type {!proto.aurum.ReqKey.KeyType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.ReqKey.KeyType} value
 * @return {!proto.aurum.ReqKey} returns this
 */
proto.aurum.ReqKey.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional KeyActionType actionType = 2;
 * @return {!proto.aurum.ReqKey.KeyActionType}
 */
proto.aurum.ReqKey.prototype.getActiontype = function() {
  return /** @type {!proto.aurum.ReqKey.KeyActionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.aurum.ReqKey.KeyActionType} value
 * @return {!proto.aurum.ReqKey} returns this
 */
proto.aurum.ReqKey.prototype.setActiontype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string XF86keyCode = 4;
 * @return {string}
 */
proto.aurum.ReqKey.prototype.getXf86keycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqKey} returns this
 */
proto.aurum.ReqKey.prototype.setXf86keycode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspKey.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspKey}
 */
proto.aurum.RspKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspKey;
  return proto.aurum.RspKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspKey}
 */
proto.aurum.RspKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspKey.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspKey} returns this
 */
proto.aurum.RspKey.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqTakeScreenshot.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqTakeScreenshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqTakeScreenshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqTakeScreenshot.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqTakeScreenshot}
 */
proto.aurum.ReqTakeScreenshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqTakeScreenshot;
  return proto.aurum.ReqTakeScreenshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqTakeScreenshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqTakeScreenshot}
 */
proto.aurum.ReqTakeScreenshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqTakeScreenshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqTakeScreenshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqTakeScreenshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqTakeScreenshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspTakeScreenshot.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspTakeScreenshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspTakeScreenshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspTakeScreenshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: msg.getImage_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspTakeScreenshot}
 */
proto.aurum.RspTakeScreenshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspTakeScreenshot;
  return proto.aurum.RspTakeScreenshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspTakeScreenshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspTakeScreenshot}
 */
proto.aurum.RspTakeScreenshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspTakeScreenshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspTakeScreenshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspTakeScreenshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspTakeScreenshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes image = 1;
 * @return {!(string|Uint8Array)}
 */
proto.aurum.RspTakeScreenshot.prototype.getImage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes image = 1;
 * This is a type-conversion wrapper around `getImage()`
 * @return {string}
 */
proto.aurum.RspTakeScreenshot.prototype.getImage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImage()));
};


/**
 * optional bytes image = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImage()`
 * @return {!Uint8Array}
 */
proto.aurum.RspTakeScreenshot.prototype.getImage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.aurum.RspTakeScreenshot} returns this
 */
proto.aurum.RspTakeScreenshot.prototype.setImage = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqEmpty.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqEmpty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqEmpty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqEmpty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqEmpty}
 */
proto.aurum.ReqEmpty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqEmpty;
  return proto.aurum.ReqEmpty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqEmpty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqEmpty}
 */
proto.aurum.ReqEmpty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqEmpty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqEmpty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqEmpty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqEmpty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspEmpty.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspEmpty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspEmpty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspEmpty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspEmpty}
 */
proto.aurum.RspEmpty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspEmpty;
  return proto.aurum.RspEmpty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspEmpty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspEmpty}
 */
proto.aurum.RspEmpty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspEmpty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspEmpty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspEmpty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspEmpty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.ReqDumpObjectTree.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.ReqDumpObjectTree.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.ReqDumpObjectTree} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqDumpObjectTree.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.ReqDumpObjectTree}
 */
proto.aurum.ReqDumpObjectTree.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.ReqDumpObjectTree;
  return proto.aurum.ReqDumpObjectTree.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.ReqDumpObjectTree} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.ReqDumpObjectTree}
 */
proto.aurum.ReqDumpObjectTree.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.ReqDumpObjectTree.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.ReqDumpObjectTree.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.ReqDumpObjectTree} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.ReqDumpObjectTree.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string elementId = 1;
 * @return {string}
 */
proto.aurum.ReqDumpObjectTree.prototype.getElementid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aurum.ReqDumpObjectTree} returns this
 */
proto.aurum.ReqDumpObjectTree.prototype.setElementid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.aurum.RspDumpObjectTree.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aurum.RspDumpObjectTree.prototype.toObject = function(opt_includeInstance) {
  return proto.aurum.RspDumpObjectTree.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aurum.RspDumpObjectTree} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspDumpObjectTree.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rootsList: jspb.Message.toObjectList(msg.getRootsList(),
    proto.aurum.Element.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aurum.RspDumpObjectTree}
 */
proto.aurum.RspDumpObjectTree.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aurum.RspDumpObjectTree;
  return proto.aurum.RspDumpObjectTree.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aurum.RspDumpObjectTree} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aurum.RspDumpObjectTree}
 */
proto.aurum.RspDumpObjectTree.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.aurum.RspStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.aurum.Element;
      reader.readMessage(value,proto.aurum.Element.deserializeBinaryFromReader);
      msg.addRoots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aurum.RspDumpObjectTree.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aurum.RspDumpObjectTree.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aurum.RspDumpObjectTree} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aurum.RspDumpObjectTree.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRootsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.aurum.Element.serializeBinaryToWriter
    );
  }
};


/**
 * optional RspStatus status = 1;
 * @return {!proto.aurum.RspStatus}
 */
proto.aurum.RspDumpObjectTree.prototype.getStatus = function() {
  return /** @type {!proto.aurum.RspStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.aurum.RspStatus} value
 * @return {!proto.aurum.RspDumpObjectTree} returns this
 */
proto.aurum.RspDumpObjectTree.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated Element roots = 2;
 * @return {!Array<!proto.aurum.Element>}
 */
proto.aurum.RspDumpObjectTree.prototype.getRootsList = function() {
  return /** @type{!Array<!proto.aurum.Element>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.aurum.Element, 2));
};


/**
 * @param {!Array<!proto.aurum.Element>} value
 * @return {!proto.aurum.RspDumpObjectTree} returns this
*/
proto.aurum.RspDumpObjectTree.prototype.setRootsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.aurum.Element=} opt_value
 * @param {number=} opt_index
 * @return {!proto.aurum.Element}
 */
proto.aurum.RspDumpObjectTree.prototype.addRoots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.aurum.Element, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.aurum.RspDumpObjectTree} returns this
 */
proto.aurum.RspDumpObjectTree.prototype.clearRootsList = function() {
  return this.setRootsList([]);
};


/**
 * @enum {number}
 */
proto.aurum.RspStatus = {
  OK: 0,
  NA: 1,
  ERROR: 2
};

/**
 * @enum {number}
 */
proto.aurum.ParamType = {
  STRING: 0,
  INT: 1,
  DOUBLE: 2,
  BOOL: 3
};

goog.object.extend(exports, proto.aurum);
