/*nome: Maria Eduarda Freitas*/

const teclado = require (`prompt-sync`)();

let fahrenheit: number = parseFloat (require(`Digite a temperatura em °F: `));

let celsius: number = (5/9) * (fahrenheit - 32);

console.log(`O valor da conversão é: ${celsius}`);
