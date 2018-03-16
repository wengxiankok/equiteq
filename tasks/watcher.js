/* ---- Import Node.js Fuctions ---- */
import path             from 'path';

/* ---- Import NPM Modules --------- */
import del              from 'del';

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
  watcher.on('add', file => {
    logger.print(`Detected '${logger.string('add', 'cyan')}' on '${logger.string(file, 'green')}'.`, 'yellow');
  });

  watcher.on('change', file => {
    logger.print(`Detected '${logger.string('change', 'cyan')}' on '${logger.string(file, 'green')}'.`, 'yellow');
  });

  watcher.on('unlink', file => {
    logger.print(`Detected '${logger.string('delete', 'red')}' on '${logger.string(file, 'green')}'. Removing file from '${logger.string(join(baseDir.dist), 'green')}'`, 'yellow');

    const regexp = new RegExp(baseDir.src.split('/').pop());
    let distPath = file.replace(regexp, baseDir.dist);
    let toDelete = path.posix.normalize(distPath);

    // check if its a css file
    if(file.indexOf('scss') !== -1){
      distPath = distPath.replace(/scss|sass/g, 'css');
      toDelete = [distPath, distPath.replace('.css', '.css.map')];
      toDelete.forEach((t, i) => toDelete[i] = path.posix.normalize(t));
    }

    del(toDelete);
  });
}
