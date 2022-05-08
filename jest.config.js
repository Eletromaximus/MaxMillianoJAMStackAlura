const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './'
})
const customJestConfig = {
  setupFilesAfterEnv: [
    '<rootDir>/setupTest.ts'
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom'
}
module.exports = createJestConfig(customJestConfig)
