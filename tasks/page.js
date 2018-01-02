import gulp  from 'gulp';
import strip from 'gulp-strip-comments';
import yargs from 'yargs';
import chalk from 'chalk';
import log from 'fancy-log';

// import config
import configs from './../_config';

const argv = yargs.argv;

const ext         = argv.php ? 'php' : 'html';
const entry       = `${configs.paths.source}/**/*.${ext}`;
const destination = `${configs.paths.build}`;

function page(){
  log(chalk.green(`Editing file type: [${chalk.cyan.bold(ext)}]`));

  return gulp.src(entry)
    .pipe( strip() )
    .pipe( gulp.dest(destination) );
}

export default page;
