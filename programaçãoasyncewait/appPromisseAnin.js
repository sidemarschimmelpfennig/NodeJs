




function enviaEmail(corpo , para){
    return new Promise((resolve, reject)=>{
        console.log('carregando email')
        setTimeout(()=>{
            var err = false
            if (!err){
              resolve({time : 6,
                 to : "sidemar"
                }) 
              //callback(200,5,5 )//pode receber parametros  aqui recebe valor )  
            } else{
                reject()
                //console.log("deu erro")
            }
        }, 4000)
    })
}

function enviaEmail1(corpo , para){
    return new Promise((resolve, reject)=>{
        console.log('carregando email')
        setTimeout(()=>{
            var err = false
            if (!err){
              resolve({time : 6,
                 to : "sidemar"
                }) 
              //callback(200,5,5 )//pode receber parametros  aqui recebe valor )  
            } else{
                reject()
                //console.log("deu erro")
            }
        }, 4000)
    })
}


function enviaEmail2(corpo , para){
    return new Promise((resolve, reject)=>{
        console.log('carregando email')
        setTimeout(()=>{
            var err = false
            if (!err){
              resolve({time : 6,
                 to : "sidemar"
                }) 
              //callback(200,5,5 )//pode receber parametros  aqui recebe valor )  
            } else{
                reject()
                //console.log("deu erro")
            }
        }, 4000)
    })
}




enviaEmail("teste," , "teste")
.then( () => enviaEmail1("teste," , "teste").then( () =>{
    enviaEmail2("teste," , "teste")
    .then( ({time, to}) =>{
        console.log(`
        
        email enviado com sucesso
        
            Time : ${to}

            -----------------------
            To : ${time}
        `)
    })
    .catch( ()=>{
        console.log('email não enviado')
})
})
.catch( ()=>{
    console.log('email não enviado')
}))
.catch( ()=>{
    console.log('email não enviado')
})