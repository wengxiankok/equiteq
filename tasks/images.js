/* ---- Import Node.js Fuctions ---- */
import path     from 'path';

/* ---- Import Gulp Modules -------- */
import gulp     from 'gulp';

import imagemin from 'gulp-imagemin';
import mozjpeg  from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import svgo     from 'imagemin-svgo';

/* ---- Import Configs ------------ */
import {production, baseDir, configs} from './configs';
import {logger} from './utils';

// Define File Paths
const config = configs.images;
const source = path.join(baseDir.src, baseDir.images.src);
const dest   = path.join(baseDir.dist, baseDir.images.dest);

const plugins = [
  mozjpeg({ quality: config.quality.jpeg }),
  pngquant({ quality: config.quality.png }),
  svgo()
];

export function images(){
  if(!production){
    logger('Skipping Images...', 'red');
    return gulp.src(source)
      .pipe(gulp.dest(dest));
  }

  return gulp.src(source)
    .pipe(imagemin(plugins, config.options))
    .pipe(gulp.dest(dest));
}
