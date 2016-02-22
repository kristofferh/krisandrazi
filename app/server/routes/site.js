'use strict';

var express = require('express');

var controllers = require('../controllers/');

module.exports = (function() {

    var router = express.Router();

    router.route('/')
        .get(function(req, res) {
            res.render('pages/index');
        });

    router.route('/rsvp')
        .post(function(req, res) {

        });

    return router;
})();
