const path = require('path');
const nodeExternals = require('webpack-node-externals');
const context = path.resolve(__dirname, './src');

module.exports = {
    target: 'node',
    node: {
        __dirname: true,
    },
    context,
    externals: [nodeExternals()],
    entry: {
        backend: [
            path.resolve(__dirname, './src/app.js'),
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './src')
        ],
        extensions: ['.js', '.ts', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs|ts)$/,
                exclude: [
                    /node_modules/,
                ],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
};