import gulp from 'gulp';

// import utilities
import {paths, folders} from './configs/_configs';
import argv from './utils/arguments';

const ignores = [
  `${paths.source}/**/*`,
  // ignore page files
  `!${paths.source}/**/*.${argv.pageExt}`,
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

const dest  = `${paths.build}`;

function copy(){
  return gulp.src( ignores )
    .pipe( gulp.dest(dest) );
}

export default copy;
