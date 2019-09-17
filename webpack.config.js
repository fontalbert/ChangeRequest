/// <binding ProjectOpened='Watch - Development' />
"use strict";

const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'Content/js');

module.exports = {
    mode: "development",
    entry: {
        main: SRC_DIR + "/main/index.jsx"
    },
    output: {
        path: SRC_DIR + '/bundles',
        filename: '[name].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
};