const express = require("express");
const routes = require("./routes.js")

const server = 3100;

const app = express()

app.set("view engine", "ejs")

app.use(express.static('public'))

app.use(routes)

app.listen(server, ()=> console.log(`servidor rodando na porta : http://localhost:${server}`))