/* atribuição via desestruturação - Arrays

o array da esquerda é a desestruturação, onde a variavel já existe e reatribuimos valor a ela.

o array de letras é a atribuiçao, sao os valores dados alguma variavel.

ex:

let a = 'A'; //b
let b = 'B'; //c
let c = 'C'; //a

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a,b,c) -> teremos como resposta B C A, pois as variaveis foram desestruturadas e tiveram seu valor reatribuido.

***************************
//como mostra o valor do dado que esta no indice 0

// indices       0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros[0]);-> teremos como resposta 1. QUE É O VALOR DO DADO DO INDICE 0


//Como mostrar valor do dado com variavel
// indices       0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeiroNumero = numeros[0];
console.log(primeiroNumero); 

se eu precisasse de todos os valores do array? 
Teria que criar uma variavel para cada? A atribuiçao via desestruturação veio para facilitar, dessa maneira:
ex: 
// indices       0       1     2     3     4
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero); 


//como pegar o resto de um array com atribuiçao via desestruturação (...rest)
ex:
// indices       0       1     2     3     4
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero); 
console.log(resto); 

*o operdor de resto em javascript se simboliza por ...rest, mas usamos a mesma simbologia de tres pontos para espalhar alguma coisa usando como spread (pesquisar sobre)

//Para pegar o valor de um indice pular o proximo e continuar no outro valor devemos deixar o espaço do indice que quero pular vazio separado por virgulas.
ex: 
// indices       0       1     2     3     4
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco , , sete] = numeros;
console.log(um, tres, cinco); 

************************
* Como pegar um valor de um dado de um array listado dentro de outro array
ex: queremos capturar o  valor de 6
//indice lista      0         1         2
//indices         0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numeros[1][2]); ->obteremos o resultado de 6 pois o dado 6 esta dentro da variavel numeros, dentro do indice de lista 1 com indice 2.

* Como pegar um valor de um dado de um array listado dentro de outro array usando atribuiçao via desestruturaçao
ex: queremos capturar o  valor de 6
//indice lista      0         1         2
//indices         0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [ ,[ , ,seis]] = numeros;
console.log(seis);

*dessa maneira o resultado sai como o esperado mas torna muito complexa a execução do codigo
podemos fazer tambem dessa maneira :

ex:
//indice lista      0         1         2
//indices         0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]); -> dividimos nossa lista de indices e solicitamos o indice do array do item da lista.Trazendo como resultado 9.




*/
