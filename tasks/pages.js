/* ---- Import Node.js Fuctions ---- */
import path from 'path';

/* ---- Import Gulp Modules -------- */
import gulp from 'gulp';

import strip from 'gulp-strip-comments';

/* ---- Import Configs ------------ */
import {baseDir, configs} from './configs';

// const source = path.posix.join(baseDir.src, baseDir.styles.src);

const config = configs.pages;
const source = [];
const dest   = baseDir.dist;

config.extensions.forEach(ext => {
  const p = path.posix.join(baseDir.src, `**/*${ext}`);
  source.push(p);
});

export default function pages(){
  return gulp.src(source)
    .pipe(strip())
    .pipe(gulp.dest(dest));
}

export const pSource = source;
