module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'html',
  ],
  extends: [
    'airbnb-base',
  ],
  globals: {
    context: 'readonly',
    given: 'readonly',
    chrome: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['off'],
    'no-new': ['off'],
    'no-bitwise': ['off'],
    'import/prefer-default-export': ['off'],
    'consistent-return': ['off'],
    'no-alert': ['off'],
    'no-restricted-globals': ['error', { name: 'console' }],
    'no-param-reassign': ['error', { props: false }],
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral > *'] }],
  },
};
