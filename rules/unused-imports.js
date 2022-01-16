const rules = {
  '@typescript-eslint/no-unused-vars': 'off',
  'no-unused-vars': 'off',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],
}

module.exports = { rules }
