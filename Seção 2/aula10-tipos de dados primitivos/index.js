//Dados Primitivos : String, number, undefined, null , boolean, symbol
const nome = 'Luiz';//String
const nome1 = "Luiz";//String
const nome2 =`Luiz`;//String
const num1 = 10; //number
const num2 = 10.52;// numero com ponto flutuante em js tbm é considerado number

let nomeAluno; //undefined = nao aponta pra local nenhum na memoria.

const sobrenomeAluno = null; //nulo -> nao aponta pra local nenhum na memoria , utilizado quando em algum momento queremos desconfigurar uma variavel, onde queremos colocar o valor nulo. eu falo que quero que a variavel nao tenha valor

//boolean
const aprovado = true; // respostas booleanas sao respostas de verdadeiro (true) ou falso (false)

console.log(typeof nome, nome); // para imprimir o tipo de variavel e o seu valor 