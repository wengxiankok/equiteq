import gulp from 'gulp';
import {styles, watcher} from './tasks/styles';
import {images} from './tasks/images';
import {pages} from './tasks/pages';

gulp.task(styles);
gulp.task(images);
gulp.task(pages);

gulp.task('dev', gulp.series( styles, watcher ));
