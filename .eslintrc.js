module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:cypress/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'cypress'
  ],
  rules: {
    'no-use-before-define': 'off',
    'no-tabs': 'off',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    },
    jest: {
      version: 26
    }
  },
  overrides: [
    {
      files: [
        '**/*.test.js'
      ],
      plugins: ['jest'],
      env: {
        jest: true
      },
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      ...require('eslint-plugin-jest').configs.recommended
    }
  ]
}
