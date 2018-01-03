import del   from 'del';
import log   from 'fancy-log';
import chalk from 'chalk';

// import utilities
import {paths, folders} from './configs/_configs';
import argv from './utils/arguments';

let entry = [`${paths.build}/**/*`];

function clean(){
  if( argv.quick ){
    entry.push(
      `!${paths.build}/${folders.images}`,
      `!${paths.build}/${folders.images}/**`
    );
  }

  return del( entry )
    .then(log( chalk.red.bold('Build folder cleaned.') ));
}

export default clean;
