import {paths, folders} from './_configs';

module.exports = {
  watch: true,
  entry: {
    app: `./${paths.source}/${folders.javascript}/app.js`
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
