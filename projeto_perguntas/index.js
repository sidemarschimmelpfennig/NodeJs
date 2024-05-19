require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const cors = require('cors');

const routes = require("./routes.js");
const app = express();
const connection = require('./database/database.js');
const models = require('./database');

// Use helmet middleware
app.use(helmet());
app.use(cors())

// Definir CSP
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://code.jquery.com https://cdnjs.cloudflare.com");
    next();
  });
  
//Database Connection
connection
  .authenticate()
  .then(() => {
    console.log("Conectado ao Banco de Dados")
  })
  .catch((err) => {
    console.log(err)
  });

// Set views engine and location
app.set("view engine", "ejs");
app.use(express.static('public'));

// Use the bodyparser to execute the requirements
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use routes
app.use(routes);

// Inite server 
const server = process.env.SERVER_PORT || 3000; // Defina uma porta padrão, se SERVER_PORT não estiver definido
app.listen(server, () => {
  console.log(`Servidor rodando na porta: http://localhost:${server}`)
});
