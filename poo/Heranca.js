class Animal{
    constructor(nome , idade,  preco){
        this.nome = nome 
        this.idade = idade 
        this.preco = preco
    }
    CheckEstoque(){
        return 10
    }
}

class Cachoro extends Animal {
    constructor(nome , idade,  preco){
        super(nome, idade , preco) //necessario por para mudar 

    }
    teste(){
        return super.CheckEstoque() + '  è o valor adicional'
    }
}

var dog =  new Cachoro('Dragão', 5, 150)


console.log(dog.teste() )