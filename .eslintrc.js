module.exports = {
  env: {
    node: true,
    jest: true,
  },
  root: true,
  extends: ['./index.js'],
  parserOptions: {
    project: './tsconfig.json',
  },
}
