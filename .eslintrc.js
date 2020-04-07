module.exports = {
  root: true,
  extends: ['standard', 'plugin:vue/recommended'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', 120, 2, 80],
    'max-statements': ['error', 32],
    'no-console': 'off',
    'no-empty': 'error',
    'no-extra-semi': 'error',
    'no-prototype-builtins': 'off',
    'no-return-await': 'warn',
    'no-unused-vars': 'error',
    'object-shorthand': ['error', 'always'],
  }
}
