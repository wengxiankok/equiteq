import log from 'fancy-log';
import yargs from 'yargs';

const argv = yargs.argv;

export default function logger(){
  argv.env === 'production' ? log('prod') : log('dev');
}
