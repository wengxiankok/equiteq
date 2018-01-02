import yargs from 'yargs';
import chalk from 'chalk';
import log from 'fancy-log';

const argvs = yargs.argv;

function argv(){
  const env     = argvs.production ? 'production' : 'develop';
  const pageExt = argvs.type || 'html';

  // log environment
  log(chalk.green(`Current Environment: '${chalk.cyan.bold(env)}'`));
  // log page extension
  log(chalk.green(`Editing File Type: [${chalk.cyan.bold(pageExt)}]`));

  return {
    env: env,
    pageExt: pageExt
  };
}

export default argv;
