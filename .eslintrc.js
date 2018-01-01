export default {
  env: {
    es6: true,
    browser: true,
    node: true,
    meteor: true
  },

  extends: [
    'airbnb',
    'plugin:meteor/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parser: 'babel-eslint',
  plugins: ['react', 'meteor', 'jsx-a11y'],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: true,
      jsx: true
    }
  },

  globals: {
    Meteor: true
  },

  rules: {
    semi: 'off',
    'no-underscore-dangle': ['off'],
    'import/no-extraneous-dependencies': 'off',
    'import/no-absolute-path': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': ['off', 'never'],
    'jsx-a11y/href-no-hash': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
    'global-require': 0,
    'comma-dangle': ['error', 'ignore']
  }
};
