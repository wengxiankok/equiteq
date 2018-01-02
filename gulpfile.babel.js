import gulp  from 'gulp';
import chalk from 'chalk';
import log   from 'fancy-log';

// import tasks
import watcher from './tasks/watcher';
import server  from './tasks/server';
import page    from './tasks/page';
import scripts from './tasks/scripts';
import styles  from './tasks/styles';
import images  from './tasks/images';
import clean   from './tasks/delete';

// import utilities
import configs from './_config';
import argv    from './utils/arguments';

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
