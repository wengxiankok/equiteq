import gulp from 'gulp';

// import utilities
import configs from './../_config';

const entry = configs.ignoreGlob;
const destination = `${configs.paths.build}`;

function copy(){
  gulp.src( entry )
    .pipe( destination );
}

export default copy;
