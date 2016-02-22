const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

const config = {
    entry: [
        path.join(__dirname, 'app/client/scripts/app.js')
    ],
    output: {
        path: path.join(__dirname, '/public/scripts'),
        filename: 'app-[hash].min.js',
        publicPath: '/scripts'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.css$/, loader: 'style!css!postcss' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('../styles/app-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new StatsPlugin('../../config/webpack.stats.json', {
            source: false,
            modules: false
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
