require("dotenv").config()
const express = require("express");
const path = require("path")


const server = 3100;


const app = express()

// Dizer ao express para utilizar o EJS como View Engine
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'src', 'views'))

app.get("/:nome/:lang",(req, res)=>{
    res.render("index", {
        nome: req.params.nome,
        idade: 23,
        sexo: "masculin",
        lang: req.params.lang
    })
})

app.listen(server, ()=> console.log(`servidor rodando na porta : http://localhost:${server}`))