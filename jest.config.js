module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 98,
      statements: 98,
      functions: 98,
      branches: 98,
    },
  },
};
