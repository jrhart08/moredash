module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90,
      functions: 90,
    },
  },
};
