// > Estruturas condicionais

// Faca um programa para ver se a pessoa é maior ou menor de idade
// Se a idade for maior ou igual a 18, imprima: Vocë é maior de idade!
// Senao, imprima:  Vocë é menor de idade!

const idade = 23;

if(idade >= 18){
    console.log('Vocë é maior de idade!')
}
else{
    console.log('Vocë é menor de idade!')
}

console.clear()

// Faca um programa que analise a média do aluno e imprima um status: Aprovado | Recuperacao | Reprovado
// Se a media for maior ou igual a 7, imprima: Aprovado.
// Se a media for menor 7 e media maior ou igual a 5, imprima: Recuperacao.
// Senao, imprima: Reprovado.

let media = 6;

if (media >= 7){
    console.log('Aprovado(a)');
}
else if(media >= 5){
    console.log('Recuperacao')
}
else{
    console.log('Reprovado')
}



