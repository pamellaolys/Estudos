//Desafio printar no navegador a data do dia que esta vendo nessa estrutura: Segunda-feira, 7 de Outubro de 2019 22:52:00

/*******Minha solução*********
const data = new Date();
const diaSemana = (data.getDay());
const dia = (data.getDate());
const mes = (data.getMonth() + 1);
const ano = (data.getFullYear());
const horas =  zeroAEsquerda(data.getHours());
const minutos = zeroAEsquerda(data.getMinutes());
const segundos = zeroAEsquerda(data.getSeconds());
let diaSemanaTexto = getDiaSemanatexto(diaSemana);
let mesDoAno = getMonth(mes);

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

function getMonth(mes) {
    let mesDoAno;

    switch (mes) {
        case 0:
            mesDoAno = 'Janeiro';
            return mesDoAno;
        case 1:
            mesDoAno = 'Fevereiro';
            return mesDoAno;
        case 2:
            mesDoAno = 'Março';
            return mesDoAno;
        case 3:
            mesDoAno = 'Abril';
            return mesDoAno;
        case 4:
            mesDoAno = 'Maio';
            return mesDoAno;
        case 5:
            mesDoAno = 'Junho';
            return mesDoAno;
        case 6:
            mesDoAno = 'Julho';
            return mesDoAno;
        case 7:
            mesDoAno = 'Agosto';
            return mesDoAno;
        case 8:
            mesDoAno = 'Setembro';
            return mesDoAno;
        case 9:
            mesDoAno = 'Outubro';
            return mesDoAno;
        case 10:
            mesDoAno = 'Novembro';
            return mesDoAno;
        case 11:
            mesDoAno = 'Dezembro';
            return mesDoAno;
        default:
            mesDoAno = '';
            return mesDoAno;
    }

}

//funçao que coloca zero a esquerda 
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

const resultado = document.querySelector('#resultado');
resultado.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesDoAno} de ${ano} ${horas}:${minutos}:${segundos}`;

//**********fim da minha solução*********** */


// ***solução do professor******
/*
const h1 = document.querySelector('.container h1');
const data = new Date();


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

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
        default:
            nomeMes = '';
            return nomeMes;
    }
}

//funçao que coloca zero a esquerda 
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanatexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes)

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${ zeroAEsquerda(data.getHours())}:${ zeroAEsquerda(data.getMinutes())}:${ zeroAEsquerda(data.getSeconds())}`);
}

h1.innerHTML = criaData(data);*/

//**********fim da solução do prof*********** */

//**********Solução Mais simples *********** */
/*const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes ={
    dateStyle:'full',
    timeStyle:'short'
}

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

//**********fim da Solução Mais simples *********** */

/*******outra soluçao****** */
const h1 = document.querySelector('.container h1');
const data = new Date();


function getDiaSemanatexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

//funçao que coloca zero a esquerda 
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanatexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes)

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${ zeroAEsquerda(data.getHours())}:${ zeroAEsquerda(data.getMinutes())}:${ zeroAEsquerda(data.getSeconds())}`);
}

h1.innerHTML = criaData(data);