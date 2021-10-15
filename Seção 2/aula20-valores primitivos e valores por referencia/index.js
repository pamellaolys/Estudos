/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint , symbol)

Quando falamos de valores primitivos estamos falando de valores imutaveis , nao podemos modificar nada neles

* quando usamos valores primitivos falamos que uma variavel é igual a outra mesmo se alterarmos a original depois o valor da segunda se manterá, pois é uma copia do valor 
ex:
let a = 'A';
let b = a;
console.log(a,b); -> terá como resultado A A

a = 'Outra coisa';
console.log(a,b); -> terá como resultado Outra coisa A

**********************************************
* Referencia (mutável) - arrays, object, function
* quando usamos valores de referencia e as variaveis apontam para o mesmo valor na memoria, elas serao iguais, mesmo que uma delas seja alterada depois
ex:
let a = [1,2,3];
let b = a;

console.log(a,b); -> terá como resultado [1,2,3][1,2,3]

resumo: VALORES PRIMITIVOS SAO COPIADOS QUANDO PASSAMOS O VALOR DE ATRIBUIÇÃO(=) DE OUTRA VARIAVEL;
VALORES DE REFERENCIA COM VARIAVEIS COM VALORES ATRIBUIDOS A OUTRAS TERÃO SEU VALOR FINAL IGUAL .


*Como copiar um valor de uma variavel para outra se estivermos usando valores de referencia
ex:
let a = [1,2,3];
let b = [...a];
let c = b

console.log(a,b); -> teria o resultado[1,2,3][1,2,3]
a.push(4);
console.log(a,b); -> teria o resultado[1,2,3,4][1,2,3] pois a acrescentou um novo elemento e b é somente a copia do primeiro parametro passado para a, se dermos um console.log para c teremos [1,2,3] pois o valor de c é referente a b que nao altera quando valor de a alterar.


* com objetos
cont a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a;
console.log(b); -> teremos como resposta {nome: 'Luiz', sobrenome: 'Otávio'}, mas se alterarmos o nome do objeto de a, o de b tambem sofrerá alteraçao

ex1:
cont a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a;

a.nome = 'João';
console.log(b); -> teremos como resposta {nome: 'João', sobrenome: 'Otávio'}


*Para tornar o valor de b totalmente independente 
ex1:
cont a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};

a.nome = 'João';
console.log(b); -> teremos como resposta {nome: 'Luiz', sobrenome: 'Otávio'}

*/