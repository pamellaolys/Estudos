
// para arredondar um numero para baixo, usamos o Math.floor
let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num2) //-> onde o evento ignorou as casas decimais e deu de resultado 9

// para arredondar um numero pAra cima, usamos o Math.ceil
let num1 = 9.54578;
let num2 = Math.ceil(num1);
console.log(num2)//-> onde o evento busca o proximo numero inteiro, que tem o resultado 10

// para arredondar para um numero mais proximo, usamos o Math.round
let num1 = 9.54578;
let num2 = Math.round(num1);
console.log(num2)//-> onde o evento busca o proximo numero inteiro, que tem o resultado 10. Se o num1 fosse 9.49 por exemplo o evento arredondaria para 9.

// para pegar o maior numero de uma sequencia usamos Math.max
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //-> teremos como resposta 1500

// para pegar o menor numero de uma sequencia usamos Math.min
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //-> teremos como resposta -50

//para gerar numeros aleatorio usamos o random
console.log(Math.random()); //-> ele gera numeros de entre 0 e 1 só que 1 nao é incluido, sao numeros decimais aleatorios. 


//para gerar numeros aleatorio usando o random mas com parametros, por exemplo quero numeros aleatorios entre 10 e 5 
const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio); //-> ele gera numeros de entre 10 e 5 de ponto flutuante com varias casas decimais.
/*
para que esses numeros aleatorios se tornem inteiros podemos incluir a funçao round que busca o numero inteiro mais proximo
ex:
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio); -> com isso voce tera como resultado numeros inteiros entre 10 e 5 selecionados aleatoriamente.
*/

//Para saber o valor de PI 
console.log(Math.PI); //-> teremos como resultado o valor de PI = 3.141592653589793

//para fazer potenciação podemos fazer usando Math.pow
console.log(Math.pow(2, 10)); //2 elevado a 10 com resultado de 1024, podemos fazer tbm com o operador aritmetico: console.log(2 ** 10); que dá o mesmo resultado.

//para fazer a raiz quadrada de um numero (conta)
let num1 = 9;
console.log(num1 ** (1/2)); // ou podemos tbm fazer assim: console.log(num1 ** 0.5); que obteremos o mesmo resultado que é 3

// em javaScript podemos dividir um numero por zero, mas temos um outro tipo de dado numerico chamado infinity que nao gera erro e ainda é checado como verdadeiro