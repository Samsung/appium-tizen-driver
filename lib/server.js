import log from './logger';
import { server as baseServer, routeConfiguringFunction } from 'appium-base-driver';
import TizenDriver from './driver';


async function startServer (port, host) {
  let d = new TizenDriver();
  let router = routeConfiguringFunction(d);
  let server = await baseServer(router, port, host);
  log.info(`TizenDriver server listening on http://${host}:${port}`);
  return server;
}

export { startServer };
