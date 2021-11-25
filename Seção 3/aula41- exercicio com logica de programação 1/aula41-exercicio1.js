//Escreva uma função que recebe 2 numero e retorne o maior deles

//solução 

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(2, 5)); //--> tivemos como resultado 5.


/* 
Refatoração - ou codigos melhorados 

*outra solução:
function max(x, y) {
    if (x > y) {
        return x;
    }
    return y;
}
console.log(max(2, 5));

*Nesse caso nao é necessario usar else pois quando a engine do javascript encontra a palavra return ela sai da funçao e retorna o valor.

*outra solução:
function max(x, y) {
    if (x > y) return x;
    return y;
}
console.log(max(2, 5));

*quando meu bloco if tem apenas uma linha de codigo, podemos remover as chaves e deixar nossa linha de retorno junto com a condição.

*outra solução(condiçao ternaria):
function max(x, y) {
    return x > y ? x : y; //se x for maior que y retorna x senao retorna y
}
console.log(max(2, 5));

*outra solução(arrow function):
const max2 = (x, y) => {
    return x > y ? x : y;
}
console.log(max2(10, 25));

*outra solução(arrow function refatorado):
const max2 = (x, y) =>  x > y ? x : y;
console.log(max2(10, 25));
*arrow function com somente uma linha de codigo no retorno possibilita que refatoremos nosso codigo eliminando as chaves, e fica subtendido que podemos tirar a palavra return tambem.

*outra solução:
function getMaiorNumero(num1, num2) {
    return (Math.max(num1, num2));
}
console.log(getMaiorNumero(15, 12)); --> tivemos como resultado 15


}*/
