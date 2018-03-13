import gulp from 'gulp';
import {styles, watcher} from './tasks/styles';

gulp.task(styles);

gulp.task('dev', gulp.series( styles, watcher ));
