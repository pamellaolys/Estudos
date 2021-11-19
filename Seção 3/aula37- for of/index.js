/* FOR OF -->

* expecifico para objetos iteraveis, como string e arrays.

// String
//exemplo com for classico 
ex:
//indices     0123456789...
const nome = 'Luiz Otávio';

for(let i = 0; i < nome.length; i++ ){
console.log(nome[i]); //--> acessa cada letra da string em cada loop/iteração do laço.
}

//exemplo com for in 
ex:
//indices     0123456789...
const nome = 'Luiz Otávio';

for(let i in nome){
console.log(nome[i]); //--> acessa cada letra da string em cada loop/iteração do laço.
}


//exemplo com for of 
ex:
//indices     0123456789...
const nome = 'Luiz Otávio';

for(let valor of nome){
console.log(valor); //--> acessa cada letra da string em cada loop/iteração do laço. A mesma resposta usando o for classico e o for in, só que quando usamos for of, nao recebemos o indice e sim o valor.
}




// Arrays

//exemplo com for classico 
ex:
//indices       0        1        2
const nome = ['Luiz','Otávio','Henrique']

for(let i = 0; i < nome.length; i++ ){
console.log(nome[i]); //-->  acessa cada nome do array em cada loop/iteração do laço.
}

//exemplo com for in 
ex:
//indices       0        1        2
const nome = ['Luiz','Otávio','Henrique']

for(let i in nome){
console.log(nome[i]); //--> acessa cada nome do array em cada loop/iteração do laço.
}


//exemplo com for of 
ex:
//indices       0        1        2
const nome = ['Luiz','Otávio','Henrique']

for(let valor of nome){
    console.log(valor); //--> teriamos como resposta os nomes que sao os VALORES dentro do array.
}

// usando o for classico, o for in e o for of obteremos o mesmo valor, MAS se necessario precisemos do indice é recomendado que usemos o classico ou o for in, já que o for of só nos retorna VALOR 

//iteração de array usando forEach
ex:
//indices       0        1        2
const nome = ['Luiz','Otávio','Henrique']

nome.forEach(function(valor, indice){// teremos como resultado o valor ou seja os nomes de dentro do array com seus indices respectivos ao lado
console.log(valor, indice);
});


*Qual utilizar?
Não faz diferença de qual , tudo dependerá do que você precisa no seu codigo. Por exemplo para array qualquer um dos tres vai funcionar (for classico , for in retornando indice e o for of retorna só o valor). Para Objetos, vai divergir um pouco pois o for of nao é iteravel, só entrega o valor e nao o indice. Se necessita da chave e do valor recomendado que se use o for in.

FOR CLASSICO - geralmente com iteraveis (array ou strings)
FOR IN - retorna o indice ou chave (array, strings ou objetos)
FOR OF - retorna o valor em si (iteraveis , arrays ou strings)


*/

