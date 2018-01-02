import del   from 'del';
import log   from 'fancy-log';
import chalk from 'chalk';

// import config
import configs from './../_config';
// import utilities
import argv  from './../utils/arguments';

let entry = [
  `${configs.paths.build}/**/*`,
  `!${configs.paths.build}/img`,
  `!${configs.paths.build}/img/**`
];

function clean(done){
  if( argv.quick ){
    log( chalk.red(`Ignored '${chalk.cyan('img')}' folder.`));
    return done();
  }

  return del( entry )
    .then(log( chalk.red.bold('Folder cleaned.') ));
}

export default clean;
