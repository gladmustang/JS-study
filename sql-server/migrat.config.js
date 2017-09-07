var mssql = require('./migrat-mssql');

module.exports = {
    plugins: [
        mssql({
            host: '172.21.138.26',
            port: 1433,
            user: 'DEALS_FCM',
            password: 'DEALS_FCM_L@G1N!@#$',
            database: 'DEALS_FCM_DEV',
            migratSchema: 'testSchema',
            migratTable: 'migrat',
            enableLocking: false,
            enableStateStorage: true,
            encrypt: false, // Use this if you're on Windows Azure 
        })
    ],
	migrationsDir: './migrations',
    localState: './mig_version',

};