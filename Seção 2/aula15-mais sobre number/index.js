let num1 = 1; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2); //sabemos que por ser number é possivel fazer o calculo de num1 + num2, mas se quisermos transformar um number em string temporariamente eu uso a funçao toString()

console.log()

/*
Quando temos uma string e um number sendo somados, nao é realizada a conta e sim concatenado o valor 
ex:
let num1 = 1; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2); -> neste caso teremos a resposta de 12.5, já que um foi tranformado temporariamente em string

para alterar o valor em definitivo de number pra string:
ex:
let num1 = 1; //number
let num2 = 2.5; //number

num1 = num1.toString();
console.log(typeof num1); --> Neste caso receberemos o tipo de dado de num1 como string pois substituimos o valor da variavel com essa linha de codigo num1 = num1.toString();

- Outra coisa que o toString pode fazer é mostrar a representaçao binaria de um numero:
ex:
let num1 = 1500;
let num2 = 2.5; 

console.log(num1.toString(2)); -> com isso o vscode nos mostra como resultado 1500 em numeros binarios :10111011100


- Podemos tambem selecionar quantas casas decimais aparecer no meu resultado usando a funçao toFixed
let num1 = 10.5789551255547;
let num2 = 2.5; 

console.log(num1.toFixed(2)); -> teremos como resultado 10.58 que foi arredondado nas duas ultimas casas decimais. Se eu quiser mais casas decimais depois da virgula(nosso caso ponto) podemos, por exemplo para 4 casas depois da virgula:
console.log(num1.toFixed(4)); e teriamos o resultado de 10.5790


-Para saber se o valor de uma base de dados é um numero inteiro.
ex:
let num1 = 10; 
let num2 = 2.5; 

console.log(Number.isInteger(num1)); -> retorna um boolean, que no caso deu TRUE, verdadeiro, pois o valor era inteiro, se fosse um valor de ponto flutuante como por exempo 10.25, o resultado seria FALSE.

- Temos como averiguar se um calculo pode dar como resultado um NaN (Not a number/ nao é um numero) que é um erro quando tentamos cacular number com strings.
ex:
let num1 = 10; 
let num2 = 2.5; 
let temp = num1 * 'Ola'; 

console.log(Number.isNaN(temp)); -> vai retornar como resultado true, pois nossa conta nao é possivel de ser executada. Se nossa string fosse um numero, o js tentaria dar um jeito e executaria o calculo, se questionassemos se é um NaN, daria false, ou seja a conta é valida, pois nosso calculo é de multiplicação, se fosse soma, o resultado seria uma concatenação.

- O padrao que o javaScript segue para precisao de numeros é a IEEE 754-2008, que deixa muitos numeros quebrados, muito imprecisos
ex:
let num1 = 0.7; 
let num2 = 0.1; 
console.log(num1 + num2); --> executando isso deveriamos ter o resultado de 0.8, mas nas verdade recebemos 0.7999999999999999 , essa certa imprecisao pode causar algum problema, para resolver isso:
ex1:
let num1 = 0.7; 
let num2 = 0.1; 

num1 += num2; // num1 =  num1 + num2 = 0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5
num1 += num2; //1.6
num1 += num2; //1.7
num1 += num2; //1.8
num1 += num2; //1.9
num1 += num2; //2.0

num1 = Number(num1.tofixed(2));

console.log(num1); --> dessa maneira tornaremos o numero mais preciso. Podemos resolver de outra maneira tambem fazendo conta para trasformar os num1 e num2 que antes eram numeros de ponto flutuante em inteiros:
ex2:
let num1 = 0.7; 
let num2 = 0.1; 

num1 = ((num1 *100) + (num2*100)) / 100; -> fazendo isso eu trasformei o numero de ponto flutuante em inteiro e dividi por 100 para trazer o resultado experado de 0.8 , o codigo acaba se tornando mais complexo, entao é melhor quando utilizamos eventos, mas é importante saber das nossas possibilidades.


*/