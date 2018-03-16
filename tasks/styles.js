/* ---- Import Node.js Fuctions ---- */
import path         from 'path';

/* ---- Import NPM Modules --------- */
import autoprefixer from 'autoprefixer';
import postcssClean from 'postcss-clean';

/* ---- Import Gulp Modules -------- */
import gulp         from 'gulp';

import sass         from 'gulp-sass';
import postcss      from 'gulp-postcss';
import sourcemaps   from 'gulp-sourcemaps';

/* ---- Import Configs ------------ */
import {production, baseDir, configs} from './configs';
import {size} from './utils';

// Define File Paths
const config = configs.styles;
const source = path.posix.join(baseDir.src, baseDir.styles.src);
const dest   = path.posix.join(baseDir.dist, baseDir.styles.dest);

// Define Plugins
const pluginsDevolop = [
  postcssClean(config.cleanCSS)
];

const pluginsProduction = [
  autoprefixer(config.autoprefixer),
  postcssClean(config.cleanCSS)
];

// Toggle Plugins
const plugins = production ? pluginsProduction : pluginsDevolop;

// Main Exported Task
export default function styles() {
  return gulp.src(source)
    .pipe(sourcemaps.init())
      .pipe(sass(config.sass))
      .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(size())
    .pipe(gulp.dest(dest));
}
