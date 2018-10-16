'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    require.resolve('@babel/preset-typescript'),
    [
      require.resolve('@babel/preset-env'),
      {
        modules: 'commonjs',
      },
    ],
    require.resolve('@babel/preset-react'),
  ],
  plugins: [
    require.resolve('@babel/plugin-transform-runtime'),
    require.resolve('@babel/plugin-proposal-class-properties')
  ],
});
