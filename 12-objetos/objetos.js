// > Objetos

// Como criar um objeto no JavaScript?
let pessoa = {
    nome: 'Alexandre',
    idade: 43,
}

console.log(`Nome: ${pessoa.nome}`)
console.log(`Idade: ${pessoa.idade}`)
console.clear()

// Como adicionar um par de chave-valor?
pessoa.altura = 1.70
console.log(pessoa)
console.clear()

// como remover um par de chave-valor?
delete pessoa.altura
console.log(pessoa)
console.clear()
// como percorrer?
for (let chave in pessoa){
    console.log(chave + " - " + pessoa[chave])
}

