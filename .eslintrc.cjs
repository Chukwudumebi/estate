module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
  },
};
