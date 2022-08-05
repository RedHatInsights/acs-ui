const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');
const commonPlugins = require('./plugins');

function getEnv() {
  if (process.env.PROD) {
    return process.env.BETA ? 'prod-beta' : 'prod-stable';
  } else {
    return process.env.BETA ? 'stage-beta' : 'stage-stable';
  }
}

const { config: webpackConfig, plugins } = config({
  rootFolder: resolve(__dirname, '../'),
  debug: true,
  deployment: process.env.BETA ? 'beta/apps' : 'apps',
  useProxy: true,
  appUrl: process.env.BETA
    ? '/beta/application-services/acs'
    : '/application-services/acs',
  env: getEnv(),
});
plugins.push(...commonPlugins);

module.exports = {
  ...webpackConfig,
  plugins,
};
