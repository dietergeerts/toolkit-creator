const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @param {Object} webpackConfig
 * @returns {Object}
 */
module.exports = webpackConfig =>
  webpackMerge(
    webpackConfig,
    {
      entry: {
        index: path.resolve(__dirname, 'lib/index.js'),
      },
      plugins: [
        new HtmlWebpackPlugin(),
      ],
    },
  );
