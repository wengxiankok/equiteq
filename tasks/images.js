import gulp     from 'gulp';
import imagemin from 'gulp-imagemin';
import mozjpeg  from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import svgo     from 'imagemin-svgo';

// import utilities
import configs from './../_config';

const plugins = [
  mozjpeg( configs.imagemin.plugins.mozjpeg ),
  pngquant( configs.imagemin.plugins.pngquant ),
  svgo( configs.imagemin.plugins.svgo )
];

const entry = `${configs.paths.source}/${configs.folders.images}/**/*`;
const destination = `${configs.paths.build}/${configs.folders.images}`;

function images(){
  return gulp.src( entry )
    .pipe( imagemin( plugins, configs.imagemin.options ) )
    .pipe( gulp.dest(destination) );
}

export default images;
