export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true
      }
    ]
    // process `*.tsx` files with `ts-jest`
  },
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(svg)$': 'jest-svg-transformer',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1'
  }
}
