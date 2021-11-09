/*
&&/e -> todas as expressoes devem ser verdadeiras para retornar true.
||/ou -> todas as expressoes devem ser falsas para retornar false

VALORES QUE AVALIAM EM FALSO EM JAVASCRIPT:
- Em javascript tudo pode ser avaliado em verdadeiro ou falso

- Alem do valor de false (que é o falso literal) outros valores avaliados em falso se chamam FALSY VALUES, são eles:
0 -> zero;
" " -> string vazia, seja ela de aspas simples, duplas ou crase;
null/undefined -> nulo/indefinido;
NaN -> not a number;

- Qualquer valor diferente de : false, 0, string vazia, null/undefined e NaN, é considerado uma expressao verdadeira em javascript;



&&-> false && true -> false (a partir do momento que eu tenho uma expressao falsa no meu operador logico E o sistema para de avaliar o resto da expressao pois ele ja sabe que independente das proximas respostas terá um resultado o valor false, ou seja sera printado no console a expressao que era tida como falsa. Isso se chama avaliaçao de curto circuito)

ex1:
console.log('Luiz Otávio' && 0 && 'Maria'); -> retornará no console 0, que é o valor avaliado em javaScript como falso)

ex2:
console.log('Luiz Otávio' && true && 'Maria'); -> retornará no console Maria, que é o valor da ultima expressao verdadeira avaliada. 

ex3:
console.log('Luiz Otávio' && true && NaN); -> retornará no console NaN, que é um valor falso.

ex4:
console.log('Luiz ' && undefined && 'Maria'); -> retornará no console undefined, que é um falsy value do javascript.

EXEMPLO DE CURTO CIRCUITO:

function falaOi(){
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());-> vai retornar false pois para expressoes && ambas tem que ter resultado verdadeiro.

Se fizesse esse mesmo programinha com um valor verdadeiro retornaria Oi da funçao falaOi:

function falaOi(){
    return 'Oi';
}
const vaiExecutar = "João";

console.log(vaiExecutar && falaOi());-> vai retornar oi pois o valor da constante vaiExecutar nao se encaixa nos falsy values.

****************************************
||-> false || true -> true (a partir do momento que eu tenho uma expressao verdadeira no meu operador logico OU o sistema determina que a expressao é valida.

ex1:
console.log(0 || false || null || 'Luiz Otávio'|| true); -> retornará no console Luiz Otávio, que é o primeiro valor avaliado em verdadeiro.

EXEMPLO: 
- usuario deve selecionar cor para seu perfil

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); -> teremos como resposta preto, que foi o valor verdadeiro da expressao;


PEGADINHA:
    -  QUAL É O VALOR VERDADEIRO?

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); -> Receberiamos como resposta no console false, mas nao a alternativa d e sim a alternativa C, que é uma string!

*/