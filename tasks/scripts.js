/* ---- Import NPM Modules --------- */
import webpack       from 'webpack';
import stream        from 'webpack-stream';

/* ---- Import Gulp Modules -------- */
import gulp          from 'gulp';

/* ---- Import Configs ------------ */
import webpackConfig from './../webpack.config.js';
import {baseDir}     from './configs';
import {path}        from './utils';

// Define File Paths
const source = path.join(baseDir.src, baseDir.scripts.src);
const dest   = path.join(baseDir.dist, baseDir.scripts.dest);

export default function scripts() {
  return gulp.src(source)
    .pipe(stream(webpackConfig, webpack))
    .pipe(gulp.dest(dest));
}
