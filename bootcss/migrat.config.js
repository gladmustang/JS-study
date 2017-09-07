var postgres = require('migrat-postgres');

module.exports = {
    plugins: [
        postgres({
            host: 'localhost',
            port: 5432,
            user: 'yourusername',
            password: 'yourpassword',
            database: 'yourdatabase',
            migratSchema: 'public',
            migratTable: 'migrat',
            enableLocking: true,
            enableStateStorage: true
        })
    ],
	migrationsDir: './migrations'
};