import gulp  from 'gulp';
import chalk from 'chalk';
import log   from 'fancy-log';
import del from 'del';

// import tasks
import page   from './page';
import styles from './styles';

// import config
import {paths, folders} from './configs/_configs';
import argv    from './utils/arguments';

function watcher(){
  const watchers = {
    scripts: gulp.watch(`${paths.source}/${folders.javascript}/**/*.js`),
    styles: gulp.watch(`${paths.source}/${folders.sass}/**/*.scss`, styles),
    page: gulp.watch(`${paths.source}/*.${argv.pageExt}`, page)
  };

  for( const task in watchers ) watchHandler( watchers[task], task );
}

function watchHandler( watcher ){
  watcher.on('all', (events, path)=>{
    if( events === 'unlink' ) return;

    const filePath = path.split(/\/|\\/).pop();
    log( chalk.gray('---------------------') );
    log( `Detected ${ chalk.green.bold(events)} on ${ chalk.yellow.bold(filePath)}.` );
  });

  watcher.on('unlink', path=>{
    const re = new RegExp( paths.source.split('/').pop() );
    const buildPath = path.replace( re, paths.build.replace('/', '\\') );

    log( chalk.red.bold(`'${ chalk.yellow(buildPath.split(/\/|\\/).pop()) }' deleted.`) );
    del(buildPath);
  });
}

export default watcher;
