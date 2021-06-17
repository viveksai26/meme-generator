module.exports = {
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    jest: true
  },
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  plugins: ['typescript'],
  rules: {
    'no-undef': [
      'error',
      {
        typeof: true
      }
    ],
    'one-var': ['error', 'never'],
    'no-multi-assign': 'error',
    'no-plusplus': 'error',
    'operator-linebreak': ['error', 'after'],
    'dot-notation': 'error',
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'no-const-assign': 'error',
    'prefer-const': 'error',
    'no-new-object': 'error',
    'object-shorthand': 'error',
    'no-prototype-builtins': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-eval': 'error',
    'no-useless-escape': 'error',
    'func-style': ['error', 'declaration'],
    'wrap-iife': ['error', 'outside'],
    'no-loop-func': 'error',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'no-useless-constructor': 'off',
    'no-dupe-class-members': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'brace-style': 'error',
    'no-else-return': 'error',
    'id-length': 'error',
    camelcase: 'error',
    'no-underscore-dangle': 'error',
    'no-duplicate-imports': 'error',
    'no-iterator': 'error',
    'no-new-wrappers': 'error',
    radix: 'error',
    eqeqeq: 'error',
    'no-case-declarations': 'error',
    'no-nested-ternary': 'error',
    'no-mixed-operators': 'error',
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'no-whitespace-before-property': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2
      }
    ],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true
      }
    ],
    'block-spacing': 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'key-spacing': [
      'error',
      {
        afterColon: true
      }
    ],
    'no-multiple-empty-lines': 'error',
    'comma-dangle': ['error', 'never'],
    'spaced-comment': ['error', 'always']
  }
};
