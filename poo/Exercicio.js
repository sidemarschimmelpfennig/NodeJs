/* 
    Sistema cassino
    Vários tipos de dados
    Rolar dados
*/


class Dado {
    constructor(faces){
        this.faces = faces
    }

    Rolar(){
        let teste = this.Randomic(1, this.faces)
        console.log("Resultado do dado:  " + teste)
    }


    Randomic(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1 ) ) + min
    }
}

var teste  = new Dado(20)

teste.Rolar()
