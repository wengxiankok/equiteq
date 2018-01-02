import gulp from 'gulp';

// import utilities
import configs from './../_config';

const entry = configs.ignoreGlob;
const destination = `${configs.paths.build}`;

function copy(){
  return gulp.src( entry )
    .pipe( gulp.dest(destination) );
}

export default copy;
