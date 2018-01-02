import yargs from 'yargs';
import chalk from 'chalk';
import log from 'fancy-log';

const argvs = yargs.argv;

function argvParser(){
  const env     = argvs.production ? 'production' : 'develop';
  const pageExt = argvs.php ? 'php' : 'html';

  log( chalk.gray('---------------------') );
  // log environment
  log(chalk.green(`Current Environment: '${chalk.cyan.bold(env)}'`));
  // log page extension
  log(chalk.green(`Editing File Type: [${chalk.cyan.bold(pageExt)}]`));
  log( chalk.gray('---------------------') );
  return {
    env: env,
    pageExt: pageExt
  };
}

const argv = argvParser();
export default argv;
