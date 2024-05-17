const express = require("express");

const server = 3100;

const app = express()

app.set("view engine", "ejs")

app.use(express.static('public'))

app.get("/",(req, res)=>{
    res.render("index");
})
app.get('/perguntar', (req, res)=>{
    res.render('perguntar')
})


app.listen(server, ()=> console.log(`servidor rodando na porta : http://localhost:${server}`))