import path from 'path';
import glob from 'glob';
import Debug from 'debug';
import Promise from 'bluebird';

const debug = Debug('coinsquare:init');

const files = glob
  .sync('**/*.js', { cwd: path.resolve(__dirname, '../actions') });

const routes = Promise.map(files, async (filepath) => {
  const { default: route } = await import(`../actions/${filepath}`);
  const family = path.dirname(filepath);
  route.path = path.join('/', family, route.path);
  // Windows safe
  route.path = route.path.replace(/\\/g, '/');

  debug('found route %s %s', route.method, route.path);
  return route;
});

export default routes;
