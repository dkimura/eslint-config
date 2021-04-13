const rules = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'all',
      ignoreRestSiblings: false,
      argsIgnorePattern: '^_',
    },
  ],
}

module.exports = { rules }
