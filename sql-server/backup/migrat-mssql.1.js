var pkg = require('./package.json');
var fs = require('fs');

var sql = require('mssql');


const config = {
    user: 'DEALS_FCM',
    password: 'DEALS_FCM_L@G1N!@#$',
    server: '172.21.138.26', // You can use 'localhost\\instance' to connect to named instance 
    database: 'DEALS_FCM_DEV',
 
    options: {
        //encrypt: true // Use this if you're on Windows Azure 
    }
}

module.exports = function(options) {
   return function(migrat) {

       var client;
       migrat.setPluginName('migrat-mssql');
       migrat.setPluginVersion(pkg.version);


       	function createClient(callback) {
                var pool = new sql.ConnectionPool(config, err => {
                    console.log(err);
                    callback(err, pool);

            })
		}



       // register loaders, templates, etc here
        migrat.registerLoader('*.mssql', function(file, callback) {
            callback(null, {
                up: function(context, callback) { 
                    client.request() // or: new sql.Request(pool1)
                        .query('insert into test(id, name) values (6, \'tttt\');', (err, result) => {
                            // ... error checks
                            console.dir(result);
                            callback();
                    })
                   
                 },
                down: function(context, callback) { 
                    console.log("down running");
                    callback();
                    
                 },
                check: function(context, callback) { 
                    console.log("check running");
                    callback();
                 }
            });
        });

        // migrat.registerTemplate('mssql', function(details, callback) {
        //     var renderedTemplate = 'this is just a template';
        //     callback(null, renderedTemplate);
        // });

        migrat.registerTemplate('mssql', function(details, callback) {
			fs.readFile(__dirname + '/lib/template.mssql', 'utf8', function(err, source) {
				if (err) return callback(err);
				callback(null, source
					.replace('{{date}}', (new Date(details.timestamp)).toString())
					.replace('{{attribution}}', details.user ? ' by ' + details.user : '')
				);
			});
		});


        migrat.registerHook('initialize', function(callback) {
			createClient(function(err, pool) {
				if (err) {
					console.log(err);
                    pool.close();
					return callback(err);
				}

				client = pool;
                callback();
			});
		});

        migrat.registerHook('terminate', function(callback) {
			if (client) client.close();
			callback();
		});

        migrat.registerGlobalStateStore({
				get: function(callback) {
                    callback(null, "2")
				},
				set: function(state, callback) {
					callback();
				}
		});
       
   };    
};