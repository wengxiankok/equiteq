import gulp         from 'gulp';
import sass         from 'gulp-sass';
import plumber      from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps   from 'gulp-sourcemaps';

import log   from 'fancy-log';
import chalk from 'chalk';

// import config
import {paths, folders} from './configs/_configs';
import argv    from './utils/arguments';
import size    from './utils/size';

const config = {

};

const entry = `${paths.source}/${folders.sass}/*.scss`;
const dest  = `${paths.build}/${folders.stylesheets}`;

function styles(){
  if( argv.env === 'production' ) sass.outputStyle = 'compressed';

  return gulp.src( entry )
    .pipe( plumber() )
    .pipe( sourcemaps.init() )
      .pipe( sass(config) )
        .on('error', error=> log(chalk.red(`\n\n${error.formatted}`)))
    .pipe( sourcemaps.write({includeContent: false}) )
    .pipe( sourcemaps.init({loadMaps: true}) )
      .pipe( autoprefixer() )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest(dest) )
    .pipe( size() );
}

export default styles;
