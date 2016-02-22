var env = process.env.NODE_ENV || 'development';
var dbConfig = require('./db')[env];

var config = {
    development: {
        // url to be used in link generation
        url: 'http://localhost:3000',
        // mysql connection settings
        db: dbConfig,
        // server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    test: {
        // url to be used in link generation
        url: 'http://localhost:3000',
        // mysql connection settings
        db: dbConfig
    },
    staging: {
        // url to be used in link generation
        url: 'http://localhost:3000',
        // mysql connection settings
        db: dbConfig
    },
    production: {
        // url to be used in link generation
        url: 'http://milestonesapp.com',
        // mysql connection settings
        db: dbConfig
    }
};
module.exports = config;
