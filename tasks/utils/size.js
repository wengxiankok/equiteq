import map from 'map-stream';
import chalk from 'chalk';
import log from 'fancy-log';
import getFileSize from 'filesize';

/* eslint-disable */
module.exports = function(){
  'use strict';

  return map(function(file,callback){
  	const filenameShort = file.path.split(/\/|\\/).pop()

  	//Check if file.stat exists (gulp.concat removes it for example)
  	const filesize = file.stat ? getFileSize(file.stat.size) : getFileSize(Buffer.byteLength(String(file.contents)));
    log( `Output: ${chalk.cyan(filenameShort)}[${chalk.magenta(filesize)}]`);

  	callback(null,file);
  });
};
