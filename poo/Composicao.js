
class Ler {
     Ler(caminho){
          console.log("Conteudo do arquivo")
     }
}

class Criar {
     Cre(caminho){
          console.log(`Arquivo ${caminho} criado com sucesso.`)
     }
}

class Escrever{  
     Esc(caminho){
          console.log(`Escrevendo artigo`)
     }
}

class Delete {
     Del(caminho){
          console.log(`Arquivo ${caminho} deletado com sucesso.`)
     }
}






class ManipularArquivo{
     constructor(nome){
          this.arquivo = nome
          this.Leitor = new Ler()
          this.Escritor = new Escrever()
          this.Delete = new Delete()
          this.Criador = new Criar()

     }
}

let manipulador = new ManipularArquivo()

manipulador.Criador.Cre('Dragão')
manipulador.Delete.Del('Dragão')
manipulador.Escritor.Esc()
manipulador.Leitor.Ler()