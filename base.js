const { rules: typeScriptRules } = require('./rules/typescript')
const { rules: sortRules } = require('./rules/sort')
const { rules: unusedImportsRules } = require('./rules/unused-imports')

module.exports = {
  overrides: [
    // RuleSet for JavaScript
    {
      extends: ['prettier'],
      files: ['**/*.js', '**/*.jsx'],
      plugins: ['unused-imports'],
      rules: { ...sortRules, ...unusedImportsRules },
    },
    // RuleSet for TypeScript
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['typescript-sort-keys', 'unused-imports'],
      rules: {
        ...sortRules,
        ...typeScriptRules,
        ...unusedImportsRules,
      },
    },
  ],
  plugins: ['simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
}
