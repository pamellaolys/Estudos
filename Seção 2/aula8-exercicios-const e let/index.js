/* Luiz Otavio Miranda tem 30 anos, pesa 84kg e tem 1.8 de altura e seu IMC é de 25.925925925925924
luiz Otávio nasceu em 1980*/

const nome = 'Pamella';
const sobrenome = 'Santos';
const idade = 30;
const peso = 110;
const altura = 1.76;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso /(altura*altura);
anoNascimento = 2021 - idade;

console.log(nome,sobrenome,'tem',idade,'anos,pesa' ,peso,'kg e tem',altura,'de altura e seu IMC é de',imc,'.',nome , sobrenome,'nasceu em',anoNascimento,'.');

//ou 

console.log(nome +' '+sobrenome +' tem '+ idade+'anos, pesa ' + peso + ' kg e tem ' + altura + ' de altura e seu IMC é de '+ imc + '. '+ nome +' '+ sobrenome+ ' nasceu em '+ anoNascimento+ '.');

//template strings

console.log(`${nome} ${sobrenome} tem  ${idade } anos, pesa ${peso} kg e tem altura de ${altura} e seu IMC é de ${imc} . ${nome} ${sobrenome} nasceu em ${anoNascimento} .`);

//${variavel} é a maneira mais moderna de concatenar texto e variavel/constante  