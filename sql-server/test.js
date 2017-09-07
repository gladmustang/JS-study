const config = {
    user: 'DEALS_FCM',
    password: 'DEALS_FCM_L@G1N!@#$',
    server: '172.21.138.26', // You can use 'localhost\\instance' to connect to named instance 
    database: 'DEALS_FCM_DEV',
 
    options: {
        //encrypt: true // Use this if you're on Windows Azure 
    }
}


const sql = require('mssql')

// var vPool = new sql.ConnectionPool(config);
// vPool.connect(config).then(pool => {

var client=null;
 
sql.connect(config).then(pool => {
    // Query 
    client=pool;
    return pool.request()
    .input('input_parameter', sql.Int, 3)
    .query('select * from faast.core_roles where cr_uid = @input_parameter')
}).then(result => {
    console.dir(result);
    //sql.close();
}).catch(err => {
    // ... error checks 
    console.log(err)
});



client.request()
    .input('input_parameter', sql.Int, 3)
    .query('select * from faast.core_roles where cr_uid = @input_parameter').then(result => {
    console.dir(result);
    sql.close();
}).catch(err => {
    // ... error checks 
    console.log(err)

});



sql.on('error', err => {
    // ... error handler 
})


