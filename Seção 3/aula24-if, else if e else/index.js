/*
ESTRUTURA CONDICIONAL: IF(se), ELSE IF(se não , se - usado para mais de uma condicão) e ELSE (se não)

Imagine um sistema que dependendo da hora é recebida uma mensagem de bom dia:

const hora = 10;

if (hora < 12){
    console.log('Bom dia');
} -> se a condiçao for avaliada como verdadeira (no caso é), retornará a mensagem Bom dia. Já se a condiçao nao for avaliada como verdadeira ela nao proceguirá com a mensagem.

- Tudo que estiver dentro das chaves da minha condicional vao ser impressas se a condiçao for avaliada como verdadeira
ex:
const hora = 12;

if (hora <= 12){
    console.log('Bom dia');
    console.log(1+1);
} -> a condiçao foi avaliada como verdadeira e retornou a mensagem Bom dia e a soma de 1+1 que é 2. 

****************************************
uso de else if 

-Entre 0 - 11 -> aparecera mensagem de bom dia
-Entre 12 - 17 -> aparecera mensagem de boa tarde
-Entre 18 - 23 -> aparecera mensagem de bom dia

ex:
const hora = 20;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if(hora >=12 && hora <= 17){
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <=23){
    console.log('Boa Noite');
} else {
    console.log('Olá');
}

- no caso dependendo do valor que esta na variavel hora se recebera uma mensagem diferente, no caso 20, seria Boa Noite

* IF pode ser usado sozinho.
* Sempre que utilizo a palavra ELSE, preciso de um IF antes.
* Eu posso ter varios else ifs na condiçao.
* Só posso ter um else na checagem da condição.
* Podemos usar condiçoes sem else if, utilizando apenas if e else.

Outro exemplo:

const tenhoGrana = true;

if(tenhoGrana){
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
-> teremos como resposta vou sair de casa pois a condiçao verdadeira de acordo com a variavel tenhoGrana




*/
