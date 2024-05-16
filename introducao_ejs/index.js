const express = require("express");
const path = require("path")


const server = 3100;


const app = express()

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'src', 'views'))

app.get("/",(req, res)=>{
    res.send('Bom dia');
})


app.get("/:nome"  /*"/:nome/:lang"*/,(req, res)=>{
    var linguagens = [
        {nome: "javascript" , experiencia : 1 },
        {nome: "delphi" , experiencia : 1 },
        {nome: "node" , experiencia : 1 },
        {nome: "mysql" , experiencia : 2 },
        {nome: "C#" , experiencia : 1 },
    ]
    var programador = true
    
    res.render("index", {
        nome: req.params.nome,
        idade: 23,
        sexo: "masculino",
        programador : programador,
       // lang: req.params.lang, 
        linguagens : linguagens

    })
})

app.listen(server, ()=> console.log(`servidor rodando na porta : http://localhost:${server}`))