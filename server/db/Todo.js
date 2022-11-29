const Sequelize = require('sequelize')
const db = require('./database.js')

const Todo = db.define('todo', {
    name: {
        type: Sequelize.STRING,
    },
    isDone: {
        type: Sequelize.BOOLEAN
    }
})

module.exports = Todo