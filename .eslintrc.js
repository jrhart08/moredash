module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'lodash',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'airbnb-typescript/base',
    'plugin:lodash/recommended',
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
    'linebreak-style': 'off',
    'lodash/prefer-lodash-method': 'warn',
  },
  overrides: [
    {
      files: ['src/**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
};
