// > Lacos condicionais | While

const input = require('readline-sync');

const numero_sorteado =  5;

let numero = Number(input.question('Digite um número:'));

while(numero !== numero_sorteado){
    console.log('Voce errou o numero. tente novamente...')
    numero = Number(input.question('Digite um número:'));
}

console.log('Vocë acertou! parabéns!')



