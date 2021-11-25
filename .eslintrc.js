module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
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
    '@typescript-eslint'
  ],
  rules: {
    'no-use-before-define': 'off',
    'no-tabs': 'off',
  },
  settings: {
    react: {
      version: 'detect'
    },
    jest: {
      version: 27
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
      rules: {
        'jest/no-commented-out-tests': 'off'
      },
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      ...require('eslint-plugin-jest').configs.recommended
    }
  ]
}