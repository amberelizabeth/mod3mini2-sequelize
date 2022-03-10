const Sequelize = require('sequelize');
const config = require('../config');
const Department = require('./Department');

const Employee = config.define('Employee', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false});

module.exports = Employee;