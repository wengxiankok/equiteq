/* ---- Import NPM Modules --------- */
import log      from 'fancy-log';
import chalk    from 'chalk';
import through  from 'through2';
import filesize from 'filesize';

export function size() {
  function logger(name, size) {
      log( chalk.yellow(`Output: ${chalk.green(name)}[${chalk.magenta(filesize(size))}]`));
  }

  return through.obj((file, enc, cb)=> {
    const name = file.relative;
    const size = file.contents.length;

    logger(name, size);

    cb(null, file);
  });
}

export function logger(message, color){
  log(chalk`{${color} ${message}}`);
}
