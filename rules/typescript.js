const rules = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      vars: 'all',
    },
  ],
}

module.exports = { rules }
