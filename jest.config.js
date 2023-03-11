module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/TYPES/**/*',
    '!src/typings/**/*',
    '!src/models/**/types.ts',
    '!src/index.ts'
  ],
  modulePaths: ['<rootDir>/src/'],
  verbose: true,
  moduleNameMapper: {
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@modules(.*)$': '<rootDir>/src/modules$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@TYPES(.*)$': '<rootDir>/src/TYPES$1',
    '^@typings(.*)$': '<rootDir>/src/typings$1'
  }
}
