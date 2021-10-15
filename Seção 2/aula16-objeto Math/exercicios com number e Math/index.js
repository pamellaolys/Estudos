const numero = Number(prompt('Digite um numero:'));
/* Para alterar string para Number, podemos fazer da maneira acima, onde declaro Number ou podemos fazer da seguinte maneira:
let numero = prompt('Digite um numero:')
numero = Number(numero)     

// tudo que é pego pelo prompt é considerado como string, entao com essa linha de codigo já alteramos para Number para o caso de soma, se continuasse como string em caso de + seria considerado concatenaçao*/


const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;


texto.innerHTML += `<p>Seu numero é: <strong> ${numero} </strong></p>`;
texto.innerHTML += `<p>A raiz quadrada do numero é: <strong> ${numero ** 0.5} </strong></p>`;
texto.innerHTML += `<p><strong> ${numero} </strong> é inteiro: <strong> ${Number.isInteger(numero)} </strong></p>`;
texto.innerHTML += `<p>É NaN?<strong> ${Number.isNaN(numero)} </strong>  </p>`;
texto.innerHTML += `<p>Seu numero arredondado para baixo é: <strong> ${Math.floor(numero)} </strong></p>`;
texto.innerHTML += `<p>Seu numero arredondado para cima é: <strong> ${Math.ceil(numero)} </strong></p>`;
texto.innerHTML += `<p>Seu numero com duas casas decimais é: <strong> ${numero.toFixed(2)} </strong> </p>`;

/*
//concatenação para mostrar o numero digitado
document.body.innerHTML += `Seu numero é: <strong> ${numero} </strong><br/>`;

//raiz quadrada
document.body.innerHTML += `A raiz quadrada do numero é: <strong> ${numero ** 0.5} </strong> <br/>`;

//pesquisa pra saber se o numero é inteiro
document.body.innerHTML += `  <strong> ${numero} </strong> é inteiro: <strong> ${Number.isInteger(numero)} </strong> <br/>`;

//pesquisa pra saber se o numero é NaN
document.body.innerHTML += `É NaN?<strong> ${Number.isNaN(numero)} </strong> <br/>`;

//arredondar para baixo
document.body.innerHTML += `Seu numero arredondado para baixo é: <strong> ${Math.floor(numero)} </strong> <br/>`;

//arredondar para cima
document.body.innerHTML += `Seu numero arredondado para cima é: <strong> ${Math.ceil(numero)} </strong> <br/>`;

//numero com duas casas decimais
document.body.innerHTML += `Seu numero com duas casas decimais é: <strong> ${Number(numero.tofixed(2))} </strong> <br/>`;*/