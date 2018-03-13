/* ---- Import NPM Modules --------- */
import del   from 'del';
import log   from 'fancy-log';
import chalk from 'chalk';

/* ---- Import Configs ------------ */
import {baseDir} from './configs';

const source = baseDir.dist;

export function clean(){
  return del(source)
    .then(log(chalk.red('Dist folder cleaned.')));
}
