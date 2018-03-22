/* ---- Import NPM Modules --------- */
import del       from 'del';

/* ---- Import Configs ------------ */
import {baseDir} from './configs';
import {log}     from './utils';

const source = baseDir.dist;

export default function clean(){
  return del(source)
    .then(()=>{
      log.print('Dist folder cleaned.', 'red');
    });
}
