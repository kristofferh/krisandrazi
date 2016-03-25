'use strict';

var express = require('express');
var controllers = require('../controllers/');

module.exports = (function() {

    var router = express.Router();

    router.route('/')
        .get(function(req, res) {
            res.send('nothing here yet');
        });

    router.route('/rsvp')
        .post(controllers.Rsvp.postRSVP);

    return router;
})();
