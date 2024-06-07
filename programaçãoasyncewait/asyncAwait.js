// async await 


function enviaEmail(){
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

function enviaEmail1(){
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


function enviaEmail2(){
    return new Promise((resolve, reject)=>{
        console.log('carregando email')
        setTimeout(()=>{
            var err = true
            if (!err){
              resolve({time : 6,
                 to : "sidemar"
                }) 
              //callback(200,5,5 )//pode receber parametros  aqui recebe valor )  
            } else{
                reject("email não enviado")
                //console.log("deu erro")
            }
        }, 4000)
    })
}


async function envio(){  
    try{
        var email = await enviaEmail2()
        var email1 = await enviaEmail1()
        var email2 = await enviaEmail2()
        console.log(email)
        console.log(email1)
        console.log(email2)
    }catch(err){
        console.log(err)
    }
}


envio()
