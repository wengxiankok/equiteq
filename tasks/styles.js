import gulp         from 'gulp';
import sass         from 'gulp-sass';
import plumber      from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';

// import config
import configs from './../_config';

const entry      = `${configs.paths.source}/${configs.folders.sass}/*.scss`;
const destinaton = `${configs.paths.build}/${configs.folders.stylesheets}`;

function styles(){
  return gulp.src( entry )
    .pipe( plumber() )
    .pipe( sass(configs.sass) )
    .pipe( autoprefixer() )
    .pipe( gulp.dest(destinaton) );
}

export default styles;
