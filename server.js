'use strict';

// Get the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var helmet = require('helmet');
var cookieParser = require('cookie-parser');

var env = process.env.NODE_ENV || 'development';
var engine = require('ejs-mate');

// Routes
var siteRoutes = require('./app/server/routes/site');

// Models
var models = require('./app/server/models');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));

// Use cookie parser
app.use(cookieParser());

if (env === 'development') {
    var webpack = require('webpack');
    var webpackMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpackConfig = require('./webpack.config.js');
    var compiler = webpack(webpackConfig);
    var middleware = webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
}

// Use the passport package in our application
app.use(passport.initialize());

app.use(helmet.hsts({
    maxAge: 7776000000,
    includeSubdomains: true
}));

app.engine('ejs', engine);
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Register routes
app.use('/', siteRoutes);

// 404.
app.use(function(req, res) {
    res.status(404).send('404: Page not Found');
});

models.sequelize.sync().then(function () {
    app.listen(port);
});
