// > Coercao (Conversao) de tipos

// - 1. Coercao Explicita (Manual)

const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero);

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('12341234'));
console.log(parseFloat('23444.123'));
console.log(parseInt('23421.32321'));
console.log(Boolean(1));

console.clear();

// - 2. Coercao Implicita (Automatica)

console.log('10' + 1)
console.log('10' - 1)
console.log(10 * '3')

console.clear()

// Qual será a saída desse código?
let n = 1 + "1";

n = n - 1;

console.log(n);

// Qual será a saída desse código?
console.log(2 + 3 + 4 + '5')

// Qual será a saída desse código?
console.log('5' + 2 + 3 + 4)

// Qual será a saída desse código?
console.log('10' - '4' - '3' - '2' + '5')


