'use strict';

var express = require('express');
var controllers = require('../controllers/');

module.exports = (function() {

    var router = express.Router();

    router.route('/rsvp')
        .post(controllers.Rsvp.postRSVP);

    return router;
})();
