/*  Mais diferenças entre var e let 

let e var -> criam variaveis 

*nao podemos redeclarar let, já var podemos.

*Let tem escopo de bloco{...bloco} ou seja redefinir variavel dentro de um escopo de bloco permite a redefinição 
ex:
const verdadeira = true;

let nome ='Luiz';//criando
var nome2 ='Luiz';

if(verdadeira){
    let nome = 'Otávio';//criando
    console.log(nome, nome2); -> teremos como resposta Otavio Luiz, pois a variavel foi criada dentro do escopo do if. Apesar das variaveis terem o mesmo nome nao são a mesma.
}

* Quando temos blocos aninhados,com o valor de let com variavel de mesmo nome dentro de cada bloco/escopo , o javascript avalia se dentro do bloco tem a variavel a ser utilizada e se nao tiver procura no proximo bloco saindo do escopo e indo pro escopo maior e analizando as variaveis até o escopo global.
ex:
const verdadeira = true;

let nome ='Luiz'; //escopo global
var nome2 ='Luiz';

if(verdadeira){
    let nome = 'Otávio'; //escopo if
   // console.log(nome, nome2);

    if(verdadeira){
        let nome = 'Outra coisa'; //escopo if dentro do escopo if
        //console.log('OK');
        console.log(nome, nome2);
    }
}
 No caso acima obteremos como resposta do console Outra coisa Luiz, isso porque o javascript analizou que dentro do escopo de if dentro de if tinhamos uma variavel let nome. Por isso printa na tela o resultado da variavel com let nome de menor escopo, e printa o resultado da var nome2 que esta no escopo global.

const verdadeira = true;

let nome ='Luiz'; //escopo global
var nome2 ='Luiz';

if(verdadeira){
    let nome = 'Otávio'; //escopo if

    if(verdadeira){
        console.log(nome, nome2);
    }
}

Se tirarmos a variavel dentro do menor escopo que no caso era o escopo de if dentro do escopo de if, teremos como resposta Otávio Luiz, pois o javascript foi voltando os escopos até encontrar uma variavel que pudesse ser usada. 
Se dentro de if nao tivessemos uma variavel, só seria levada em conta a variavel de escopo global.

**********************

const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz'; //criando

if (verdadeira) {
    let nome = 'Otávio';
    var nome2 = 'Rogério'; //redeclarada
    // console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        var nome2 = 'Ronaldo'; //redeclarada
    }
}

console.log(nome, nome2); -> teremos como resposta Luiz Ronaldo, pois o nome foi pego da variavel let do escopo global e o nome2 foi redeclarado, ele terá o valor de sua ultima variavel redeclarada.

*Var só vai respeitar o escopo de funçao;
* o escopo de uma função é especial.
*Podemos criar uma funçao dentro de uma função
*uma variavel dentro de uma funçao nao pode ser usada fora do escopo da funçao, já variaveis visinhas podem ser usadas dentro do escopo de uma função
ex:
function falaOi() {
    var nome = 'Luiz';
    console.log(nome);
}

falaOi();-> teremos como resposta Luiz, pois tanto a variavel quando o console.log estao dentro do mesmo escopo. Se a variavel estivesse vizinha da funçao ainda teriamos o mesmo resultado, mas se o console.log estivesse fora do escopo teriamos um erro.

* todas as variaveis criadas com var, devem estar antes do uso da mesma, para nao dar undefined no codigo, pois a engine do javascript tenta elevar para o topo todas as variaveis var. Já com let se a variavel estiver declarada depois do uso da mesma teremos um erro 
*/
var sobrenome ='Miranda';
console.log(sobrenome);
