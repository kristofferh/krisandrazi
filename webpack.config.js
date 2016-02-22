const path = require('path');
const webpack = require('webpack');

const config = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'app/client/scripts/app.js')
    ],
    devtool: 'eval-source-map',
    output: {
        path: path.join(__dirname, '/public/scripts'),
        filename: 'app.js',
        publicPath: '/scripts'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.css$/, loader: 'style!css!postcss' },
            { test: /\.scss$/, loader: 'style!css!postcss!sass' }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.css', '.scss']
    },
    postcss: [
        require('autoprefixer')
    ]

};

module.exports = config;
