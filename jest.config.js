module.exports = {
  rootDir: 'src',
  setupFilesAfterEnv: [
    '../setupTests.js',
  ],
  collectCoverageFrom: [
    '**/*.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90,
      functions: 90,
      branches: 90,
    },
  },
};
