const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/type-todo', { logging: false });

module.exports = db;

//do not touch!!!