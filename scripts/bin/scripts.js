#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
const spawn = require('react-dev-utils/crossSpawn');

const args = process.argv.slice(2);

const scriptIndex = args.findIndex(x => x === 'start' || x === 'build' || x === 'test');
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

console.log(`running: ${script}`);
console.log(`------------------------------------------------\n`);

const result = spawn.sync('yarn', nodeArgs.concat(script), { stdio: 'inherit', cwd: './scripts' });
if (result.signal) {
  if (result.signal === 'SIGKILL') {
    console.log(
      'The build failed because the process exited too early. ' +
        'This probably means the system ran out of memory or someone called ' +
        '`kill -9` on the process.'
    );
  } else if (result.signal === 'SIGTERM') {
    console.log(
      'The build failed because the process exited too early. ' +
        'Someone might have called `kill` or `killall`, or the system could ' +
        'be shutting down.'
    );
  } else {
    console.log('Unexpected error');
  }
  process.exit(1);
}
process.exit(result.status);
