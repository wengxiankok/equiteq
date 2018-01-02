import browsersync from 'browser-sync';

// import utilities
import configs from './../_config';

export default function server(){
  browsersync.init( configs.browsersync );
}
