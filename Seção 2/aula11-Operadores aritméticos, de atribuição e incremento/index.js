/* Operadores Aritimeticos: + - / *
* Adiçao/Concatenação (unir dois valores,de tipo  string) +
* Subtração -
* Multiplicação *
* Divisão /
* Potenciação **
* Resto da divisão %
*/

/*const num1 = 2 ;
const num2 = 10;
console.log(num1 ** num2);*/

const num1 = 5 ;
const num2 = 2;
const num3 = 10;
console.log(num1 + num2 * num3);


/* Precedencia -> ordem de execução de um calculo por importancia/força

*primeiro oq tiver dentre parenteses ()
*depois potenciação **
*multilplicaçao *, divisao / e resto %
*soma + e subtração -

obs: quando usamos operadores aritmeticos de mesma precedencia a operação sera realizada da esquerda para direita

ex:
const num1 = 5 ;
const num2 = 2;
const num3 = 10;
console.log(num1 * num2 / num3);
*/

let contador = 1;
contador ++; 
console.log(contador);
/* quer dizer para acrescentar +1 ou seja 2, o ++ pode ser acrescentado antes da variavel contador, só que o resultado altera, pois quando o ++ vem na frente da variavel, ele acrescenta primeiro e depois chama o contador, já quando temos o ++ apos a variavel contador, o sistema analiza a variavel mostra o resultado anterior a soma, a soma ja estara guardada mas só   depois acrescenta um .

Alem do valor ++ de incremento temos o valor -- de decremento

RELEMBRANDO:
*INCREMENTO ++
*DECREMENTO --
AMBOS SÓ FAZER ADIÇÃO E SUBTRAÇÃO DE 1 EM 1

Se precisar contar de mais de 1 em 1 seguimos a seguinte regra:
ex:

let contador = 1;
contador = contador + 2;
console.log(contador);

ou posso criar uma variavel para determinar de quanto em quanto irei pular

ex:
const passo = 2
let contador = 0;

contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);   que terá como resposta 2,4,6

ou 
ex:
let contador = 0;
contador+=2;
contador+=2;
contador+=2;
console.log(contador); que terá como resposta 2,4,6

*/


/* Operadores de atribuição

let contador = 2;
contador*=2;
contador*=2;
contador*=2;
console.log(contador); que terá como resposta 16 pois 2*2=4*2=8*2=16
*/

/* NaN - Not a Number -> sempre que isso aparecer como resultado da sua conta, quer dizer que alguma coisa esta errada, por exemplo tentar misturar os tipos de dados, como multiplicar number e string

ex:
const num1=10;
const num2='Luiz';
console.log.(num1*num2); que teria o resultado como NaN


se eu quiser converser uma string para um number :

const num1=10;
const num2= parseInt('5'); //5 dentro de aspas significa string, mas se eu acrescentar parseInt e colocar meu valor entre parenteses, e ele é convertido a um numero inteiro.
console.log.(num1+num2);


Para numero de ponto flutuante eu utilizo o parseFloat que ira considerar os decimais.

Temos tbm como acrescentar Number na frente do numero entre aspas, que nao faz distinçao entre inteiros e decimais.
ex: const num1=10;
const num2= Number('5.2');
console.log.(num1+num2); 
*/