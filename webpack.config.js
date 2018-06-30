/**
 * @fileoverview Defines the webpack configuration to use.
 */

const path = require('path');
const webpack = require('webpack');
const env = process.argv.indexOf('-p') !== -1 ? 'production' : 'development';
const production = env === 'production' ? true : false;

/**
 * Webpack configuration
 */
module.exports = {
  mode: env,
  entry: {
    app: path.posix.join(__dirname, './src/js/app.js'),
    // vendor: [],
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    // /** Alias paths for cleaner imports */
    // alias: {
    //   'lib': path.resolve(__dirname, 'src/js/lib')
    // },
    /** Automatically look for these extensions in import statements. */
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     /** Split vendor chunk */
    //     vendor: {
    //       chunks: 'initial',
    //       name: 'vendor',
    //       test: 'vendor',
    //       enforce: true
    //     }
    //   }
    // }
  },
  plugins: [
    /** Expose compile time variables */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],
  devtool: 'source-map'
};
