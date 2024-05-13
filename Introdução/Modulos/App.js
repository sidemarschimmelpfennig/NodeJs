const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Soma(operation, a, b) {
  const op = parseInt(operation);
  if (op === 1) return parseInt(a) + parseInt(b);
  else if (op === 2) return parseInt(a) - parseInt(b);
  else if (op === 3) return parseInt(a) * parseInt(b);
  else if (op === 4) return parseInt(a) / parseInt(b);
  else return "Operação inválida";
}

function fazerOperacao() {
  rl.question('Escolha a Operação: soma[1], subtração[2], multiplicação[3], divisão[4]: , abortar[5]: ', (operacao) => {
    if (operacao >= 1 && operacao <= 4) {
      rl.question('Digite o Numero Um: ', (numeroUm) => {
        rl.question('Digite o Numero Dois: ', (numeroDois) => {
          console.log('O resultado é: ', Soma(operacao, numeroUm, numeroDois));
          fazerOperacao(); // Chamada recursiva para permitir que o usuário faça outra operação
        });
      });
    }else if(operacao == 5){
        return rl.close()
    } 
    else {
      console.log("Operação inválida");
      fazerOperacao(); // Chamada recursiva para permitir que o usuário escolha outra operação
    }
  });
}

fazerOperacao(); // Começa o processo de escolha de operação
