const { rules: importRules } = require('./rules/import')
const { rules: reactRules } = require('./rules/react')

const rules = { ...importRules, ...reactRules }

module.exports = {
  overrides: [
    // RuleSet for JavaScript
    {
      extends: ['airbnb', 'airbnb/hooks', './base.js'],
      files: ['**/*.js', '**/*.jsx'],
      rules,
    },
    // RuleSet for TypeScript
    {
      extends: ['airbnb-typescript', 'airbnb/hooks', './base.js'],
      files: ['**/*.ts', '**/*.tsx'],
      rules,
    },
  ],
}
