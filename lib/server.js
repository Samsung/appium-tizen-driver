import log from './logger';
import { server as baseServer, routeConfiguringFunction } from 'appium-base-driver';
import TizenDriver from './driver';


async function startServer (port, hostname) {
  const d = new TizenDriver();
  const server = await baseServer({
    routeConfiguringFunction: routeConfiguringFunction(d),
    port,
    hostname,
  });
  log.info(`TizenDriver server listening on http://${hostname}:${port}`);
  return server;
}

export { startServer };
