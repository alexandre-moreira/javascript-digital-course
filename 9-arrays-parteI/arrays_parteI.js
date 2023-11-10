// > Arrays

// - Como criar um array?

let arr = ['Alexandre', 43, 1.70, true]

// - Como acessar os elementos do array
console.log('Primeiro elemento: ', arr[0])
console.log('Segundo elemento: ', arr[1])
console.log('Terceiro elemento: ', arr[2])
console.log('Quarto elemento: ', arr[3])

// - Como obter o tamanho do array
console.log('Tamanho do array', arr.length)

console.clear()
// - Percorrendo arrays

// Exemplo 1
for (let i = 0; i <  arr.length; i++){
    console.log(arr[i])
}

console.clear()

// Exemplo 2
for (let elemento of arr){
    console.log(elemento)
}
console.clear()

// Exemplo 3
for (let indice in arr){
    console.log(indice, arr[indice])
}