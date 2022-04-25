module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsdoc/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsdoc'],
  rules: {
    'jsdoc/require-file-overview': [
      2,
      {
        tags: {
          file: {
            initialCommentsOnly: true,
            mustExist: true,
            preventDuplicates: true,
          },
          author: {
            mustExist: true,
            preventDuplicates: true,
          },
        },
      },
    ],
  },
};
