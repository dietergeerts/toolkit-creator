const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LOG_PREFIX = '[Toolkit Creator]';

/**
 * @param {Object} webpackConfig
 * @returns {Object}
 */
module.exports = webpackConfig => {
  if (!webpackConfig.context) {
    throw new Error(
      `${LOG_PREFIX} webpack's \`context\` option has to be set`
      + ` in order to require your documentation files.`
      + ` See https://webpack.js.org/configuration/entry-context/#context`,
    );
  }
  return webpackMerge(
    webpackConfig,
    {
      entry: {
        index: path.resolve(__dirname, 'lib/index.js'),
      },
      output: {
        path: path.resolve(process.env.INIT_CWD, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.md$/,
            include: webpackConfig.context,
            use: [
              'file-loader?name=[path][name].[hash].html',
              'markdown-it-loader',
            ],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(['dist'], { root: process.env.INIT_CWD }),
        new webpack.DefinePlugin({
          __TKC_SRC__: JSON.stringify(webpackConfig.context),
        }),
        new HtmlWebpackPlugin(),
      ],
    },
  );
};
