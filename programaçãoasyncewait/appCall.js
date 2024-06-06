function enviarEmail2(corpo, para, callback){
    setTimeout(()=>{
        /// .logica 
        var error = false
        if (error === false) {
            console.log("deu erro")
        }else{
            callback(200,5,5 ) //pode receber parametros  aqui recebe valor 
        }
        
    },5000)
}

enviarEmail2("jjkfjjldjkdfjkfdjkjfkjdfkjdfkjkfjk", "sidemarschi@gmail.com", (status, amount, time)=>{
    console.log(`
    
    Status servidor : ${status}
    --------------------------------------
    Contatos ${amount}
    --------------------------------------
    Tempo de envio : ${time}
    
    
    `)
})
