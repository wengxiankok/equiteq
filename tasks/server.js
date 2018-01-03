import browsersync from 'browser-sync';

// import utilities
import {paths, folders} from './configs/_configs';

const config = {
  logLevel: 'info',
  logFileChanges: false,
  server: paths.build,
  // proxy: 'website.local',
  files: [
    `${paths.build}/${folders.stylesheets}/*.css`,
    `${paths.build}/${folders.javascript}/*.js`,
    `${paths.build}/*.html`,
  ]
};

export default function server(){
  browsersync.init( config );
}
