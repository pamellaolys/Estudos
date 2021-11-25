/* WHILE e DO WHILE --> sao duas estruturas de repetiçao em js muito similar com a estrutura do for, a diferença aqui é a seguinte é que usando for geralmente sabemos o tamanho do meu laço de reptição. Já com while e do while nao sabemos quantas vezes essa repetição tera que ocorrer até que o laço termine.

//exemplo similar com for classico - onde vamos criar uma variavel de controle, vamos abrir o while e checar uma condição, se essa condiçao for verdadeira o codigo dentro do while vai ser executado dentro do bloco vamos atualizar nossa variavel de controle e checar novamente a condição, assim que a condiçao passar a ser falsa o nosso bloco termina. 
ex:


let i = 0; // variavel de controle

while(i <= 10){ //condição
console.log(i); //codigo
i++; // atualização da variavel de controle
} //--> teremos como resposta um contador de 0 a 10 e acaba nosso laço.



*obs: a variavel de controle do while é criada fora do laço, abrimos o bloco while com a condição entre parenteses e dentro da chaves o incremento que atualiza nossa variavel de controle,  nao podemos nunca esquecer o incremento  para que nosso laço nao se torne um laço infinito -- é quando a minha variavel de controle nunca chega no valor da condição.

// com string (geralmente usamos o for para isso )
ex:
const nome = 'Luiz';

let i = 0; // variavel de controle

while(i <= nome.length){ //condição
console.log(nome[i]); //codigo
i++; // atualização da variavel de controle
} //--> teremos como resposta LUIZ .

* Função que gera um numero aleatorio de qualquer numero minimo até qualquer numero maximo:
ex:

function random(min, max){
     const r = Math.random() * (max - min) + min;
     return Math.floor(r);//math.floor gera um numero inteiro, para nao receber resultado com ponto flutuante
}

let rand = random(1, 50);
console.log(rand);


* Função para encontrar numero aleatorio, até encontrar 10, quando encontrar 10 ele sai fora do laço:
ex:

function random(min, max){
     const r = Math.random() * (max - min) + min;
     return Math.floor(r);//math.floor gera um numero inteiro, para nao receber resultado com ponto flutuante
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10){ // enquanto meu numero randomico for diferente de 10 continua o laço.
rand = random(min, max);
console.log(rand);
}

*DICA: o laço while é mais utilizado para situaçoes dessa onde nao sabemos quando o laço tem que parar, e enquanto a condição for verdadeira nosso codigo continua rodando até se tornar falsa.

* a unica diferença entre while e do while é que while checa a condiçao e depois executa o codigo, pois enquanto acontecer da minha condição for verdadeira faça algo. Já com Do while , faça enquanto, vai executar o codigo primeiro e depois checar a condição.

ex: se tivessemos o valor de rand =10; 

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); //math.floor gera um numero inteiro, para nao receber resultado com ponto flutuante
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) { // enquanto meu numero randomico for diferente de 10 continua o laço.
    rand = random(min, max);
    console.log(rand);
}
console.log('####') // marca para saber a divisao de laços no console.

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);

Nosso laço de while nao executaria pois ele primeiro analiza se a condição é verdadeira antes de executar, que no caso não é pois 10 NAO É DIFERENTE DE 10. Já com o do while nosso programa roda normalmente pois ele executa primeiro e depois checar a condição. 


*DO WHILE - sempre vai nos mostrar ao menos um resultado por executar o laço primeiro e depois checar sua condição.
*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); //math.floor gera um numero inteiro, para nao receber resultado com ponto flutuante
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) { // enquanto meu numero randomico for diferente de 10 continua o laço.
    console.log(rand);
}
console.log('####')
do {
    console.log(rand);
} while (rand !== 10);