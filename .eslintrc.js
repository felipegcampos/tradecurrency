module.exports = {
  extends: 'airbnb',
  env : {
    browser: true,
    jest: true,
  },
  rules: {
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/href-no-hash': 0,
    'import/no-named-as-default': 0,
  },
  parser: 'babel-eslint',
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    }
  }
};