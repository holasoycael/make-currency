/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/@types/**/*',
    '!src/TYPES/**/*',
    '!src/helpers/**/*',
    '!src/stories/**/*',
    '!src/typings/**/*',
    '!src/models/**/types.ts',
    '!src/index.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  verbose: true,
  moduleNameMapper: {
    '^@helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@modules(.*)$': '<rootDir>/src/modules$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@TYPES(.*)$': '<rootDir>/src/TYPES$1',
    '^@typings(.*)$': '<rootDir>/src/typings$1'
  }
}
