const rules = {
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'import/order': 'off',
  'react/jsx-sort-props': 'error',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // Node.js builtins. You could also generate this regex if you use a `.js` config.
        // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
        [
          '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
        ],
        // Packages. `react` related packages come first.
        ['^react', '^@?\\w'],
        // Internal packages.
        ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
        // Side effect imports.
        ['^\\u0000'],
        // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Style imports.
        ['^.+\\.s?css$'],
      ],
    },
  ],
  'sort-destructure-keys/sort-destructure-keys': 'error',
  'sort-imports': 'off',
  'sort-keys-fix/sort-keys-fix': 'warn',
  'typescript-sort-keys/interface': 'error',
  'typescript-sort-keys/string-enum': 'error',
}

module.exports = { rules }
