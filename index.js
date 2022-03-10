const express = require('express');
const app = express();

const config = require('./config');
const Employee = require('./Models/Employee');
const Department = require('./Models/Department');


config.authenticate().then(function(){
    console.log('Database is connected.');
    initAssociations();
}).catch(function(error){
    console.log(error);
});

function initAssociations(){
    Department.hasMany(Employee, {onDelete: 'CASCADE'});
    Employee.belongsTo(Department);

    config.sync().then((result)=>{
        console.log('Syncing model associations was successful.');
    }).catch((error)=>{
        console.log('Syncing error occurred');
    });
}

app.listen(3000, function(){
    console.log('Server listening on port 3000....');
});