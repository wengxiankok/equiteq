import gulp    from 'gulp';
import styles  from './tasks/styles';
import images  from './tasks/images';
import scripts from './tasks/scripts';
import pages   from './tasks/pages';
import server  from './tasks/server';
import clean   from './tasks/clean';
import watcher from './tasks/watcher';

/* ---- Import Configs ------------ */

/* ---- Main Tasks ---------------- */
gulp.task('dev');

/* ---- Sub Tasks ----------------- */
gulp.task('styles', gulp.series('clean-css', styles));

/* ---- Private Tasks ------------- */
gulp.task('clean-all', clean.all);
gulp.task('clean-images', clean.images);
gulp.task('clean-css', clean.css);
gulp.task('clean-js', clean.js);
