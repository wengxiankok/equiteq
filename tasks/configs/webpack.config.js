import {paths, folders} from './_configs';

module.exports = {
  entry: {
    entry: `./${paths.source}/${folders.javascript}/entry.js`
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'source-maps',
  stats: {
    version: false,
    timings: true
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};
