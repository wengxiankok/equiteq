import gulp  from 'gulp';
import chalk from 'chalk';
import log   from 'fancy-log';

// import config
import configs from './../_config';

// import tasks
import styles from './styles';

function watcher(){
  const styleWatcher  = gulp.watch(`${configs.paths.source}/**/*.scss`);
  const scriptWatcher = gulp.watch(`${configs.paths.source}/**/*.js`);
  // const htmlWatcher   = gulp.watch(`${configs.paths.source}/**/*.html`);

  watchHandler( styleWatcher, styles );
  watchHandler( scriptWatcher, null );
  // watchHandler( htmlWatcher, html );
}

function watchHandler( watcher, task ){
  watcher.on('all', (events, path) =>{
    const filePath = path.split(/\/|\\/).pop();
    log( chalk.gray('---------------------') );
    log( `Detected ${ chalk.green.bold(events)} on ${ chalk.yellow.bold(filePath)}.` );
    if( task != null ) task();
  });
}
export default watcher;
