'use strict';

module.exports = function(sequelize, DataTypes) {
    var RSVP = sequelize.define('RSVP', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
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
        answer: {
            type: DataTypes.BOOLEAN, // Yes or no.
            allowNull: false
        },
        guest: {
            type: DataTypes.BOOLEAN
        },
        guestFirstName: {
            type: DataTypes.STRING
        },
        guestLastName: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.TEXT
        }
    });

    return RSVP;
};
