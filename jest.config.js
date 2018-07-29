process.env.APP_ENV = 'test';
process.env.PRODUCT_NAME = 'sample';

process.env = {
  ...process.env,
  TEST_URL: 'http://localhost',
  API_URL: 'http://localhost:3000/api',
  USER_LOGIN: 'user@gmail.com',
  USER_PASSWORD: 'pa$$w0rD',
};

module.exports = {
  roots: ['<rootDir>'],
  collectCoverageFrom: ['core/src/**/*.js'],
  setupFiles: ['<rootDir>scripts/config/polyfills.js'],
  testMatch: ['<rootDir>core/src/**/?(*.)spec.js'],
  testEnvironment: 'node',
  testURL: process.env.TEST_URL,
  transform: {
    '^.+\\.js$': '<rootDir>scripts/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>scripts/config/jest/cssTransform.js',
    '^(?!.*\\.(js|css|json)$)': '<rootDir>scripts/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$', '^.+\\.module\\.(css|sass|scss)$'],
  moduleFileExtensions: ['js', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@core(.*)$': '<rootDir>/core/src/$1',
    '^@components(.*)$': '<rootDir>/components/src/$1',
    '^@assets(.*)$': '<rootDir>/components/src/assets/$1',
  },
};
