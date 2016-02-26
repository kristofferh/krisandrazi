module.exports = {
    'development': {
        'username': 'local-dev',
        'password': '',
        'database': 'krisandrazi',
        'host': 'localhost',
        'dialect': 'mysql',
        'port': 3306,
        'logging': console.log
    },
    'test': {
        'username': 'local-dev',
        'password': '',
        'database': 'krisandrazi',
        'host': 'localhost',
        'dialect': 'mysql',
        'port': 3306,
        'logging': console.log
    },
    'staging': {
        'username': 'local-dev',
        'password': '',
        'database': 'krisandrazi',
        'host': 'localhost',
        'dialect': 'mysql',
        'port': 3306,
        'logging': console.log
    },
    'production': {
        'username': process.env.RDS_USERNAME,
        'password': process.env.RDS_PASSWORD,
        'database': 'krisandrazi',
        'host': process.env.RDS_HOSTNAME,
        'dialect': 'mysql',
        'port': process.env.RDS_PORT
    }
};
