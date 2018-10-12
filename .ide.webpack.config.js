const path = require('path');

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    alias: {
      '@core': path.resolve('core/src/'),
      '@components': path.resolve(__dirname, 'components/src/'),
    },
  },
};
