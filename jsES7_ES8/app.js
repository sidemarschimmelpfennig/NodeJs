const name = "Teste"  // nao pode ser alterada  é global

var teste1 = "dhjdfshkj" // variavel global
let joao1 = 'flfhhgdf' // variavel com bloco global e pode ser utilizado em campos com  { }

const teste = () => {
    const name = "Teste"  // nao pode ser alterada  é local
    var teste1 = "dhjdfshkj" // variavel local
    let joao1 = 'flfhhgdf' // variavel com bloco local e pode ser utilizado em campos com  { }

    console.log(`${joao1} || and || ${teste1}`)
}

teste()

const soma = (a , b = 0)=>{ // caso nao tiver parametro adicione o valor devem ser os ultimos
    console.log(a + b)
}

const subtracao = (a , b = 0)=>{ // caso nao tiver parametro adicione o valor devem ser os ultimos
    console.log(a - b)
}



const testar = true 
let ab = 1
// com bloco  
if(testar){
    let bb = 2
    console.log(ab + bb)
}
//  console.log(ab + bb) - ocasiona erro //  mais seguro

let av = 1
// com bloco  
if(testar){
    let bv = 2
    console.log(av + bv)
}
// console.log(av + bv) - nao ocasiona erro 

const arr = [] 

arr.push("teste")

console.log(arr)


// encurtador de json 
let jso = {
    ab,
    joao1,
    av,
}

console.log(jso)


// spred

let jsa  = {
    teste : "jhdjsdfk",
    joana : "fjhfhfk",
    avi : "fjhfhfk",
}

var jse  = {
    ab,
    joao1,
    av,
    ...jsa
}

console.log(jse)

///desestruturação 
let users = {
    nome : "hfjhsjfd",
    idade : 1
}
var { nome } = users

console.log(nome)

// arrow function 

const testetet = a => console.log(a)

const testet = (a, b) =>{
    console.log(a + b)
} 

/// find


const achar = users.find(user => users.nome === "hfjhsjfd" )

console.log(achar)