'use strict';
var models = require('../models/');

// Endpoint for post signup
var postRSVP = function(req, res) {
    var email = req.body.email;

    // Insert into db.
    models.RSVP.create({
        email: email
        // @todo: add more fields
    }).then(function(user) {
        res.json(user);
    }).catch(models.Sequelize.ValidationError, function (err) {
        // Respond with validation errors.
        return res.status(422).json(err.errors);
    }).catch(function(err) {
        return res.status(400).json(err.errors);
    });
};

exports.postRSVP = postRSVP;
