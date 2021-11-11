/*
*Para usar o objeto date, precisamos usar a palavra new antes do Date, para formar uma funçao construtora.

*Funçoes construtoras sempre começam com a primeira letra maiuscula.

*Quando chamamos a funçao Date sem passar nenhum paramentro, toda vez que eu executar esse codigo, o javascript vai gerar um novo objeto de data com a data atual, hora, minutos, segundos e milesimos e salvar na variavel. 

*quando colocamos paramentro zero no objeto Date, teremos como resposta Wed Dec 31 1969 21:00:00 GMT-0300, esse GMT representa o nosso fusohorario com diferença de 3 horas, se somarmos as 3 horas restantes teremos 01/01/1970 que é o marco zero do objeto Date, conhecido como Timestamp unix ou época unix. Para acessarmos datas antes desse marco zero passamos paramentro negativos.

para saber mais sobre o objeto date:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

*Mostrando o marco zero*

const tresHoras = 60 * 60 * 3 *1000;//para acrecentar 3 horas no paramentro 0 e alcançarmos o Timestamp unix
const umDia = 60 * 60 * 24 * 1000; //acrescentar um dia em milezimos de segundos
const data = new Date(0 + tresHoras);
console.log(data.toString()); //-> retorna resposta da hora em tempo real no padrao ingles, Tue Nov 09 2021 17:41:31 GMT-0300 (Horário Padrão de Brasília), data formada por milezimos de segundos desde 01/01/1970.

**************************************
//como puxar uma data que você queira: 

const data = new Date(2019, 3, 20, 15, 14, 27); //coloca os paramentros nessa ordem, ano, mes(abril), dia, hora, minuto, segundos e milesimos de segundo

*Quando vamos falar de mês em javascript ele começa com indice zero:
 0- janeiro
1- fevereiro
2- março
3- abril
4- maio
5- junho 
6- julho
7- agosto
8- setembro
9- outubro 
10- novembro
11- dezembro

* se colocarmos por exemplo os paramentros de data da seguinte maneira
const data = new Date(2019, 3, 20 , 15, 14, 60);
teremos como resultado Sat Apr 20 2019 15:15:00 pois o javascript entende que 60segundos deve se aumentar um minuto no resultado.

*Usando dataString*
const data = new Date('2019-04-20 20:20:59');
console.log(data.toString()); //usando o paramentro onde a data é uma string nao precisamos colocar o mes considerando que começa do 0. Em dataString colocamos o numero referente ao mes normal. E teremos como resposta Sat Apr 20 2019 20:20:59 GMT-0300 (Horário Padrão de Brasília)

// como obter um determinado paramentro de data
const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+ 1);//colo o mais 1 para acrescentar 1 mes ja que em js os meses começam no 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milesimos de segundos', data.getMilliseconds());
console.log('Dia semana', data.getDay());//0 é domingo e 6 é sabado
console.log(data.toString());


*FORMATANDO DATAS*
Ex:

//funçao que coloca zero a esquerda 
function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`
}


//Funçao que formata a data:
function formataData(data){
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth()+1);
   const ano = zeroAEsquerda(data.getFullYear());
   const horas = zeroAEsquerda(data.getHours());
   const minutos = zeroAEsquerda(data.getMinutes());
   const segundos = zeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}
//quando formatamos dessa maneira nao temos zeros a esquerda, por isso se por exemplo tivermos 4 segundos nas horas veriamos 18:46:4 (perdendo o zero a esquerda dos segundos) 


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

*/

