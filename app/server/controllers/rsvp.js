'use strict';
var models = require('../models/');

// Endpoint for post signup
var postRSVP = function(req, res) {
    var email = req.body.email;
    var name = req.body.name;
    var attending = req.body.attending;
    var guest = req.body.guest;
    var guestName = req.body.guestName;

    // Insert into db.
    models.RSVP.create({
        email: email,
        name: name,
        attending: attending,
        guest: guest,
        guestName: guestName
    }).then(function() {
        res.json({msg: 'Success!'});
    }).catch(models.Sequelize.ValidationError, function (err) {
        // Respond with validation errors.
        return res.status(422).json(err.errors);
    }).catch(function(err) {
        return res.status(400).json(err.errors);
    });
};

exports.postRSVP = postRSVP;
