/* ---- Import NPM Modules --------- */
import del       from 'del';

/* ---- Import Configs ------------ */
import {baseDir} from './configs';
import {logger}  from './utils';

const source = baseDir.dist;

export default function clean(){
  return del(source)
    .then(()=>{
      logger('Dist folder cleaned.', 'red');
    });
}
