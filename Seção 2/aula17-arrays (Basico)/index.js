//array é uma coleção/lista, onde possibilita que em uma variavel só guarde varios dados. Como boas praticas nao misturamos os tipos de dados dentro de um array, mesmo o js permitindo essa mistura de dados sem dar erro.

/*
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);//mostra o array completo*/

/*array sao indexados por elemento, cada elemento recebe um numero gradativo iniciando do 0.
Podemos procurar um dado de acordo com o seu indice dentro do array.
EX: 
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]);  -> Com o indice 0 teriamos como resposta o Luiz, ja que ele esta na primeira posição (posição 0) do nosso array.
*/

/* Para editar um valor de um array
ex: 
const alunos = ['Luiz', 'Maria', 'João'];

e eu quero editar a posição 0 do meu array
alunos[0] = 'Eduardo';
console.log(alunos); -> teremos como resultado o array editado que sera apresentado assim: ['Eduardo', 'Maria', 'João']


*Para adicionar um elemento no array 
ex:
const alunos = ['Luiz', 'Maria', 'João'];
alunos[3] = 'Luiza'; -> coloco a variavel com o numero do indice do array que ainda nao existe com o dado que no caso é Luiza. ['Luiz', 'Maria', 'João','Luiza']

mas para acrescentar um indice no nosso array da maneira apresentada anteriormente precisariamos saber quantos elementos tenho dentro do array e qual é o indice do ultimo 

*Para saber o tamanho do array:
ex:
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos.length);  -> me retornará o valor de quando ELEMENTOS TENHO NO MEU ARRAY, e nao QUAL O INDICE DO ULTIMO LUGAR DO ARRAY.

*Para adicionar elemento no array sem saber em qual indice se está:
ex:
const alunos = ['Luiz', 'Maria', 'João'];
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fabio'; -> com essa linha de codigo acrescentamos um elemento no ultimo item do array

* funçao para adicionar elemento ao final do array
ex:
const alunos = ['Luiz', 'Maria', 'João'];

alunos.push('Luiza');  -> com essa linha de codigo usando a funçao push, é adicionado o elemento ao final do array.

*Para colocar um elemento no primeiro indice do array, o indice zero.
ex:
const alunos = ['Luiz', 'Maria', 'João'];

alunos.unshift('Luiza'); -> com isso Luiza estaria no primeiro indice do array, empurrando os outros elementos para os proximos indices, que retornaria a resposta ['Luiza','Luiz','Maria','João']. Se eu usasse o unshift para adicionar um novo elemento ele ficaria no indice 0 empurrando a luiza para o indice 1 e assim sucessivamente.

* Para remover elementos do meu array usamos a funçao pop, que elimina o ultimo elemento do meu array
ex:
const alunos = ['Luiz', 'Maria', 'João'];

alunos.pop; 
console.log(alunos); -> executando isso o ultimo elemento sera removido do array, no caso João, mas essa mesma função pode guardar o valor removido do array e guardar em uma variavel:
ex 1:
const alunos = ['Luiz', 'Maria', 'João'];

const removido = alunos.pop(); 
console.log(removido); -> veremos o nome do nosso elemento removido : Joao
console.log(alunos); -> veremos os elementos que restaram no array ['Luiz','Maria']

* Para remover elementos do começo do meu array usamos a funçao shift, que elimina o primeiro elemento do meu array
ex:
const alunos = ['Luiz', 'Maria', 'João'];

const removido = alunos.shift(); 
console.log(removido); -> veremos o nome do nosso elemento removido : Luiz
console.log(alunos); -> veremos os elementos que restaram no array ['Maria','João'] onde a maria passa a ocupar o indice 0 e o joao o 1.

* Para remover um elemento do array sem mexer nos indices
ex:
const alunos = ['Luiz', 'Maria', 'João'];

delete alunos[1];
console.log(alunos); -> dessa forma somente o indice selecionado sera removido e os outros elementos se manterão em seus indices, o resultado seria ['Luiz', <1 empty item> ,'João'] onde o indice de maria fica declarado como 1 elemento vazio.

*Para acessar um indice que nao existe
ex:
const alunos = ['Luiz', 'Maria', 'João'];
 
console.log(alunos[50]); -> temos como resposta undefined, mas nao dá erro.

*Para fatiar um array, quero pegar do elemento 0 ao 2:
ex:   
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
 
alunos.push('Luiza'); //adicionou ao final do array
alunos.push('Eduardo'); //adicionou ao final do array
console.log(alunos.slice(0,3)); -> obeteremos como resposta o array até o Joao, se tivessemos colocado como parametro pra slice (0,2) que é o numero do incide do joao ele nao apareceria, por isso temos que adicionar um mais. 

*Para fatiar de forma negativa (ele usa o tamanho do array menos o numero que eu estipular)
ex:   
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
 
alunos.push('Luiza'); //adicionou ao final do array
alunos.push('Eduardo'); //adicionou ao final do array
console.log(alunos.slice(0,-2)); -> dessa forma os dois ultimos elementos serao removidos trazendo um resultado de ['Luiz','Maria','João']

*Para saber se voce esta trabalhando em um array:
ex:   
const alunos = ['Luiz', 'Maria', 'João'];

console.log(typeof alunos); -> teremos como resposta object, pois arrays sao objetos
console.log(alunos instanceof Array); -> temos como resposta true, verdadeiro.

* Podemos mudar as instancias do nosso array em js normalmente:
ex:
let alunos = ['Luiz', 'Maria', 'João'];
alunos = 123; -> mudamos o valor da variavel

console.log(typeof alunos); -> teremos como resposta number, pois 123 é considerado numeros
console.log(alunos instanceof Array); -> temos como resposta false, FALSO, pois ao mudarmos a instancia do array ele se tornou um numero.


*/