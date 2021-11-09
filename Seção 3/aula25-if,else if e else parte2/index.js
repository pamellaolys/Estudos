/*if e else
const numero = 10;

if(numero >= 0 && numero <=5 ){
 console.log ('O número está entre 0 E 5.')
} else{
    console.log('O número NÃO está entre 0 e 5');
}
// if e o else dependem um do outro, pois se a condição for falsa e só tivermos o if, nao obteremos resposta.
*/
// if e else if

const numero = 10;

if(numero >= 0 && numero <= 5 ){
 console.log ('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8){
    console.log('O número está entre 6 e 8');
} else if(numero >=9 && numero <=11){
    console.log('O número está entre 9 e 11') //verdadeiro;
}else{
    console.log('O número NÃO está entre 0 e 11');
}

// se eu tivesse uma condiçao no meio do meu escopo do if que fosse verdadeira mas que fosse inutil, essa condiçao quebraria o resto do meu codigo, pois a partir do momento que se encontra a condição verdadeira todo o resto do codigo dentro do escopo para de ser lido. A condiçao que depende da falsidade da outra para ser analizada se chama condiçao encadeada, assim como o exemplo acima.