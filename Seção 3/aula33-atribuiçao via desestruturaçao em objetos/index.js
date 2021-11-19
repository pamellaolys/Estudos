/* Atribuiçao via desestruturação em Objetos

*como pegar uma informaçao de um objeto
ex:
const pessoa = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço:{
        rua: 'Av Brasil',
        numero: 320
    }
};

console.log(pessoa.nome);-> teriamos como resposta Luiz.

* Mas e se eu quisesse jogar esse valor dentro de uma variavel? (ATRIBUIÇAO NORMAL)
ex:
const pessoa = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço:{
        rua: 'Av Brasil',
        numero: 320
    }
};
const nome = pessoa.nome;
console.log(nome); -> teremos o mesmo resultado só que agora a informação esta salva dentro de uma variavel.

* Atribuiçao via desestruturação
ex:
const pessoa = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço:{
        rua: 'Av Brasil',
        numero: 320
    }
};
//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO - que extrai do objeto valor do dado e ja cria uma variavel
const {nome, sobrenome , idade} = pessoa;
console.log(nome, sobrenome);

* Podemos setar/definir algum valor padrao na nossa atribuiçao via desestruturaçao pro caso da nossa variavel nao existir:
ex:
const pessoa = {
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
};
const {nome = 'Não existe',sobrenome,idade} = pessoa;
console.log(nome, sobrenome); -> teremos como resposta Não existe Miranda. Esse valor padrao pode tambem ser entregue com aspas vazias.


*modificar nome de variavel de uma chave
ex: (vamos colocar outro nome para a chave nome)
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
};
const {nome: teste = '',sobrenome,idade} = pessoa;
console.log(teste, sobrenome); -> agora teste se tornou nossa variavel pra chave de nome, e teremos como resposta Luiz Miranda.


* Como pegar um dado dentro do objeto criado dentro do objeto:
ex:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);


* Criando variavel diferente de um dado dentro de objeto criado dentro de outro objeto:
ex:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
const {endereco: {rua: r, numero}} = pessoa;
console.log(r, numero); -> teremos como resposta Av Brasil 320, como anteriormente mas agora a variavel é representada por R.

* Podemos declarar um valor padrão para as variaveis para o caso de algum valor nao existir

* Como usar operador de rest em objetos
ex:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
const {nome, ...resto} = pessoa;
console.log(resto); -> teremos todas as informaçoes que incluem o resto, ou seja todas os dados serao impressos menos o nome, que esta guardado em sua variavel.



*/
