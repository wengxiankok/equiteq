/* ---- Import NPM Modules --------- */
import del       from 'del';

/* ---- Import Configs ------------ */
import {baseDir} from './configs';
import {logger}  from './utils';

const source = baseDir.dist;

export default function clean(){
  return del(source)
    .then(()=>{
      logger.print('Dist folder cleaned.', 'red');
    });
}
