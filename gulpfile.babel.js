import gulp  from 'gulp';

// import tasks
import watcher from './tasks/watcher';
import server  from './tasks/server';
import page    from './tasks/page';
import scripts from './tasks/scripts';
import styles  from './tasks/styles';
import images  from './tasks/images';
import clean   from './tasks/delete';
import copy    from './tasks/copy';

// import utilities
import wpConfig from './tasks/configs/webpack.config';

// specific tasks
const tasks = [ page, images, scripts, styles, clean, copy ];
tasks.forEach( task => gulp.task(task) );

// main tasks
gulp.task('dev', gulp.series( clean, gulp.parallel( page, styles, images, copy ), gulp.parallel(scripts, server, watcher) ));
gulp.task('build', gulp.series( [clean, set], gulp.parallel(page, scripts, styles, images, copy) ));

function set(done){
  wpConfig.watch = false;
  done();
}

gulp.task(page);
