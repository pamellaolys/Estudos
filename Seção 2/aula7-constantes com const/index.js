// Constante -> Constantes são valores fixos que você utilizará em seu programa 
/*
REGRAS PARA CRIAÇÃO DE Constantes
- Nao podemos criar Constantes com palavras reservadas (let, if, console... etc)
- Constantes precisam ter nomes significativos
- Não pode começar o nome de uma Constante com um numero
- Constantes iniciadas com letra minuscula
- O nome das Constantes nao podem conter traços ou espaços
- em caso de nome composto usamos o camelCase, começamos com letra minuscula e sem espaço iniciamos a segunda palavra em letra maiuscula
- Constantes sao case-sensitive, maiusculo e minusculo faz diferença
- NÃO PODEMOS MODIFICAR O VALOR DE UMA CONSTANTE
- A constante deve ser criada e inicializada com seu valor
- NÃO UTILIZE VAR, UTILIZE CONST!!!!!!
*/


/*
const nome = 'João';
console.log(nome);*/



//se eu precisar mudar o valor da minha variavel eu tenho que alterear de const para let, e ai sim poderei trocar o valor da minha variavel

//eu posso pegar o valor de uma variável ou de uma constante e atribuir a outra variável ou outra constante

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
//console.log(primeiroNumero);

console.log(typeof(primeiroNumero));

// operadores aritmeticos básicos + soma, - subtração, * multiplicação e / divisão

//SE TIVER ASPAS É STRING = TEXTO | SE NAO TIVER ASPAS GERALMENTE É NUMBER = NUMERO

/*Para ter certeza do tipo de dado que a gente tem na variavel/constante usamos essa linha de codigo:
console.log(typeof(primeiroNumero));*/