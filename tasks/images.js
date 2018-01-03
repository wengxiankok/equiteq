import gulp     from 'gulp';
import imagemin from 'gulp-imagemin';
import mozjpeg  from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import svgo     from 'imagemin-svgo';

// import utilities
import {paths, folders} from './configs/_configs';
import argv from './utils/arguments';

const config = {
  options: {
    verbose: true
  },
  plugins: [
    mozjpeg({ quality: 70 }),
    pngquant({ quality: 60 }),
    svgo()
  ]
};

const entry = `${paths.source}/${folders.images}/**/*`;
const dest  = `${paths.build}/${folders.images}`;

function images(done){
  if( argv.quick ) return done();

  return gulp.src( entry )
    .pipe( imagemin( config.plugins, config.options ) )
    .pipe( gulp.dest(dest) );
}

export default images;
