import yargs from 'yargs';
import chalk from 'chalk';
import log from 'fancy-log';

const argvs = yargs.argv;

function argvParser(){
  const args = {
    env: argvs.production || argvs.p ? 'production' : 'develop',
    pageExt: argvs.php ? 'php' : argvs.type ? argvs.type : 'html',
    quick: argvs.quick || argvs.q
  };

  log( chalk.gray('---------------------') );
  // log environment
  log(chalk.green(`Current Environment: '${chalk.cyan.bold(args.env)}'`));
  // log page extension
  log(chalk.green(`Editing File Type: [${chalk.cyan.bold(args.pageExt)}]`));
  log( chalk.gray('---------------------') );

  return args;
}

const argv = argvParser();
export default argv;
