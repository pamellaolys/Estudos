/* *Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(number).
Retorne true se a imagem estiver no modo paisagem  */

//Minha soluçao:

function ePaisagem(largura, altura) {
    if (largura > altura) {
        return true;
    }
}
console.log(ePaisagem(350, 260));

/* 

*outra solução:
function ePaisagem(largura, altura) {
    if (largura > altura) {
        return true;
    } else {
        return false;
    }
}
console.log(ePaisagem(260, 350));

*outra solução:
function ePaisagem(largura, altura) {
    if (largura > altura) {
        return true;
    }
    return false;
}
console.log(ePaisagem(350,260));
*Nesse caso nao é necessario usar else pois quando a engine do javascript encontra a palavra return ela sai da funçao e retorna o valor.

*outra solução:
function ePaisagem(largura, altura) {
    if (largura > altura) return true;
    return false;
}
console.log(ePaisagem(350, 260));
*quando meu bloco if tem apenas uma linha de codigo, podemos remover as chaves e deixar nossa linha de retorno junto com a condição.

*outra solução:
function ePaisagem(largura, altura) {
    return largura > altura;
 }
 console.log(ePaisagem(260, 350));
*nesse caso podemos tirar a condiçao para retornar true e false pois nosso codigo retornará true ou false de qualquer maneira apos analizar nossa condição.

*outra solução (condiçao ternaria):
function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
 }
 console.log(ePaisagem(260, 350));

*outra solução (arrow function):
const paisagem = (largura , altura) => {
    return largura > altura ? true : false;
 }
 console.log(paisagem(260, 350));

*outra solução (arrow function refatorado):
const paisagem = (largura , altura) => largura > altura ? true : false;
 console.log(paisagem(260, 350));



*/

