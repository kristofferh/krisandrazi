const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        path.join(__dirname, 'app/client/scripts/index.js')
    ],
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'app.min.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.css$/, loader: 'style!css!postcss' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') },
            { test: /\.(gif|png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.svg$/, loader: 'svg-inline' }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('app.min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/client/index.ejs',
            hash: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.css', '.scss']
    },
    postcss: [
        require('autoprefixer')
    ]

};

module.exports = config;
