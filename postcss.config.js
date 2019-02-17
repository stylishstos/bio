module.exports = {
    plugins: [
        require('postcss-import')({
            plugins: [
                require('postcss-discard-comments')()
            ]
        }),
        require('postcss-url')({
            url: 'rebase'
        }),
        require('postcss-mixins')(),
        require('postcss-for')(),
        require('postcss-each')(),
        require('postcss-custom-media')({
            extensions: {
                "--small": "screen",
                "--small-only": "screen and (max-width: 47.9375em)",
                "--medium": "screen and (min-width: 48em)",
                "--medium-only": "screen and (min-width: 48em) and (max-width: 64em)",
                "--large": "screen and (min-width: 64.0625em)",
                "--large-only": "screen and (min-width: 64.0625em) and (max-width: 90em)",
                "--xlarge": "screen and (min-width: 90.0625em)",
                "--xlarge-only": "screen and (min-width: 90.0625em) and (max-width: 120em)",
                "--xxlarge": "screen and (min-width: 120.0625em)",
                "--xxlarge-only": "screen and (min-width: 120.0625em) and (max-width: 99999999em)"
            }
        }),
        require('postcss-custom-properties')(),
        require('postcss-strip-units')(),
        require('postcss-calc')(),
        require('postcss-color-function')(),
        require('postcss-nested')(),
        require('autoprefixer')({
            browsers: [
                'last 2 versions',
                'ie >= 10',
                'android >= 4',
                'ios >= 8'
            ]
        })
    ]
};