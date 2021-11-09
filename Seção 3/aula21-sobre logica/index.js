/* Operadores de comparação -> comparam dois valores
> maior que

>= maior que OU igual a - Retorna valor verdadeiro se uma das duas operaçoes maior ou igual sejam verdade. Se as duas forem mentira, retornará false

< menor que

<= menor que OU igual a

== igualdade (valor)->checa igualdade entre dois operandos(nao confundir igualdade[==] com atribuição [=]) -> NAO RECOMENDADO UTILIZAR

=== igualdade estrita (checa tanto o valor quanto o tipo) RECOMENDADO

!= diferente (valor) -> NAO RECOMENDADO UTILIZAR

!== diferente estrito (valor e tipo) RECOMENDADO

*/
const comparacao = 10 > 5;
console.log(comparacao); //operadores de comparação sempre retorna resultado boolean

/*
exemplo acima com variaveis

const num1 = 10;
const num2 = 11;
const comp = num1 < num2;
console.log(comp); -> teremos o resultado true

exemplo com igualdade (funciona mas nao utilizamos pois o proprio javascript espera o sinal de igualdade estrita[===]. Isso se chama correçao de tipo):
const num1 = 10;//number
const num2 = '10'; //string
const comp = num1 == num2;
console.log(comp); -> teremos o resultado true


exemplo com igualdade estrita 
const num1 = 10;//number
const num2 = '10'; //string
const comp = num1 === num2;
console.log(comp); -> teremos o resultado false, pois aparesar de parecer ter o mesmo valor nao tem o mesmo tipo 

a mesma coisa acontece com o operador de diferente, onde funciona mas pode fazer essa correçao de tipo e por isso usamos o diferente estrito que confere tanto o tipo quanto o valor [!==]
*/