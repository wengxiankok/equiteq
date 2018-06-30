/* ---- Import NPM Modules --------- */
const package = require('./../package.json');

/* ---- Import Configs ------------- */
import {env} from './configs';
import {log} from './utils';

const title = String.raw`
  ____        _ _
 |  _ \      (_) |
 | |_) | ___  _| |_ __
 |  _ < / _ \| | | '__|
 | |_) | (_) | | | |
 |____/ \___/|_|_|_|  v${package.version}

`;

const msg = log.string(`
  ${title}
  Environment: '${log.string(env.toUpperCase(), 'yellow')}'
  `, 'green'
);

console.log(msg);
