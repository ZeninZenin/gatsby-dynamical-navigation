module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'utils/__tests__/testsUtils/*.',
    '(interfaces|inputs|outputs).[jt]s$',
  ]
};