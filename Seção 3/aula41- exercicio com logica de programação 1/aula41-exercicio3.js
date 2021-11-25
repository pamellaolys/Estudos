/* Escreva uma funçao que recebe um numero e retorne o seguinte:
- Número é divisivel por 3 = Fizz
- Número é divisivel por 5 = Buzz
- Número é divisivel por 3 e 5 = FizzBuzz
- Número NÃO é divisivel por 3 E 5 = Retorna o proprio numero.
- Checar se o numero é realmente um numero = retorna o proprio numero
- Use a função com numeros de 0 a 100

Dica:
*para saber se um numero é divisivel por outro podemos avaliar pelo resto % === 0.
*Sempre colocar a expressao que avalia mas de uma condiçao antes das outras para nao ter conflito

*/
//solução:



function fizzBuzz(num) {
    if (typeof num === typeof '') return num;
    if (num % 3 === 0 && num % 5 === 0) return ('FizzBuzz');
    if (num % 3 === 0) return ('Fizz');
    if (num % 5 === 0) return ('Buzz');
    return num;
} 
   

for (let i =0; i <= 100 ; i++){
    console.log(i , fizzBuzz(i));
}