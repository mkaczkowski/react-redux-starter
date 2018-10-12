// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        debug: false,
        forceAllTransforms: process.env === 'production',
      },
    ],
    '@babel/preset-react',
  ];

  const plugins = ['@babel/plugin-proposal-class-properties'];

  const overrides = [
    {
      test: ['./config'],
      presets: [['@babel/preset-env']],
    },
  ];

  return {
    presets,
    plugins,
    overrides,
  };
};
