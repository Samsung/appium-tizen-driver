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

function throwOnUnsuccessfulAurumCall (aurumCommandName, grpcError, aurumResult, grpcCommandName = aurumCommandName) {
  if (grpcError) {
    logAndThrowGrpcCommandError(grpcCommandName, grpcError);
  }
  throwOnAurumRequestFailure(aurumCommandName, aurumResult);
}

export { logAndThrowGrpcCommandError, throwOnAurumRequestFailure, throwOnUnsuccessfulAurumCall };