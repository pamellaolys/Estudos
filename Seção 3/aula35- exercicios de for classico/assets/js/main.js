const elementos =[
{tag: 'p', texto:'Frase 1'},//indice 0
{tag: 'div', texto:'Frase 2'},//1
{tag: 'section', texto:'Frase 4'},//2
{tag: 'footer', texto:'Frase 3'},//3

];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];//associação via desestruturação
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;//podemos usar o innerText ao inves do innerHTML, pois sei que só tem texto e vai funcionar normalmente
    div.appendChild(tagCriada);
   
}

container.appendChild(div);

/*
Solução criando um node texto 

const elementos =[
{tag: 'p', texto:'Frase 1'},//indice 0
{tag: 'div', texto:'Frase 2'},//1
{tag: 'section', texto:'Frase 4'},//2
{tag: 'footer', texto:'Frase 3'},//3

];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];//associação via desestruturação
    let tagCriada = document.createElement(tag);
    let textoCriado = documento.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
   
}

container.appendChild(div);


***********************************
Soluçao de maneira mais facil do coleguinha

const resultado = document.querySelector('.container');
 
for (let i = 0; i < elementos.length; i++) {    
    let {tag, texto} = elementos[i];
    resultado.innerHTML += `<${tag}>${texto}</${tag}>`;    
}
*/
