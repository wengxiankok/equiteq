import gulp    from 'gulp';
import styles  from './tasks/styles';
import images  from './tasks/images';
import scripts from './tasks/scripts';
import pages   from './tasks/pages';
import server  from './tasks/server';
import clean   from './tasks/clean';
import watcher from './tasks/watcher';

/* ---- Import Configs ------------ */

/* ---- Private Tasks ------------- */
gulp.task('clean-all', clean.all);
gulp.task('clean-images', clean.images);
gulp.task('clean-pages', clean.pages);
gulp.task('clean-css', clean.css);
gulp.task('clean-js', clean.js);

/* ---- Sub Tasks ----------------- */
gulp.task('styles', gulp.series('clean-css', styles));
gulp.task('pages', gulp.series('clean-pages', pages));

/* ---- Main Tasks ---------------- */
gulp.task('dev');
