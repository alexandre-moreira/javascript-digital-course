// > Funcoes

// - Definicao de funcao

function saudacao(){
    console.log('ola, seja bem vinda(o, ao nosso curso de JavaScript')
}

saudacao()

console.clear()

// Como enviar parametro para as funcoes?

function saudacao(nome,curso){
    console.log(`ola, ${nome}! seja bem vinda(o), ao nosso curso de ${curso}`)
}

saudacao('Alexandre', 'JavaScript')

console.clear()

// Retorno da funcao

// Exemplo 1
function soma(num1, num2){
    return num1 + num2
}

const resultado = soma(10,20)

console.log(resultado)
console.clear()

// Exemplo 2
function maiorDoQue50(num){
    if(num > 50){
        return true
    }

    return false
}

const result = maiorDoQue50(5)

console.log(result)