module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'next',

    // configs for js files
    'airbnb',
    'airbnb/hooks',

    // dependencies on @typescript-eslint/eslint-plugin
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'simple-import-sort',

    // dependencies on @typescript-eslint/eslint-plugin
    '@typescript-eslint',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'no-use-before-define': 'off',
    'no-undef': 'off',

    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-useless-fragment': 'off',
  },
};
