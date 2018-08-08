/* ---- Import NPM Modules --------- */
import webpack       from 'webpack';
import stream        from 'webpack-stream';

/* ---- Import Gulp Modules -------- */
import gulp          from 'gulp';

/* ---- Import Configs ------------ */
import webpackConfig         from './../webpack.config.js';
import {baseDir, production} from './configs';
import {path}                from './utils';

// Define File Paths
const source = path.join(baseDir.src, baseDir.scripts.src);
const dest   = path.join(baseDir.dist, baseDir.scripts.dest);

export default function scripts(cb) {
  // check if watching is needed
  if(process.argv.indexOf('dev') !== -1 || process.argv.indexOf('watcher') !== -1) webpackConfig.watch = true;
  if(production) webpackConfig.devtool = false;

  // tell gulp that this task is complete
  cb();

  return gulp.src(source)
    .pipe(stream(webpackConfig, webpack))
    .pipe(gulp.dest(dest));
}
