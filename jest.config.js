/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'd.ts'],
  transform: {
    '^.+\\.ts': 'ts-jest'
  },
  testMatch: ['**/*.test.ts'],
  testPathIgnorePatterns: ['./node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['index.ts'],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
