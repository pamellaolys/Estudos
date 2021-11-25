/* querySelector --> ele só retorna um elemento, o primeiro elemento que ele encontrar de acordo com os paramentros passados. No nosso caso temos 4 paragrafo dentro da div com class paragrafos, o query selector iria me retornar somente o primeiro p. 
 
Com isso precisamos de outra maneira para selecionar todos os elementos , uma forma que temos é atraves do querySelectorAll:
Ex:
paragrafos.querySelectorAll('p'); --> com isso teremos como resultado no nosso console do navegador uma NODELIST, que se comporta de maneira extremamente similiar a um array, mas nao é um.

*NodeList é parte do DOM, mas como se comporta parecido com array executar algumas coisas da mesma forma, como por exemplo for classico, for in ou for of. Pois a nodeList é indexada, ou seja composta por indices.

* apesar de nao ser expecificamente um array a nodeList se comporta de maneira similar.
 

exercicio: pegar a cor do background do body e colocar nos paragrafos e trocar a cor do texto do paragrafo para branco:
ex:



*/

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);//funçao de navegador nao funciona no node, pega todos os estilos do body
const backgroudColorBody = estilosBody.backgroundColor;
console.log(backgroudColorBody); //--> teremos como resposta rgb(17, 86, 102)

for(let p of ps){
  p.style.backgroundColor = backgroudColorBody;
  p.style.color = '#ffffff'
}