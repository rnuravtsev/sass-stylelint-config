module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
        'stylelint-config-clean-order'
    ],
    plugins: [
        'stylelint-scss'
    ],
    rules: {
        'import-notation': 'string',
        'selector-class-pattern': null,
        'scss/selector-no-union-class-name': true,
        'selector-max-class': [3],
        'max-nesting-depth' : [2, {
            'ignore': ['pseudo-classes'],
            'ignoreAtRules': ['media']
        }],
    }
}


