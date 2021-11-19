/* FOR IN --> Lê os indices ou chaves do objeto

//* FOR IN EM ARRAY

//indices        0       1       2
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]); --> Teremos como resposta o nome das frutas do nosso array, se tirassemos o paramentro frutas e deixassemos somente a variavel (i) entre parenteses, teriamos como resposta a contagem dos indices 0 1 2;
}
//esse tipo de for lê os indices do nosso array

*OBJETO*

*Como acessar uma chave 
ex:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};
console.log(pessoa.nome);
OU 
console.log(pessoa['nome']); --> ambas maneiras de usar o console log teriamos como resposta Luiz.


//* FOR IN EM OBJETO

*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let i in pessoa){
    console.log(i, pessoa[i]); //--> teriamos como respostao nome das chaves do meu objeto (nome, sobrenome e idade) [i é a variavel para as chaves ]
}