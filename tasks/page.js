import gulp  from 'gulp';
import strip from 'gulp-strip-comments';

// import config
import configs from './../_config';
import argv from './../utils/arguments';
import size from './../utils/size';

const entry       = `${configs.paths.source}/**/*.${argv.pageExt}`;
const destination = `${configs.paths.build}`;

function page(){
  return gulp.src(entry)
    .pipe( strip() )
    .pipe( size() )
    .pipe( gulp.dest(destination) );
}

export default page;
