const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, '.build/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            // new webpack.optimize.UglifyJsPlugin()
            {
                test: /\.js/,
                use: "babel-loader",
                exclude: "/node_modules/",
                include: path.resolve(__dirname, './src/js'),
            }
        ]
    }
}