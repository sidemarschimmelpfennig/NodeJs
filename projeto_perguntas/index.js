require("dotenv").config()
const express = require("express");
const path = require("path")

const server = 3100;
const app = express()

app.use(express.static('public'))

app.set("view engine", "ejs")

app.set('views', path.join(__dirname, 'src', 'views'))

app.get("/",(req, res)=>{
    res.render("index");
})

app.listen(server, ()=> console.log(`servidor rodando na porta : http://localhost:${server}`))