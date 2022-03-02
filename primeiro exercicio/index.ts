const readline = require('readline-sync')
const numberOne:number= parseInt(readline.question('escreva o primerio numero: ')) 
const numberTwo:number = parseInt(readline.question('escreva o segundo numero: ')) 

function sumTwoNumbers(numberOne:number,numberTwo:number):number{
    return numberOne+numberTwo
}

console.log("a soma dos numeros é: " + sumTwoNumbers(numberOne,numberTwo))