/* Funçoes -> executam ações, que podem retornar ou nao um valor. 

*Para criar funçao em js usamos a palavra reservada function e nomeamos essa funçao, (com as mesmas regras para criaçao de variaveis) acrescentamos os parenteses apos o nome da funçao onde podem vir valores de dados, e por fim criamos o corpo da funçao abrindo e fechando chaves:
ex:
function saudacao(){
    console.log('Bom dia!');
}

*Sempre que eu vou chamar uma funcao eu devo colocar seu nome seguido dos parenteses: saudacao();

* Quando nossa funçao tem paramentros (tudo que estiver entre parenteses)
ex:
function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
}

saudacao('Luiz'); -> atraves do evento ser chamado eu posso passar um argumento/valor para o parametro nome , por isso teremos como resposta 'Bom dia Luiz!'. Podemos aproveitar a funçao mais de uma vez e mudar seus paramentros. 

* Podemos guardar o valor de um argumento dentro de uma variavel
ex:
function saudacao(nome){
       return `Bom dia ${nome}!`
}

const variavel = saudacao('Luiz'); -> retorna Bom dia Luiz!
console.log(variavel); -> vai retornar undefined


*Funçao de soma de dois valores
ex: 
function soma(x,y){
    const resultado = x + y;
    return resultado
}
console.log(soma(2,2)); -> retorna 4
console.log(soma(3,1)); -> retorna 4
console.log(soma(5,10)); -> retorna 15


*Tudo que estiver no corpo de uma funçao, nao pode ser acessado de fora.
ex:
function soma(x,y){
    const resultado = x + y;
    return resultado
}

const resultado = soma(2,2);
console.log(resultado); -> retorna 4, mas para mostrar que tudo que esta dentro do corpo da funçao nao se mistura com o resto do codigo nós duplicamos a constante da variavel, que só retorna uma resposta por estar fora do corpo/escopo da funçao.

*No exemplo abaixo mostramos que tudo que vem abaixo do return dentro da funçao é ignorado.
ex:
function soma(x,y){
    const resultado = x + y;
    return resultado
    console.log('Olá mundo') ---> nao teriamos resposta alguma, mas se o console log estivesse antes do return teriamos a mensagem Olá mundo printada no console
}

*Se eu mandar minha funcao sem enviar os paramentros, eu vou receber um NaN, nao é um numero, pois no nosso exemplo nossa variavel resultado x+y que nao são numbers. 

* Para a funçao assumir um valor em caso de nao ter parametro
ex:
function soma(x = 1 ,y = 1){     //-> damos uma valor para x e y
    const resultado = x + y;
    return resultado
}

const resultado = soma(5); -> e quando nao tivermos um valor o js supoe que o valor será o valor de x e y anteriormente passado, no caso valor de 1 para ambos, mas se eu colocar um parametro, o valor anterior vai ser substituido pelo ultimo. Por exemplo dentro de soma eu estipulei o paramentro 5, portanto agora x tem valor de 5 e y continua tendo valor de 1, tendo resultado de 6. 
console.log(resultado);

*DOIS OUTROS JEITOS DE CRIAR FUNÇOES EM JAVASCRIPT

- JOGANDO UMA FUNÇAO DENTRO DE UMA VARIAVEL, CRIANDO UMA FUNÇAO ANONIMA
ex:
const raiz = function(n){
return n ** 0.5;

}; -> quando temos um sinal de igual estamos atribuindo valor a variavel, com essa regra devemos fechar o corpo da nossa funçao com ;(ponto-virgula)

console.log(raiz(9)); -> que retorna 3


- Arrow function 
ex:
const raiz = n => n ** 0.5;

console.log(raiz(16)); -> que retorna 4

obs arrow function: veio para facilitar o codigo, transformando-o em um codigo menor, onde podemos tirar a palavra reservada function substituindo por => apos o parametro n, que pode sair de dentro dos parenteses por ser somente um paramentro, podemos tirar o return e desmontar o corpo da funçao com as chaves.



dica: melhor criar funçoes menores que executam somente uma funçao por vez
*/