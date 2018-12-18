import serverConfig from './server.json';

export const env = process.argv.indexOf('-p') !== -1 ? 'production' : 'development';
export const production = env === 'production' ? true : false;

export const baseDir = {
  static: './static',
  src: './source',
  dist: './dist',

  styles: {
    src: ['scss/**/*.scss', 'css/**/*.css'],
    dest: 'css/',
  },

  scripts: {
    src: 'js/**/*.js',
    dest: 'js/',
  },

  images: {
    src: 'img/**/*',
    dest: 'img/'
  },

  pages: {
    src: ['**/*.html', '**/*.php'],
    dest: '/'
  },

  svg: {
    src: 'svg/**/*.svg',
    dest: 'svg/'
  }
};

export const configs = {
  styles: {
    sass: {
      includePaths: ['node_modules/']
    },
    cssnano: {
      preset: 'default'
    },
    autoprefixer: {
      browsers: ['last 2 versions']
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

  browsersync: serverConfig,

  ftp: {
    host: '',
    user: '',
    port: '',
    password: '',
    directory: '',
    secure: true
  },

  svg: {
    prefix: 'icon-',
  },
};
