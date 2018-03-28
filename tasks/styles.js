/* ---- Import NPM Modules --------- */
import autoprefixer from 'autoprefixer';
import postcssClean from 'postcss-clean';

/* ---- Import Gulp Modules -------- */
import gulp         from 'gulp';
import plumber      from 'gulp-plumber';

import sass         from 'gulp-sass';
import postcss      from 'gulp-postcss';
import sourcemaps   from 'gulp-sourcemaps';

/* ---- Import Configs ------------ */
import {production, baseDir, configs} from './configs';
import {size, path, log} from './utils';

// Define File Paths
const config = configs.styles;
const source = path.generate(baseDir.src, baseDir.styles.src);
const dest   = path.join(baseDir.dist, baseDir.styles.dest);

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
  return gulp.src(source, {since: gulp.lastRun(styles)})
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass(config.sass))
        .on('error', error => log.print(`\n \n ${error.formatted}`, 'red'))
      .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(size())
    .pipe(gulp.dest(dest));
}
