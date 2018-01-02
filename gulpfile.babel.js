import gulp from 'gulp';

// import tasks
import watcher from './tasks/watcher';
import server from './tasks/server';
import scripts from './tasks/scripts';

import styles from './tasks/styles';
import images from './tasks/images';
import clean  from './tasks/delete';

const devTasks = [ server, watcher, styles, scripts, images ];

gulp.task('dev', gulp.parallel( devTasks ));
