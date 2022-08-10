"use strict";
const path = require('path');
// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {
    // Path to your entry point. From this file Webpack will begin its work
    entry: './src/pokemonAPI.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
//# sourceMappingURL=webpack.config.js.map