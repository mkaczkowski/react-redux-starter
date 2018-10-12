'use strict';

const fs = require('fs');
const path = require('path');
const paths = require('./paths');

let packageJson;
try{
  packageJson = require(paths.appRoot + '/package.json');
}catch(err){}


const APP_ENV = process.env.APP_ENV;
if (!APP_ENV) throw new Error('APP_ENV is not defined');

delete require.cache[require.resolve('./paths')];

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter);

function getClientEnvironment(env, publicUrl) {
  var dotenvFiles = [
    path.resolve(`.env.${APP_ENV}.local`),
    path.resolve(`${paths.appRoot}/.env.${APP_ENV}`),
    APP_ENV !== 'test' && path.resolve(paths.root, `.env.local`),
    path.resolve(`${paths.appRoot}/.env`),
  ].filter(Boolean);

  dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
      require('dotenv-expand')(
        require('dotenv').config({
          path: dotenvFile,
        })
      );
    }
  });

  const raw = Object.keys(process.env).reduce(
    (env, key) => {
      env[key] = process.env[key];
      return env;
    },
    {
      ...{
        NODE_ENV: env || 'development',
        APP_ENV: process.env.APP_ENV || 'development',
        PUBLIC_URL: publicUrl,
        PRODUCT_VERSION: packageJson && packageJson.version,
      },
    }
  );
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };

  return { raw, stringified };
}

module.exports = getClientEnvironment;
