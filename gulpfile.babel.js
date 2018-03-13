import gulp from 'gulp';
import {styles, watcher} from './tasks/styles';
import {images} from './tasks/images';

gulp.task(styles);
gulp.task(images);

gulp.task('dev', gulp.series( styles, watcher ));
