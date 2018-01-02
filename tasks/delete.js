import del   from 'del';
import log   from 'fancy-log';
import chalk from 'chalk';

// import config
import configs from './../_config';

const entry = `${configs.paths.build}/**/*`;

function clean(){
  return del( entry )
    .then(log( chalk.red.bold('Folder cleaned.') ));
}

export default clean;
