import del   from 'del';
import log   from 'fancy-log';
import chalk from 'chalk';

// import utilities
import configs from './../_config';
import argv    from './../utils/arguments';

let entry = [`${configs.paths.build}/**/*`];

function clean(done){
  if( argv.quick ){
    log( chalk.red(`Ignored '${chalk.cyan('img')}' folder.`));

    entry.push(
      `!${configs.paths.build}/${configs.folders.images}`,
      `!${configs.paths.build}/${configs.folders.images}/**`
    );
  }

  return del( entry )
    .then(log( chalk.red.bold('Build folder cleaned.') ));
}

export default clean;
