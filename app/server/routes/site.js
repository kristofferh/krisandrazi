'use strict';

var express = require('express');
var controllers = require('../controllers/');

module.exports = (function() {

    var router = express.Router();

    router.route('/rsvp')
        .get(function(req, res) {
            console.log('hi');
            res.render('pages/index');
        })
        .post(function(req, res) {

        });

    return router;
})();
