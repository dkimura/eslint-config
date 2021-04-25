const { rules: typeScriptRules } = require('./rules/typescript')
const { rules: sortRules } = require('./rules/sort')

module.exports = {
  overrides: [
    // RuleSet for JavaScript
    {
      extends: ['prettier'],
      files: ['**/*.js', '**/*.jsx'],
      rules: { ...sortRules },
    },
    // RuleSet for TypeScript
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['typescript-sort-keys'],
      rules: {
        ...sortRules,
        ...typeScriptRules,
      },
    },
  ],
  plugins: ['simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
}
