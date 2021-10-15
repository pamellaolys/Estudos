let varA = 'A'; // quero que o valor de A tenha o valor de B
let varB = 'B'; // quero que o valor de B tenha o valor de C
let varC = 'C'; // quero que o valor de C tenha o valor de A

const valorA = varB
const valorB = varC
const valorC = varA


// outra maneira de solucionar

let varA = 'A'; // quero que o valor de A tenha o valor de B
let varB = 'B'; // quero que o valor de B tenha o valor de C
let varC = 'C'; // quero que o valor de C tenha o valor de A

[varA , varB , varC] = [varB , varC, varA];

console.log(varA, varB , varC);