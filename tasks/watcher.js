/* ---- Import Node.js Fuctions ---- */
import path         from 'path';

/* ---- Import NPM Modules --------- */

/* ---- Import Gulp Modules -------- */
import gulp         from 'gulp';

/* ---- Import Tasks --------------- */
import {copy}                        from './copy';
import {clean}                       from './clean';

import {styles}                      from './styles';
import {images}                      from './images';
import {scripts}                     from './scripts';
import {pages, source as pageSource} from './pages';

/* ---- Import Configs ------------- */
// const config = configs.watcher;
import {baseDir, configs} from './configs';
// import {size} from './utils';

// Define Watchers
const watchers = {
  static:  gulp.watch(baseDir.static, copy),
  styles:  gulp.watch(path.resolve(baseDir.src, baseDir.styles.src), styles),
  scripts: gulp.watch(path.resolve(baseDir.src, baseDir.scripts.src), scripts),
  images:  gulp.watch(path.resolve(baseDir.src, baseDir.images.src), images),
  pages:   gulp.watch(pageSource, pages)
};

export function watcher(){
  for(const task in watchers) watchers[task];
}
