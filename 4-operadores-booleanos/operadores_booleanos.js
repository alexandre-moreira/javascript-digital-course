// > Operadores Booleanos

// Igualdade: == (ou ===)
// Diferente: != (!==)
// Maior que: >
// Maior ou igual: >=
// Menor que: <
// Menor ou igual: <=

const numero = 10;

console.log(numero == 10)
console.log(numero > 10)
console.log(numero >= 10)
console.log(numero < 10)
console.log(numero <= 10)
console.log(numero != 10)

// - Conjuncoes logicas

// AND ou &&
let idade = 26;
let isCNH = true

const possoDirigir =  idade >= 18 && isCNH === true

console.log('Posso dirigir? ', possoDirigir)

// OR ou ||

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70

console.log('Voto facultativo? ', votoFacultativo)

// Not

const estouGostandoDaAula = false;

console.log('Estou gostando da aula?', !estouGostandoDaAula)