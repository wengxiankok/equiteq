/* ---- Import Node.js Fuctions ---- */
import path from 'path';

/* ---- Import Gulp Modules -------- */
import gulp from 'gulp';

import strip from 'gulp-strip-comments';

/* ---- Import Configs ------------ */
import {baseDir, configs} from './configs';

// const source = path.resolve(baseDir.src, baseDir.styles.src);

const config = configs.pages;
const source = [];
const dest   = baseDir.dist;

config.extensions.forEach(ext => {
  const p = path.resolve(baseDir.src, `**/*${ext}`);
  source.push(p);
});

export function pages(){
  return gulp.src(source)
    .pipe(strip())
    .pipe(gulp.dest(dest));
}
