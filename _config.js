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

const ignoreGlob = [
  `${paths.source}/**/*`,
  // ignore HTML files
  `!${paths.source}/**/*.html`,
  // ignore PHP files
  `!${paths.source}/**/*.php`,
  // ignore images
  `!${paths.source}/${folders.img}/`,
  `!${paths.source}/${folders.img}/**/*`,
  //ignore sass stylesheets
  `!${paths.source}/${folders.sass}/`,
  `!${paths.source}/${folders.sass}/**/*`,
  // ignore Javascript files
  `!${paths.source}/${folders.javascript}/`,
  `!${paths.source}/${folders.javascript}/**/*`,
];

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

const browsersync = {
  logLevel: 'info',
  logFileChanges: false,
  server: paths.build,
  // proxy: 'website.local',
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

const configs  = {folders, paths, sass, webpack, browsersync, imagemin, ignoreGlob};

export default configs;
