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

const ignores = [
  `${paths.source}/**/*`,
  // ignore HTML files
  `!${paths.source}/**/*.html`,
  // ignore PHP files
  `!${paths.source}/**/*.php`,
  // ignore images
  `!${paths.source}/${folders.images}`,
  `!${paths.source}/${folders.images}/**/*`,
  //ignore sass stylesheets
  `!${paths.source}/${folders.sass}`,
  `!${paths.source}/${folders.sass}/**/*`,
  // ignore Javascript files
  `!${paths.source}/${folders.javascript}`,
  `!${paths.source}/${folders.javascript}/**/*`,
];

export {paths, folders, ignores};
