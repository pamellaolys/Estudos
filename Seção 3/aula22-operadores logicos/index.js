/*
Operadores Lógicos -> Geralmente utilizados para fazer mais de uma comparação

&& -> AND -> E -> todas as expressoes precisam ser verdadeiras para retornar true, se uma retornar false a expressao completa retornará falso.

|| -> OR -> OU -> se qualquer uma das duas expressoes for verdadeiras, a expressao completa é verdadeira. Só é falso, se as todas as expressoes forem falsas.

! -> NOT -> NÃO ->nega expressoes, inverte seus valores. Se eu negar uma expressao com valor true, ela retornará false, e se eu negar uma expressao falsa, eu inverto seu valor e a trasformo em true.

exemplo com expressao AND/E:
console.log(true && true ); // ex: avaliar se eu tenho dinheiro no bolso e se faz sol para poder sair - precisa que as duas expressoes sejam verdadeiras para que a expressao completa seja verdadeira. Caso uma delas seja falsa a expressao completa retorna falso

exemplo com expressao OR/OU:
console.log(true || false ); // ex: avaliar se eu tenho dinheiro no bolso OU se faz sol para poder sair -se qualquer uma das duas expressoes for verdadeiras, a expressao completa é verdadeira. Só é falso, se todas expressoes forem falsas.

exemplo de uso:
const usuario = 'Luiz'; //form que usuario digitou
const senha = ''123456; //form que usuario digitou

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar); -> o usuario preencheu o meu formulario, e eu quero o programa confirme se o que ele digitou esta igual as informaçoes que tenho no meu banco de dados, se ambas estiverem corretas pois utilizamos o operador logico &&, retornará true e nosso usuario conseguirá logar, se uma das informaçoes não for correta, nao conseguira logar no sistema e retornará false.

obs: se eu utilizasse o operador logico errado como o OR, um usuario que errasse seu usuario ou senha conseguiria entrar no sistema normalmente.

exemplo com operador logico de negação ! :
console.log(!true); -> retorna false pois estou negando seu valor 
obs: nao é muito comum o uso de mais de uma negaçao, mas é possivel e se por exemplo (!!true) teriamos como resultado true, pois a expressao foi negada uma vez e se tornou false e negada novamente que retornaria true.

*/