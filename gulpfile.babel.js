import gulp from 'gulp';
import {styles} from './tasks/styles';
import {images} from './tasks/images';
import {scripts} from './tasks/scripts';
import {pages} from './tasks/pages';
import {server} from './tasks/server';
import {clean} from './tasks/clean';
import {watcher} from './tasks/watcher';

gulp.task(styles);
gulp.task(images);
gulp.task(pages);
gulp.task(scripts);
gulp.task(server);
gulp.task(clean);
gulp.task(watcher);

gulp.task('dev', gulp.series( styles, watcher ));
