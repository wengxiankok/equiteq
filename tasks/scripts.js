/* ---- Import Node.js Fuctions ---- */
import path          from 'path';

/* ---- Import NPM Modules --------- */
// import webpack from 'webpack';
import webpack       from 'webpack';
import stream        from 'webpack-stream';

/* ---- Import Gulp Modules -------- */
import gulp          from 'gulp';

/* ---- Import Configs ------------ */
import webpackConfig from './../webpack.config.js';
import {baseDir}     from './configs';

// Define File Paths
const source = path.posix.join(baseDir.src, baseDir.scripts.src);
const dest   = path.posix.join(baseDir.dist, baseDir.scripts.dest);

export function scripts() {
  return gulp.src(source)
    .pipe(stream(webpackConfig, webpack))
    .pipe(gulp.dest(dest));
}
