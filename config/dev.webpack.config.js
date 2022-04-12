const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');
const commonPlugins = require('./plugins');
const mockDataHandler = require('../mocks/mockDataHandler');

let customProxy = [
  {
    context: ['/api'],
    target: process.env.FLEET_MANAGER_API_ENDPOINT || 'http://localhost:8000',
  },
];

if (process.env.USE_MOCK_DATA) {
  customProxy[0].bypass = mockDataHandler;
}

const { config: webpackConfig, plugins } = config({
  rootFolder: resolve(__dirname, '../'),
  debug: true,
  deployment: process.env.BETA ? 'beta/apps' : 'apps',
  useProxy: true,
  appUrl: process.env.BETA
    ? '/beta/application-services/acs'
    : '/application-services/acs',
  env: process.env.BETA ? 'stage-beta' : 'stage-stable',
  customProxy,
});
plugins.push(...commonPlugins);

module.exports = {
  ...webpackConfig,
  plugins,
};
