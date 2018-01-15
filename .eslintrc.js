module.exports = {
  // Some of this options is just for Webstorm to pick up
  // and prettier-standard works fine without those
  'extends': 'standard',

  'env': {
    'es6': true,
    'browser': true,
    'commonjs': true
  },

  'plugins': [
    'react'
  ],

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },

  'rules': {
    'object-curly-spacing': ['error', 'never'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'never',
      'afterOpening': 'never'
    }],
    'brace-style': [
      'error',
      'stroustrup'
    ]
  },

  'globals': [
    'describe',
    'before',
    'beforeEach',
    'after',
    'afterEach',
    'it',
    'expect'
  ].reduce(
    (res, key) => {
      res[key] = true
      return res
    },
    {}
  )
}