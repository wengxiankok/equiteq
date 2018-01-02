const folders = {
  sass: 'sass',
  stylesheets: 'css',
  javascript: 'js',
  images: 'img'
};

const paths = {
  source: './source',
  build: './build',
  dist: './dist'
};

const sass = {

};

const webpack = {
  watch: true,
  entry: {
    app: `./${paths.source}/${folders.javascript}/entry.js`,
    // vendor: `./${paths.source}/${folders.javascript}/vendor.js`
  },
  output: {
    filename: '[name].js'
  },
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

const browsersync = {
  logLevel: 'info',
  logFileChanges: false,
  server: {
    baseDir: paths.build,
    port: 3000
  },
  files: [
    `${paths.build}/${folders.stylesheets}/*.css`,
    `${paths.build}/${folders.javascript}/*.js`,
    `${paths.build}/*.html`,
  ]
};

const imagemin = {
  options: {
    verbose: true
  },
  plugins: {
    mozjpeg: {
      quality: 70
    },
    pngquant: {
      quality: 60
    },
    svgo: {}
  }
};

const configs  = {folders, paths, sass, webpack, browsersync, imagemin};

export default configs;
