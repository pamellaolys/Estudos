/*

Break e Continue --> possibilita ter controle de um laço, pular elementos ...

*Break e continue funcionam em laço for/for in/for of e laço while/do while

*CONTINUE*

*Pulando iterações
ex: 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if(numero === 2){
        continue; //--> sempre que a engine do javascript encontrar essa palavra ela volta pro começo do laço, e parte para a proxima iteração ;
    }
console.log(numero);
}

*Podemos pular mais de uma iteração da seguinte maneira:
ex:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if(numero === 2 || numero === 5){
        continue; //--> sempre que a engine do javascript encontrar essa palavra ela volta pro começo do laço, e parte para a proxima iteração ;
    }
console.log(numero);
}

OU 

ex:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if(numero === 2){
        continue;
    }
    if(numero ===5){
        continue;
    }
console.log(numero);
}

*BREAK*

Pode poupar recursos do servidor, do computador do usuario, enfim, ela pode melhorar a velocidade do meu codigo. Pois na hora que a engine do javascript acha a palavra break ela sai do laço.

ex: 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if(numero === 2){
        console.log('Pulei o número 2');
        continue;
    }
    if(numero === 7){
       break;
    }
console.log(numero); --> teremos como resultado : 1 / pulei o numero 2 / 3 / 4 / 5 / 6
}


dissemos para o js que quando chegar no 7 paramos o laço, mas como nossa linha de codigo de ação do console esta abaixo dos parametros o break nem printa o valor de 7.

se eu quisesse executar a ação de selecionar o 7 e depois parar o laço preciso colocar a linha de ação do console antes do break.
ex:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if(numero === 2){
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);
    if(numero === 7){
       break;
    }
}

* Break é um pouco diferente de continue. Continue pula a iteração do laço, mas ele vai até o final do laço. Já o break, basta encontrar a palavra break que nao vai ser executado mais nada daquela iteração.

*Usando for in - praticamente a mesma coisa que for of, obtem o mesmo resultado 
ex:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros) {
    let numero = numero[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);
    if (numero === 7) {
        console.log('7 encontrado , saindo ...');
        break;
    }

}

* Usando o for classico -apesar do for classico ter sua estrutura um pouco diferente, obtem o mesmo resultado 
ex:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i <= numeros.length; i++) {
    let numero = numero[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);
    if (numero === 7) {
        console.log('7 encontrado , saindo ...');
        break;
    }

}

*Usando laço de repetição WHILE:
ex:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++; //geralmente atualizamos nossa variavel de controle (ou incremento) fora dos laços, mas se tiver a palavra continue/break antes desse incremento nosso codigo vai entrar num loop infinito. Colocando antes dessas palavras temos um laço seguro.
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado , saindo ...');
        i++;
        break;
    }

    i++;


* Usando o laço de repetiçao DO WHILE:
ex:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++; //geralmente atualizamos nossa variavel de controle (ou incremento) fora dos laços, mas se tiver a palavra continue/break antes desse incremento nosso codigo vai entrar num loop infinito. Colocando antes dessas palavras temos um laço seguro.
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado , saindo ...');
        i++;
        break;
    }

    i++;
} while (i < numeros.length);

*RESUMO:
CONTINUE --> Continua para proxima iteração.
BREAK --> Sai do laço de repetição.

*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++; //geralmente atualizamos nossa variavel de controle (ou incremento) fora dos laços, mas se tiver a palavra continue/break antes desse incremento nosso codigo vai entrar num loop infinito. Colocando antes dessas palavras temos um laço seguro.
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado , saindo ...');
        i++;
        break;
    }

    i++;
} while (i < numeros.length);