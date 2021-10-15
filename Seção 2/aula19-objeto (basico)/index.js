const nome01 ='Luiz';
const sobrenome01 ='Miranda';
const idade01 = 25;

const nome02 ='Maria';
const sobrenome02 ='Oliveira';
const idade02 = 55;

/* no exemplo acima temos varias variaveis guardando dados de um mesmo individuo. E se tivessemos que criar variaveis assim para 1000 individuos diferentes? Nesse caso é mais facil criarmos um objeto. Usamos as chaves para criar um objeto
ex: (objeto literal)
const pessoa1 = {
    nome:'Luiz',
    sobrenome:'Miranda',
    idade: 25
};

console.log(pessoa1.nome); -> retorna Luiz
console.log(pessoa1.sobrenome); -> retorna Miranda
console.log(pessoa1.idade); -> retorna 55

mas dessa maneira ainda nao facilitou tanto, ja que para incluir outro individuo eu teria que refazer esse processo com outros valores de dados para a pessoa 3 a pessoa 1000.


* Podemos criar uma funçao que cria um objeto.
ex:
function criaPessoa(nome, sobrenome, idade){ //entre parenteses temos paramentros
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio' ,25); //entre parenteses temos argumentos que sao os valores que sao passados para os parametros
const pessoa2 = criaPessoa('Maria', 'Oliveira' ,32);
const pessoa3 = criaPessoa('João', 'Moreira' ,55);
const pessoa4 = criaPessoa('Junior', 'Lara' ,44);
const pessoa5 = criaPessoa('Jean', 'Otávio' ,69);

console.log(pessoa1.nome , pessoa2.nome); -> teremos como resultado Luiz e Maria.


* Podemos diminuir o tamanho da nossa funçao :
ex:
function criaPessoa(nome, sobrenome, idade){ //entre parenteses temos paramentros
    return {nome, sobrenome, idade};
}


* Podemos criar um objeto criando uma variavel
ex:
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){ //nao precisa ter a palavra function
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala(); -> teremos como resposta Luiz Miranda esta falando oi...

ex 1 :
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){ //nao precisa ter a palavra function
        console.log(`A minha idade atual é ${this.idade}.`);
    }

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala(); -> teremos como resposta 25
pessoa1.incrementaidade(); 
pessoa1.fala(); -> teremos como resposta 26











obs: quando uma funçao esta dentro de um objeto ela se torna um metodo.
this dentro do metodo fala(), se refere ao objeto pessoa1.
Podemos criar mais de um metodo dentro do nosso objeto
*/