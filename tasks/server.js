import browsersync from 'browser-sync';

// import config
import configs from './../_config';

export default function server(){
  browsersync.init( configs.browsersync );
}
