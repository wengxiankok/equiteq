import gulp    from 'gulp';
import webpack from 'webpack';

// import config
import configs from './../_config';

// create basic array of entry files
let entries = [];
for( const path in configs.webpack.entry ) entries.push( configs.webpack.entry[path] );

const destPath = `${configs.paths.build}/${configs.folders.javascript}`;

function scripts(){
  return gulp.src( entries )
  .pipe( webpack(configs.webpack) )
  .pipe( gulp.dest(destPath) );
}

export default scripts;
