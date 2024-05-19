const { Sequelize } = require("sequelize");

const connection = new Sequelize('ajudaqui', 
process.env.DB_USERNAME, 
process.env.DB_PASSWORD,{
    host : process.env.DB_HOST,
    dialect : process.env.DB_DIALECT
})

module.exports = connection;