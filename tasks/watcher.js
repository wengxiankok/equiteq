/* ---- Import Gulp Modules -------- */
import gulp             from 'gulp';

/* ---- Import Tasks --------------- */
import copy             from './copy';
import styles           from './styles';
import images           from './images';
import scripts          from './scripts';
import pages, {pSource} from './pages';

/* ---- Import Configs ------------- */
import {baseDir}        from './configs';
import {join, logger}   from './utils';

export default function watcher(){
  const watchers = {
    pages:   gulp.watch(pSource, pages),
    static:  gulp.watch(baseDir.static, copy),
    images:  gulp.watch(join(baseDir.src, baseDir.images.src), images),
    styles:  gulp.watch(join(baseDir.src, baseDir.styles.src), styles),
    scripts: gulp.watch(join(baseDir.src, baseDir.scripts.src), scripts),
  };

  for(const watch in watchers)  watchHandler(watchers[watch]);
}

function watchHandler(watcher){
  watcher.on('all', (event, path) =>{
    logger.print(`Detected ${event} on ${path}`);
  });
}
