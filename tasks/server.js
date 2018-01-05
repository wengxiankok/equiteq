import browsersync from 'browser-sync';
import {spawn} from 'child_process';

// import utilities
import {paths, folders} from './configs/_configs';
import argv from './utils/arguments';

const staticOptions = {
  logLevel: 'info',
  logFileChanges: false,
  server: paths.build,
  // proxy: 'website.local',
  files: `${paths.build}/**/*.*`
};

const proxyOptions = {
  proxy: 'website.local',
  files: [
    `${paths.build}/${folders.stylesheets}/*.css`,
    `${paths.build}/*.${argv.pageExt}`,
    `${paths.build}/**/*.js`
  ]
};

function staticServer(){
  browsersync.init( staticOptions );
}

function proxyServer(done){
  const browsersync = spawn( 'browser-sync',
    [`start --reload-debounce 1000 --proxy "${proxyOptions.proxy}" --files "${proxyOptions.files}`],
    { shell: true, stdio: 'inherit' }
  );

  browsersync.on('close', (code) => {
    console.log(`BrowserSync exited with code ${code}`);
    done();
  });
}

let server = staticServer;
if( argv.pageExt === 'php' ) server = proxyServer;

export default server;
