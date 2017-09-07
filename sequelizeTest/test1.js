const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/sjl');

const User = sequelize.define('user', 
    {
        un: {
            type: Sequelize.STRING,
            field: "username"
        },
        birthday: Sequelize.DATE
    },
    {
        timestamps: false
    }
);

// User.findOne({where: {username: 'sjl'}, attributes:['username']}).then(function(data){
//     console.log(data.get("username"));
//     console.log(data);

// }).catch(function(error){
//     console.log(error);
// })

// User.findAll({attributes:['username']}).then(function(data){
//     console.log(data);

// }).catch(function(error){
//     console.log(error);
// })

console.dir(User.tableAttributes.un.field);


// sequelize.sync()
//   .then(() => User.create({
//     username: 'sjl2',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.get({
//       plain: true
//     }));
//   });