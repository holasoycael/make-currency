module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/locale/**/*',
    '!src/typings/**/*',
    '!src/models/**/types.ts',
    '!src/index.ts'
  ],
  modulePaths: ['<rootDir>/src/'],
  verbose: true,
  moduleNameMapper: {
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@locale(.*)$': '<rootDir>/src/locale$1',
    '^@typings(.*)$': '<rootDir>/src/typings$1'
  }
}
