/* ---- Import Node.js Fuctions ---- */
import path                from 'path';

/* ---- Import NPM Modules --------- */
import del                 from 'del';

/* ---- Import Gulp Modules -------- */
import gulp                from 'gulp';

/* ---- Import Tasks --------------- */
import copy                from './copy';

import styles              from './styles';
import images              from './images';
import scripts             from './scripts';
import {pages, pageSource} from './pages';

/* ---- Import Configs ------------- */
import baseDir             from './configs';
import logger              from './utils';


export function watcher(){
  // Define Watchers
  const watchers = {
    static:  gulp.watch(baseDir.static, copy),
    styles:  gulp.watch(path.posix.join(baseDir.src, baseDir.styles.src), styles),
    scripts: gulp.watch(path.posix.join(baseDir.src, baseDir.scripts.src), scripts),
    images:  gulp.watch(path.posix.join(baseDir.src, baseDir.images.src), images),
    pages:   gulp.watch(pageSource, pages)
  };

  for(const task in watchers) watchHandler(watchers[task]);
}

function watchHandler(watcher){
  watcher.on('unlink', p =>{
    const parsed   = path.parse(p);
    const distVer  = path.join(baseDir.dist, parsed.dir, parsed.base);

    logger.log(`Deleted '${logger.string(parsed.base, 'cyan')}'from '${logger.string(baseDir, 'yellow')}'`, 'red');

    del(distVer);
  });
}
