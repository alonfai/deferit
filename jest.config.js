module.exports = {
  // testEnvironment: 'jsdom',
  // preset: 'jest-expo',
  // preset: 'react-native',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/', 'cypress'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
};
