module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
