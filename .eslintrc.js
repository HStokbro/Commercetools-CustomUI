module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'graphql'],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        schemaJson: require('./src/generated/graphql.schema.json'),
      },
    ],
  },
};
