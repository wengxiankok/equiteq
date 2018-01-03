import gulp from 'gulp';

// import utilities
import {paths, ignores} from './configs/_configs';

const entry = ignores;
const dest  = `${paths.build}`;

function copy(){
  return gulp.src( entry )
    .pipe( gulp.dest(dest) );
}

export default copy;
