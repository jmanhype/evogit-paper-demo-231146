/**
 * Jest configuration for EvoGit Paper Demo
 *
 * For more information, see:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // The test environment that will be used for testing
  testEnvironment: 'node',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json'],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/coverage/'
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '*.js',
    '!jest.config.js',
    '!coverage/**'
  ]
};
