// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
