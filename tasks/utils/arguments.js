import yargs from 'yargs';
import chalk from 'chalk';

const argvs = yargs.argv;
const ASCII = String.raw`
  ____        _ _
 |  _ \      (_) |
 | |_) | ___  _| |_ __
 |  _ < / _ \| | | '__|
 | |_) | (_) | | | |
 |____/ \___/|_|_|_|  v0.3.2

`;

function argvParser(){
  const args = {
    env: argvs.production || argvs.p ? 'production' : 'develop',
    pageExt: argvs.php ? 'php' : argvs.type ? argvs.type : 'html',
    quick: argvs.quick || argvs.q
  };

  console.log( chalk.gray('---------------------') );
  console.log( chalk.green(ASCII));
  console.log(chalk.green(`Current Environment: '${chalk.cyan.bold(args.env)}'`));
  console.log(chalk.green(`Editing File Type: [.${chalk.cyan.bold(args.pageExt)}]`));
  if( args.quick ) console.log( chalk.yellow('Skipping Images...'));
  console.log( chalk.gray('---------------------') );

  return args;
}

const argv = argvParser();
export default argv;
