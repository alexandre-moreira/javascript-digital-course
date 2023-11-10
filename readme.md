# Curso de JavaScript

## Aula 01 - Instroducao
    [x] Instalar IDE (VsCode)
    [x] Instalar NodeJs

## Aula 02 - Variaveis e tipos primitivos
    [x] Comentários
        [x] Uma linha
        [x] Multiplas linha
    [x] Váriaveis
        [x] Boas praticas de nomeclatura
        [x] var   -> escopo global
        [x] let   -> escopo de bloco
        [x] const -> constante
    [x] Tipos de variáveis
        [x] Number
        [x] String
        [x] Boolean
    [x] typeof
    
## Aula 03 - Operadores aritméticoa
    [x] Adicao:           +
    [x] Subtracao         -
    [x] Multiplicacao     *
    [x] Divisao           /
    [x] Exponenciacao     **
    [x] Resto da divisao  %
    [x] Procedencia de operadores
        [x] Multiplicacao
        [x] Divisao
        [x] Adicao
        [x] Subtracao
    [x] Biblioteca Math

## Aula 04 - Operadores Booleanos
    [x]Operadores Booleanos
        [x] Igualdade: == (ou ===)
        [x] Diferente: != (!==)
        [x] Maior que: >
        [x] Maior ou igual: >=
        [x] Menor que: <
        [x] Menor ou igual: <=

    [x] Conjuncões logicas
        [x] AND ou &&
        [x] OR ou ||
        [x] Not ou !

## Aula 05 - Coercao (Conversao) de tipos.
    [x] Coercao Explicita (Manual)
    [x] Coercao Implicita (Automatica)

## Aula 06 - Estruturas condicionais
    [x] if
    [x] else if
    [x] else

## Aula 07 - Estrutura de repeticao |  while
    [x] Instalar biblioteca para solicitar informacoes do usuario
        - Abrir o terminal no vscode e digitar o comando abaixo:
        - npm install readline-sync

    [x] Importar a biblioteca no arquivo desejado, com o comando abaixo:
        - const input = require('readline-sync')

    [x] Solicitar dados do usuário, com o comando abaixo:
        - const numero = input.question('Digite um número: ')

        Obs: todo valor digitado no input, será do tipo string, mesmo que o dado digitado seja numero.
        para realizar operacoes com os numero, antes voce deve converte-los, para o tipo desejado.
        Como no exemplo abaixo:

        - const numero = Number(input.question('Digite um número: '))

    [x] Usando o laco de repeticao While.

## Aula 08 - Estrutura de repeticao |  For
    [x] Usando a estrutura de repeticao for:
        [x] O Problema
        [x] Acumulador
        [x] Estrutura for
