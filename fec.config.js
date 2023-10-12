const webpack = require('webpack');

module.exports = {
  appUrl: '/application-services/acs',
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
  _unstableHotReload: process.env.HOT === 'true',
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
