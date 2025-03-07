const webpack = require('webpack');

module.exports = {
  appUrl: ['/application-services/acs', '/openshift/acs'],
  debug: true,
  useProxy: true,
  proxyVerbose: true,
  /**
   * Change to false after your app is registered in configuration files
   */
  interceptChromeConfig: false,
  /**
   * Add additional webpack plugins
   */
  plugins: [
    // We want to access a PROD env variable within the UI code
    new webpack.DefinePlugin({
      'process.env.PROD': process?.env?.NODE_ENV === 'production',
    }),
  ],
  routes: {
    ...(process.env.CONFIG_PORT && {
      '/api/chrome-service/v1/static': {
        host: `http://localhost:${process.env.CONFIG_PORT}`,
      },
      '/api/chrome-service/v1/dashboard-templates': {
        host: `http://localhost:${process.env.CONFIG_PORT}`,
      },
    }),
  },
  hotReload: process.env.HOT === 'true',
  moduleFederation: {
    exclude: ['react-router-dom'],
    shared: [
      {
        'react-router-dom': {
          singleton: true,
          import: false,
          requiredVersion: '^6.3.0',
          version: '^6.3.0',
        },
      },
    ],
  },
};
