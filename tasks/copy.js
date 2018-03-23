/* ---- Import Gulp Modules -------- */
import gulp from 'gulp';

/* ---- Import Configs ------------ */
import {baseDir} from './configs';
import {size} from './utils';

// Define File Paths
const source = `${baseDir.static}/**/*.*`;
const dest   = baseDir.dist;

export default function copy(){
  return gulp.src(source)
    .pipe(size())
    .pipe(gulp.dest(dest));
}
