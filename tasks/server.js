/* ---- Import Node.js Fuctions ---- */
import path         from 'path';

/* ---- Import NPM Modules --------- */
import browsersync from 'browser-sync';

/* ---- Import Configs ------------ */
import {baseDir, configs} from './configs';
// import {size} from './utils';

// Define File Paths
const config = configs.browsersync;
const watchFiles = [];

// Define default options
const options = {
  files: watchFiles
};

for(const opt in config.options){
  options[opt] = config.options[opt];
}

// generate array of file paths to watch
for(const glob in config.watch){
  const g = config.watch[glob];

  if(typeof g === 'object') g.forEach(i => watchFiles.push(path.posix.join(baseDir.dist, i)));
  else watchFiles.push(path.posix.join(baseDir.dist, g));
}

// create proxy or static server
if(config.proxy) options['proxy'] = config.proxy;
else options['server'] = baseDir.dist;

export function server(){
  browsersync.init(options);
}
