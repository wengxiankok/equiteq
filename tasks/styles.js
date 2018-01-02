import gulp         from 'gulp';
import sass         from 'gulp-sass';
import plumber      from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps   from 'gulp-sourcemaps';

// import config
import configs from './../_config';
// import utilities
import argv from './../utils/arguments';
import size from './../utils/size';

const entry      = `${configs.paths.source}/${configs.folders.sass}/*.scss`;
const destinaton = `${configs.paths.build}/${configs.folders.stylesheets}`;

function styles(){
  if( argv.env === 'production' ) configs.sass.outputStyle = 'compressed';

  return gulp.src( entry )
    .pipe( plumber() )
    .pipe( sourcemaps.init() )
      .pipe( sass(configs.sass) )
    .pipe( sourcemaps.write({includeContent: false}) )
    .pipe( sourcemaps.init({loadMaps: true}) )
      .pipe( autoprefixer() )
      .pipe( size() )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest(destinaton) );
}

export default styles;
