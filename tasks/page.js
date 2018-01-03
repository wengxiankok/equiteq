import gulp  from 'gulp';
import strip from 'gulp-strip-comments';

// import utilities
import {paths} from './configs/_configs';
import argv    from './utils/arguments';
import size    from './utils/size';

const entry = `${paths.source}/**/*.${argv.pageExt}`;
const dest  = `${paths.build}`;

function page(){
  return gulp.src(entry)
    .pipe( strip() )
    .pipe( size() )
    .pipe( gulp.dest(dest ) );
}

export default page;
