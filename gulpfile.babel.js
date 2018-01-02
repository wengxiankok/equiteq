import gulp from 'gulp';

// import tasks
import watcher from './tasks/watcher';
import server from './tasks/server';
import scripts from './tasks/scripts';

import page from './tasks/page';
import images from './tasks/images';
import styles from './tasks/styles';
import clean  from './tasks/delete';

// import config
import configs from './_config';

// import utilities
import argv  from './utils/arguments';
import chalk from 'chalk';
import log   from 'fancy-log';

// specific tasks
const tasks = [ page, images, scripts, styles, clean ];
tasks.forEach( task => gulp.task(task) );

// main tasks
gulp.task('dev', gulp.series( clean, gulp.parallel(server, watcher, page, styles, scripts, images) ));
gulp.task('build', gulp.series( [clean, set], gulp.parallel(page, scripts, styles, images) ));

function set(done){
  configs.webpack.watch = false;
  done();
}

gulp.task(page);
