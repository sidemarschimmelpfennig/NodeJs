const { TEXT, INTEGER } = require('sequelize')
const connection = require('./database')


const Response = connection.define('response',{
    body : {
        type : TEXT,
        allowNull : false
    },
    questionId : {
        type : INTEGER,
        allowNull : false
    }

} )

Response.sync({force : false})

module.exports = Response