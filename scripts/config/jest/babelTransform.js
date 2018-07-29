'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    [require.resolve('babel-preset-env'),{
      "modules": false
    }],
    require.resolve('babel-preset-flow'),
    require.resolve('babel-preset-react'),
    require.resolve('babel-preset-stage-1'),
  ],
  plugins: [
    [
      require.resolve('babel-plugin-transform-runtime'),
      {
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: 'babel-runtime',
      },
    ],
  ],
});
