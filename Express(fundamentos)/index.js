const express = require("express");
const app = express();

// Rota default =====================================================

app.get("/", (req, res)=>{
    res.send("Bem vindo")
})

//req => requerido do usuario 
//res => resposta dada pelo servidor

// PARAMETROS ========================================================

app.get("/login/:usuario?", (req, res)=>{ //parametro opcional 

    // exemplo /teste?teconologia 

    let user = req.params.usuario; 
    if (user){
        res.send(`<h1>usuario : ${user}</h1>`)
    }else{
        res.send("Pagina de Login")
    }   
})

app.get("/ola/:nome", (req, res)=>{ // parametro obrigatorio 
    
    // exemplo /teste/teconologia
 
    res.send(`<h1> Olá, ${req.params.nome} </h1>`)
})

//Query params ======================================================

// exemplo /teste?teconologia=javascript

app.get("/canal", (req, res)=>{
    let tecnologia = req.query["tecnologia"]

    if (tecnologia){
        res.send(`<h1> Bem vindo ao meu canal de ${tecnologia} </h1>`)
    }else{
        res.send("<h1> Bem vindo ao meu canal </h1>")
    }
    
})



// Iniciar Servidor =================================================
app.listen(3100, (error)=>{
    if ( error )return console.log("Desculpe ocorreu um erro")
    else return console.log("Servidor operando na porta http://localhost:3100") 
})