/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest/presets/default',
  testEnvironment: 'jest-environment-jsdom', // Make sure this is correctly set
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
