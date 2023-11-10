// > Laco numerico: For

const input = require('readline-sync')

// Problema

// const nota1 = Number(input.question('Informe a nota1: '))
// const nota2 = Number(input.question('Informe a nota2: '))
// const nota3 = Number(input.question('Informe a nota3: '))

// let media = (nota1 + nota2 + nota3) / 3

// console.log('Sua média é: ', media)

// Acumulador

let acumulador = 0

acumulador = acumulador + 10
acumulador = acumulador + 20
acumulador = acumulador + 30
acumulador ++

console.log('Total acumulado: ', acumulador)
console.clear();

// Estrutura for
let nota;
let soma =0;
let media;

for(let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))
    soma = soma + nota
}

media = soma /3;

console.log('Soma das notas: ', soma)
console.log('sua média é: ', media)