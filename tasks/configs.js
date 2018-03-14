import yargs from 'yargs';

export const env = yargs.argv.p ? 'production' : 'development';
export const production = env === 'production' ? true : false;

export const baseDir = {
  static: './static',
  src: './src',
  dist: './dist',

  styles: {
    src: 'sass/**/*.scss',
    dest: 'css/',
  },

  scripts: {
    src: 'js/**/*.js',
    dest: 'js/',
  },

  images: {
    src: 'img/**/*',
    dest: 'img/'
  }
};

export const configs = {
  pages : {
    extensions: ['.html', '.php']
  },

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
  },

  images: {
    options: {
      verbose: true,
    },
    quality: {
      jpeg: 70,
      png : 70
    }
  },

  browsersync: {
    proxy: false,
    watch: {
      pages: ['**/*.html', '**/*.php'],
      styles: 'css/**/*.css',
      images: 'img/**/*.*',
      scripts: 'js/**/*.js',
    },
    options: {}
  },

  watcher: {
    remove: true,
    files: {
      scripts: true,
      images: true,
      styles: true
    }
  }
};
