import yargs from 'yargs';

export const env = yargs.argv.p ? 'production' : 'develop';
export const production = env === 'production' ? true : false;

export const baseDir = {
  source: './src',
  dist: './dist',

  styles: {
    src: 'sass/**/*.scss',
    dest: 'css/',
  }
};

export const configs = {
  styles: {
    sass: {

    },
    cleanCSS: {
      level: 1,
      debug: true
    },
    autoprefixer: {
      browsers: ['last 2 version']
    }
  }
};
