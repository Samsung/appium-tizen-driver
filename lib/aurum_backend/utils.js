import log from '../logger';
import messages from './aurum_pb';
import _ from 'lodash';
import { errors } from 'appium-base-driver';

const grpc = require('grpc');

function logAndThrowGrpcCommandError (commandName, error) {
  log.error(`gRPC error: ${commandName}() failed. Cause: ${error.name} (${error.message})`);

  let message;
  if (error.code === grpc.status.UNAVAILABLE) {
    message = 'Device-side server unavailable. Check if Aurum is running on the device under test and if there\'s a connection with the device.';
  } else {
    message = `An unknown server-side error occurred: ${error.name}: ${error.message}`;
  }
  throw new errors.UnknownError(message);
}

function throwOnAurumRequestFailure (commandName, result) {
  if (typeof result.getStatus === 'undefined') {
    // This Aurum response message has no "status" - no error
    return;
  }

  if (result.getStatus() !== messages.RspStatus.OK) {
    log.error(`Aurum ${commandName}() request was unsuccessful; status: ${result.getStatus()} (${_.findKey(messages.RspStatus, (val) => val === result.getStatus())})`);
    throw new errors.UnknownError(`Command failed: ${commandName}`);
  }
}

/*
 * Use this function to check, if there were any errors in:
 * 1. gRPC protocol layer - if there was an error, "grpcError"
 * argument will be an object, other than "undefined"
 * 2. Aurum layer - if there was an error, the response from
 * Aurum bootstrap, contained in grpcResult, will have "status"
 * field set to a value other than "OK".
 */
function throwOnUnsuccessfulAurumCall (appiumCommandName, grpcError, grpcResult, grpcCommandName = appiumCommandName) {
  if (grpcError) {
    logAndThrowGrpcCommandError(grpcCommandName, grpcError);
  }
  throwOnAurumRequestFailure(appiumCommandName, grpcResult);
}

function isIterable (object) {
  return Symbol.iterator in Object(object);
}

export { logAndThrowGrpcCommandError, throwOnAurumRequestFailure, throwOnUnsuccessfulAurumCall, isIterable };