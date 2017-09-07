
const sql = require('mssql')


const config = {
    user: 'DEALS_FCM',
    password: 'DEALS_FCM_L@G1N!@#$',
    server: '172.21.138.26', // You can use 'localhost\\instance' to connect to named instance 
    database: 'DEALS_FCM_DEV',
 
    options: {
        //encrypt: true // Use this if you're on Windows Azure 
    }
}

const pool = new sql.ConnectionPool(config);
pool.connect(err => {
    // ... error checks
    console.log(err);

    // new sql.Request(pool).query('insert into test(id, name) values (6, \'tttt\');delete from test where id=6', function(err, result) {
    //             // ... error checks
    //             console.log(err);
    //             console.dir(result);
    // });

    new sql.Request(pool).query('select * from information_schema.schemata where schema_name=\'dbo\'', function(err, result) {
                // ... error checks
                console.log(err);
                console.dir(result);
    });


    // new sql.Request()
    // .input('input_parameter', sql.Int, value)
    // .output('output_parameter', sql.VarChar(50))
    // .execute('procedure_name', (err, result) => {
    //     // ... error checks

    //     console.dir(result)
    // })
})



pool.on('error', err => {
    // ... error handler
})



//pool.close();

