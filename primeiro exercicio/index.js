var readline = require('readline-sync');
var numberOne = parseInt(readline.question('escreva o primerio numero: '));
var numberTwo = parseInt(readline.question('escreva o segundo numero: '));
function sumTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log("a soma dos numeros é: " + sumTwoNumbers(numberOne, numberTwo));
