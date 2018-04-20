import yargs   from 'yargs';
import path    from 'path';
import webpack from 'webpack';

export const env = yargs.argv.p ? 'production' : 'development';
export const production = env === 'production' ? true : false;

module.exports = {
  mode: env,
  entry: {
    app: path.posix.join(__dirname, './src/js/app.js')
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  devtool: 'source-map'
};
