import gulp from 'gulp';
import {styles, watcher} from './tasks/styles';
import {images} from './tasks/images';
import {scripts} from './tasks/scripts';
import {pages} from './tasks/pages';
import {server} from './tasks/server';

gulp.task(styles);
gulp.task(images);
gulp.task(pages);
gulp.task(scripts);
gulp.task(server);

gulp.task('dev', gulp.series( styles, scripts, watcher ));
