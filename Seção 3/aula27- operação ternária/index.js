/* 

Estrutura de uma operaçao ternaria:
(condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

*O operador ternário em javascript é representado por uma interrogação e dois pontos. 

*isso pode substituir e encurtar meu codigo quando preciso de um if, else.

EXEMPLO: Programinha para saber se de acordo com pontos usuario é vip:

const pontuacaoUsuario = 1000;

if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}


USANDO OPERAÇAO TERNARIA

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao); -> terei como resposta Usuário normal, pois no caso ele teria somente 500pontos. E para a cor teriamos o resultado Preta já que nosso usuario nao escolheu outra.


*/

