import gulp         from 'gulp';
import sass         from 'gulp-sass';
import plumber      from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';

// import config
import configs from './../_config';

const sourcePath = `${configs.paths.source}/${configs.folders.sass}/*.scss`;
const destPath   = `${configs.paths.build}/${configs.folders.stylesheets}`;

function styles(){
  return gulp.src( sourcePath )
    .pipe( plumber() )
    .pipe( sass(configs.sass) )
    .pipe( autoprefixer() )
    .pipe( gulp.dest(destPath) );
}

export default styles;
