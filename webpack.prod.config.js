"use strict";

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const webpack = require('webpack');
const path = require('path');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'Content/js');

module.exports = merge(baseConfig, {
    mode: "production"
});