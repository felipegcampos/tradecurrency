import Hapi from 'hapi';
import Debug from 'debug';
import routes from './config/routes';

const debug = Debug('coinsquare:init');

async function init() {
  const server = new Hapi.Server({
    host: '0.0.0.0',
    port: 5000,
    routes: {
      cors: {
        origin: ['http://localhost:3000'],
      },
    },
  });
  server.route(await routes);
  await server.start();
  debug(`Server started at ${server.info.uri}`);
  return server;
}

export default init();
