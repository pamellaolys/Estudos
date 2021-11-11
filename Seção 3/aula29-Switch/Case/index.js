/* Switch/Case -> é uma estrutura condicional

*faremos um exemplo onde queremos mostrar o dia da semana para nosso usuario de acordo com a data, só que nao podemos mostrar a resposta que recebemos pois em javascript os dias da semanas se representam de 0-Domingo, 1-Segunda, 2-Terça, 3-Quarta, 4-Quinta , 5-Sexta e 6-Sabado. Com isso usaremos o if/else if e depois o  switch/case para um melhor retorno de resposta para o usuario feitos de duas maneiras distintas.

* solução com if/else*
const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-feira';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sabado';
} else {
    diaSemanaTexto = 'Esse dia não existe';
}

console.log(diaSemana, diaSemanaTexto);-> obteremos como resposta 2 'Terça'


//* solução com switch/case *

const data = new Date('1987-04-26 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto ='';
}


console.log(diaSemana, diaSemanaTexto);

// quando usamos switch/case a cada caso precisamos colocar um break; para caso a condiçao for verdadeira ele nao continue procurando outra resposta e ja pule o bloco switch. Quando colocamos default para fechar as cases, podemos ou nao colocar o break.

//quando tivermos somente uma variavel para checar o valor como é o caso da diaSemana, podemos usar switch/case.


*/

//* solução com switch/case dentro de função *
function getDiaSemanatexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
             return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
             return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
             return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
             return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
             return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }

}

const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanatexto(diaSemana);



console.log(diaSemana, diaSemanaTexto);

//quando colocamos o switch/case dentro de uma funçao nao precisamos usar o break, pois substituimos por return, e sempre que uma função encontra a palavra return ela para ali. Fazendo o mesmo papel do break, sem erros.