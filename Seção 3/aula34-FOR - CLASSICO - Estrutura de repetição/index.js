/* FOR - ESTRUTURAS DE REPETIÇÃO

*o laço for serve para que aconteça loop, nosso codigo rode até que a condição seja avaliada como verdadeira.

* a estrutura do Laço de repetiçao for é composta por uma variavel, uma condiçao que vai parar esse laço, e um incremento/decremento a nossa variavel de controle.
ex:
// i = index, variavel padrao de laço For
for(let i = 0; i <= 5 ; i++){
console.log(i);
}-> teremos como resposta do console um contador de 0 até 5.

*o incremento serve para cada volta desse laço nosso i vai incrementar 1 ao valor.

* Para nomear cada linha 
ex:
for(let i = 0; i <= 5 ; i++){
console.log(`Linha ${i}`);
} -> teremos como resposta Linha 0, Linha 1 ,Linha 2 , Linha 3 , Linha 4 , Linha 5 .

* Como fazer meu laço de repetiçao incrementar mais de uma vez
ex:
for(let i = 400; i <= 500 ; i+= 10){
console.log(i);
} -> nosso laço irá incrementar de 10 em 10 começando do 400 até o 500: 400,410,420,430...500


*Usando numeros negativos funciona da mesma forma
ex:
for(let i = -100; i <= 500 ; i+= 10){
console.log(i);
} -> teremos como resposta um contador que incrementa de 10 em 10 começando do -100 até o 500.

*Decrementar - contagem do maior pro menor 
ex:
for(let i = 500; i >= 400 ; i -= 10){
console.log(i);
} -> teremos como resultado uma contagem regressiva de 10 em 10 iniciando do 500 até o 400: 500,490,480,470,460,450,440,430,420,410,400


*Qual numero é par?
ex:
for(let i = 0; i <= 10 ; i ++){
    const par = i % 2 === 0 ? 'par' : 'impar' ; //o resto de i dividido por 2 é = 0 
console.log(i, par);
}


*Saber o tamanho do array
ex:
//indice          0     1      2
const frutas = ['Maça','Pêra','Uva'];
console.log(frutas,length); -> tem como resultado 3 que é o tamanho do meu array

*Maneira de percorrer array com for
ex:
//indice          0     1      2
const frutas = ['Maça','Pêra','Uva'];

for(let i = 0; i < frutas.length ; i ++){
    
console.log(`Índice ${i}`,frutas[i]);
} -> teremos como resposta : Índice 0 Maça, Índice 1 Pêra, Índice 2 Uva.


*/
//indice          0     1      2
const frutas = ['Maça','Pêra','Uva', 'Laranja', 'Jaca' , 'Carambola'];

for(let i = 0; i < frutas.length ; i ++){
    
console.log(`Índice ${i}`,frutas[i]);
}