module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'quotes': ['warn', 'single'],
        'comma-dangle': ['warn', 'always-multiline'],
        'camelcase': ['error'],
        'semi': ['warn', 'always']
    }
};