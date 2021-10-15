let umaString = 'Um texto';

console.log(umaString)
/* caso eu precise usar aspas duplas tanto fora como dentro da minha string e nao quiser fechar com crase podemos executar o codigo assim:

let umaString = "Um \"texto\"";

colocando uma barra invertida, ele acaba dando o resultado normalmente como se tivesse usado da crase

se eu quiser usar barra invertida na texto eu tenho que colocar duas seguidas \\ pois uma barra só é considerado espaço
ex:
let umaString = "Um \\texto";



- Strings sao indexadas,começando a contagem no indice 0. Sabendo disso, podemos saber a posicao de qualquer caractere da nossa string
ex:
                 01234567
let umaString = "Um texto";

console.log(umaString[4]);  ---> isso é uma solicitação para saber o caracter da posição 4 da minha string. Que vai ter como resultado 'e'.



*Dentro das strings eu tenho uma função chamada charAt que tambem busca a posição do indice da minha string:
ex:
                 01234567
let umaString = "Um texto"; 

console.log(umaString.charAt(6));  Que vai ter como resultado 't'.


*Dentro das strings eu tenho uma função chamada concat que concatena a minha string com a nova string:
ex:
                 01234567
let umaString = "Um texto"; 

console.log(umaString.concat(' em',' um',' lindo dia.');  

ou 
console.log(umaString.concat(' em um lindo dia.'); 

ou 
console.log(umaString + ' em um lindo dia.');

ou com template string
console.log(`${umaString} em um lindo dia.`);


* Se eu quiser pesquisar por um indice dentro da string. Por exemplo em qual indice inicia-se a palavra texto eu posso usar a função indexOf.

ex:
                 01234567
let umaString = "Um texto"; 

console.log(umaString.indexOf('texto'));  e recebemos como resultado o indice 3.

O TEXTO PROCURADO DEVE ESTAR ESCRITO DA MESMA MANEIRA QUE ESTAVA NA STRING, POIS O JS É CASE SENSITIVE E MAIUSCULAS E MINUSCULAS TEM DIFERENÇA.

-Para o caso de querer uma busca no indice depois do indice que voce determinar o codigo deve ficar assim:
ex:
                 01234567
let umaString = "Um texto"; 

console.log(umaString.indexOf('o',3)); --> isso quer dizer que depois do indice 3 em qual indice eu encontro a letra 'o'. Teremos como resposta o indice 7.

-Temos tambem o lastindexOf, que trabalha semelhante ao indexOf só que ele começa a contagem de tras pra frente
ex:
                 01234567
let umaString = "Um texto"; 

console.log(umaString.lastindexOf('o',3)); --> se eu pesquisasse somente o 'o' eu teria uma resposta de 7 assim como no caso do uso do indexOf, MAS, se colocarmos um parametro de onde ele deve começar a contagem para 3, como é o nosso exemplo, obteremos resposta -1, que é erro nesse caso, pois do indice 3 ao indice 0 nao temos nenhuma letra 'o'.

************************************************
expressoes regulares

-temos a funcão match, PRECISO ENTENDER MAIS SOBRE!!!!!!!!
ex:
                 01234567
let umaString = "Um texto"; 

console.log(umaString.match(/[a-z]/g)); 


-temos a funcão search, usado para encontrar
ex:
                 01234567
let umaString = "Um texto"; 

console.log(umaString.match(/x/)); --> que vai retornar o valor do indice 5.


-temos a funcão replace, que subistitui o dado
ex:
                 01234567
let umaString = "Um texto"; 

console.log(umaString.replace('Um','Outro'));  --> com esses parametros eu digo ao meu programa para substituir a palavra 'Um' por 'Outro'. Com isso teremos o resultado de 'Outro texto'.

ex1: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.replace(/r/g,'#'));  --> neste caso estamos pedindo para que todo 'r' seja substituido por '#', o g garante que se repita em todas as letras r da frase, se ele nao estivesse ali na expressao regular, somente o primeiro 'r' seria substituido. o resultado ficaria assim: 
'O #ato #oeu a #oupa do #ei de #oma'


********************************************
- Para saber o tamanho de uma string podemos fazer:
ex: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.length); --> essa função length mostra o tamanho em caracteres da nossa string, no exemplo acima teremos o resultado de 35 caracteres

****************************************
FATIAMENTO

- Para selecionar uma string do indice que queremos iniciar até o indice que completa minha palavra, podemos fazer:
ex: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.slice(2,6)); --> os parametros 2 e 6 dessa funçao diz de qual indece deve-se começar a seleçao até onde deve parar, nesse caso receberemos a palavra rato, mas a palavra acabaria no indice 5, mas para aparecer devemos acrescentar um a mais, pois se deixarmos como 5 a palavra apareceria como 'rat'.

**USANDO NEGATIVOS**

ex: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.slice(-3)); --> com o parametro -3 receberemos como resultado 'ma.' Porque disso? É como se consideracemos que temos 35 caracteres -3. Se colocarmos -5 como parametro seria como se eliminassemos 5 ultimos caracteres da nossa string e teriamos como resultado a palavra 'roma.'

Podemos tbm colocar dois atributos dentro de slice para tirar caracteres da string que ja foi retirada da frase completa 
ex: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.slice(-5,-1)); --> com isso teriamos o resultado de 'roma', já que declarando o -1 ele retirou o ultimo caracter dos caracteres que eu ja havia tirado anteriormente (-5)

Isso faz exatamente a mesma coisa do que a funçao substring:
ex: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.substring(umaString.length -5, umaString.length -1));  --> onde teremos o  resultado de 'roma' o mesmo resultado quando utilizamos slice usando numeros negativos. 

*****************************************

- Podemos dividir uma string baseada em algum caracter qualquer, suponha que eu queira dividir a nossa string em todos os espaços em branco. Nesse caso eu vou pegar todas as palavras dessas strings agrupadas, separadas em um array:

ex: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.split(' ')); --> com esse espaço em branco queremos dizer para desconsiderar esses espaços e nos trazer como resposta todo o resto. Que aparecerá assim: ['O','rato','roeu','a','roupa','do','rei','de','roma']. Posso pedir por outros valores, como uma letra por exemplo, mas o valor selecionado nao irá aparecer na nossa resposta.

Podemos tbm colocar um limite de resultados nessa seleçao :
ex: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.split(' ', 2)); --> colocando o limite de 2 receberemos como resultado ['O', 'rato']


- Para transformar nossa string escrita toda em maiuscula usamos a função toUpperCase:
ex: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.toUpperCase()); --> receberemos como resultado 'O RATO ROEU A ROUPA DO REI DE ROMA.'

- Para transformar nossa string escrita toda em minuscula usamos a função toLowerCase:
ex: 
                 01234567
let umaString = "O rato roeu a roupa do rei de roma"; 

console.log(umaString.toLowerCase()); --> receberemos como resultado 'o rato roeu a roupa do rei de roma.'

*/ 
