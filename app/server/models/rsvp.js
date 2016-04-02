'use strict';

module.exports = function(sequelize, DataTypes) {
    var RSVP = sequelize.define('RSVP', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: 'That email does not look real!'
                }
            }
        },
        attending: {
            type: DataTypes.BOOLEAN, // Yes or no.
            allowNull: false,
            defaultValue: true
        },
        guest: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        guestName: {
            type: DataTypes.STRING
        }
    });

    return RSVP;
};
