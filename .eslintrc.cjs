module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-var': 'error',
    'no-extra-semi': 0,
    'no-empty': 'warn',
    'no-empty-function': 'warn',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'warn',
    'no-use-before-define': 0,
    'max-len': 'off',
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-comment-textnodes': 'off'
  }
};
