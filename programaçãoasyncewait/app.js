
function enviarEmail(corpo, para, callback){
    setTimeout(()=>{
        console.log(`
        Para : ${para}
        --------------------------------------
        ${corpo}
        --------------------------------------
        de : Sidemar S. Junior
        
        `
        )
        callback() //pode receber parametros  aqui recebe valor
    },5000)
}
console.log("Enviando email ...")
function enviarEmail2(corpo, para, callback){
    setTimeout(()=>{
        console.log(`
        Para : ${para}
        --------------------------------------
        ${corpo}
        --------------------------------------
        de : Sidemar S. Junior
        
        `
        )
        callback(200,5,5 ) //pode receber parametros  aqui recebe valor
    },5000)
}

//callbacks
enviarEmail("jjkfjjldjkdfjkfdjkjfkjdfkjdfkjkfjk", "sidemarschi@gmail.com", ()=>{
    console.log("seu email deve chegar em minutos")
    console.log("Tudo OK")
})


console.log("Enviando email ...")
enviarEmail2("jjkfjjldjkdfjkfdjkjfkjdfkjdfkjkfjk", "sidemarschi@gmail.com", (status, amount, time)=>{
    console.log(`
    
    Status servidor : ${status}
    --------------------------------------
    Contatos ${amount}
    --------------------------------------
    Tempo de envio : ${time}
    
    
    `)
})
