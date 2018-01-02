import gulp    from 'gulp';
import webpack from 'webpack-stream';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

// import config
import configs from './../_config';

// import utilities
import argv from './../utils/arguments';

// create basic array of entry files
let entries = [];
for( const path in configs.webpack.entry ) entries.push( configs.webpack.entry[path] );

const destination = `${configs.paths.build}/${configs.folders.javascript}`;

function scripts(){
  if( argv.env === 'production' ){
    configs.webpack.plugins = [
      new UglifyJSPlugin()
    ];
  }

  return gulp.src( entries )
  .pipe( webpack(configs.webpack) )
  .pipe( gulp.dest(destination) );
}

export default scripts;
