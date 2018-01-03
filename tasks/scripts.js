import gulp           from 'gulp';
import webpack        from 'webpack-stream';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

// import utilities
import {paths, folders} from './configs/_configs';
import argv    from './utils/arguments';

// import webpack config
import wpConfig from './configs/webpack.config.js';

let entries = [];
for( const path in wpConfig.entry ) entries.push( wpConfig.entry[path] );

const dest = `${paths.build}/${folders.javascript}`;

function scripts(){
  if( argv.env === 'production' ){
    wpConfig.plugins = [
      new UglifyJSPlugin()
    ];
  }

  return gulp.src( entries )
  .pipe( webpack( wpConfig ) )
  .pipe( gulp.dest(dest) );
}

export default scripts;
