const { rules: typeScriptRules } = require('./rules/typescript')

module.exports = {
  overrides: [
    {
      // RuleSet for JavaScript
      files: ['**/*.js', '**/*.jsx'],
      extends: ['prettier'],
    },
    {
      // RuleSet for TypeScript
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      rules: {
        ...typeScriptRules,
      },
    },
  ],
}
