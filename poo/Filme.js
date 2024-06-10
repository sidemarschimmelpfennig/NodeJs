class Filme{
    constructor(titulo = '', ano = '', genero = '', atores = [], diretor = '', time = 0){
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.atores = atores
        this.diretor = diretor
        this.duracao = time
    }

    reproduzir(){
        console.log('Reproduzindo...')
    }

    pausar(){
        console.log('Pausado ||')
    }

    avancar(){
        console.log('Avancar >>>')
    }

    fechar(){
        console.log('Fechar X')
    }
}

let vingadores = new Filme()



vingadores.ano = 2024
vingadores.atores = [
    'Scarlett Johanson',
    'Robert d. Junior'
]
vingadores.duracao= toString(150)
vingadores.ano = 2024

console.log(vingadores)


let avangers = new Filme(
    'Avangers',
    2020,
    'ficção',
    ['TEste', 'TEste'],
    'joao pedro',
    150
)

//this == deste 


console.log(avangers)