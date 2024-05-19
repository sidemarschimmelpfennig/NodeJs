const { STRING, TEXT } = require('sequelize')
const connection = require('./database')

const Question = connection.define('question',{
    title : {
        type : STRING,
        allowNull : false
    },
    description : {
        type : TEXT,
        allowNull : false
    }

} )

Question.sync({force : false})
.then(()=>{}) // não força a criação só cria uma vez

module.exports = Question