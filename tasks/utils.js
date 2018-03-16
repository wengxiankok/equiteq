/* ---- Import Node.js Fuctions ---- */
import path     from 'path';

/* ---- Import NPM Modules --------- */
import log      from 'fancy-log';
import chalk    from 'chalk';
import through  from 'through2';
import filesize from 'filesize';

// Prints out size of streamed files
export function size(){
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

// Standardized 'path.posix.join' function
export function join(...paths){
  return path.posix.join(paths.toString());
}

// Logs out messages
class Logger{
  print(message, color){
    log(chalk`{${color} ${message}}`);
  }

  string(message, color){
    return chalk`{${color} ${message}}`;
  }
}

/* ---- Exports ---------------------- */
export const logger = new Logger();
