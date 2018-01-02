import gulp  from 'gulp';
import chalk from 'chalk';
import log   from 'fancy-log';

// import config
import configs from './../_config';

// import tasks
import page from './page';
import styles from './styles';

function watcher(){
  const styleWatcher  = gulp.watch(`${configs.paths.source}/**/*.scss`);
  const scriptWatcher = gulp.watch(`${configs.paths.source}/**/*.js`);
  const pageWatcher   = gulp.watch(`${configs.paths.source}/**/*.html`);

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
