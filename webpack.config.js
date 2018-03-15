const path = require('path');
// import path from 'path';
// import webpack from 'webpack';

// import {env} from './tasks/configs';

module.exports = {
  mode: 'development',
  entry: path.posix.join(__dirname, './src/js/app.js'),
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};
