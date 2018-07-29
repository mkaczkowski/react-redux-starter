const path = require('path');

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.scss'],
    alias: {
      '@core': path.resolve(__dirname, 'core/src/'),
      '@components': path.resolve(__dirname, 'components/src/'),
      '@lib': path.resolve(__dirname, 'core/src/lib/'),
      '@story': path.resolve(__dirname, 'components/.storybook/'),
      modernizr$: path.resolve(__dirname, '.modernizrrc'),
    },
  },
};
