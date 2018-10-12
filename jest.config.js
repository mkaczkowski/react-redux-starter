
module.exports = {
  roots: ['<rootDir>'],
  collectCoverageFrom: ['core/src/**/*.ts'],
  setupFiles: ['<rootDir>scripts/config/polyfills.js'],
  testMatch: ['<rootDir>core/src/**/?(*.)spec.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': '<rootDir>scripts/config/jest/babelTransform.js',
    '^.+\\.tsx$': '<rootDir>scripts/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>scripts/config/jest/cssTransform.js',
    '^(?!.*\\.(js|ts|tsx|css|json)$)': '<rootDir>scripts/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$', '^.+\\.module\\.(css|sass|scss)', './dist'],
  moduleFileExtensions: ['js', 'ts', 'tsx','json', 'node'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@core(.*)$': '<rootDir>/core/src/$1',
    '^@components(.*)$': '<rootDir>/components/src/$1',
    '^@assets(.*)$': '<rootDir>/components/src/assets/$1',
  },
};
