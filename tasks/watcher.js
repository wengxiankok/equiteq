import gulp  from 'gulp';
import chalk from 'chalk';
import log   from 'fancy-log';

// import tasks
import page   from './page';
import styles from './styles';

// import config
import {paths} from './configs/_configs';

function watcher(){
  const styleWatcher  = gulp.watch(`${paths.source}/**/*.scss`);
  const scriptWatcher = gulp.watch(`${paths.source}/**/*.js`);
  const pageWatcher   = gulp.watch(`${paths.source}/**/*.html`);

  watchHandler( styleWatcher, styles );
  watchHandler( scriptWatcher, null );
  watchHandler( pageWatcher, page );
}

function watchHandler( watcher, task ){
  watcher.on('all', (events, path) =>{
    const filePath = path.split(/\/|\\/).pop();
    log( chalk.gray('---------------------') );
    log( `Detected ${ chalk.green.bold(events)} on ${ chalk.yellow.bold(filePath)}.` );
    log( `Executing task '${chalk.cyan(task.name)}'.`);
    if( task != null ) task();
  });
}
export default watcher;
