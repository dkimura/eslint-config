const { rules: importRules } = require('./rules/import')
const { rules: reactRules } = require('./rules/react')

const rules = { ...importRules, ...reactRules }

module.exports = {
  overrides: [
    {
      // RuleSet for JavaScript
      files: ['**/*.js', '**/*.jsx'],
      extends: ['airbnb', 'airbnb/hooks', './base.js'],
      rules,
    },
    {
      // RuleSet for TypeScript
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['airbnb-typescript', 'airbnb/hooks', './base.js'],
      rules,
    },
  ],
}
