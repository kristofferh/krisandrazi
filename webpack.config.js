const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'app/client/scripts/index.js')
    ],
    devtool: 'eval-source-map',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.css$/, loader: 'style!css!postcss' },
            { test: /\.scss$/, loader: 'style!css!postcss!sass' },
            { test: /\.(gif|png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/client/index.ejs'
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
