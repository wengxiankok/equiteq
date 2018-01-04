import browsersync from 'browser-sync';

// import utilities
import {paths} from './configs/_configs';

const config = {
  logLevel: 'info',
  logFileChanges: false,
  server: paths.build,
  // proxy: 'website.local',
  files: `${paths.build}/**/*.*`
};

export default function server(){
  browsersync.init( config );
}
