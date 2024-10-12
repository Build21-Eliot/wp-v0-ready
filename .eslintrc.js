module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:tailwindcss/recommended',
      'prettier',
    ],
    plugins: ['@typescript-eslint', 'react', 'tailwindcss'],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  