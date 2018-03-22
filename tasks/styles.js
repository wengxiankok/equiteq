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
import {size, joinPaths, generatePaths} from './utils';

// Define File Paths
const config = configs.styles;
const source = generatePaths(baseDir.styles.src, baseDir.src);
const dest   = joinPaths(baseDir.dist, baseDir.styles.dest);

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
