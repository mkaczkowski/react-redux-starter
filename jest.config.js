module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>**/?(*.)spec.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': '<rootDir>lib-scripts/config/jest/babelTransform.js',
    '^.+\\.tsx$': '<rootDir>lib-scripts/config/jest/babelTransform.js',
    '^.+\\.ts$': '<rootDir>lib-scripts/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>lib-scripts/config/jest/cssTransform.js',
    '^(?!.*\\.(js|ts|tsx|css|json)$)': '<rootDir>lib-scripts/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$', '^.+\\.module\\.(css|sass|scss)', './dist'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    // '^@core(.*)$': '<rootDir>/core/src/$1',
    // '^@components(.*)$': '<rootDir>/components/src/$1',
    // '^@assets(.*)$': '<rootDir>/components/src/assets/$1',
  },
};
