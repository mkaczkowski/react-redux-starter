module.exports = {
  presets: [
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
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
  overrides: [
    {
      test: ['./config'],
      presets: [['@babel/preset-env']],
    },
  ],
};
