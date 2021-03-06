module.exports = {
  'env': {
    'node': true,
    'es6': true,
    'mocha': true,
    'jasmine': true
  },
  'extends': [
    'eslint:all',
    'plugin:promise/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 9,
    'sourceType': 'module'
  },
  'plugins': ['promise'],
  'rules': {
    'indent': [
      'error',
      2,
      {'SwitchCase': 1}
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'dot-location': [
      'error',
      'property'
    ],
    'one-var': [
      'error',
      'never'
    ],
    'no-magic-numbers': 'off',
    'no-console': 'off',
    'sort-keys': 'off',
    'no-inline-comments': 'off',
    'no-process-env': 'off',
    'max-params': [
      'error',
      {'max': 4}
    ],
    'max-statements': [
      'error',
      11,
      {'ignoreTopLevelFunctions': true}
    ]
  }
};
