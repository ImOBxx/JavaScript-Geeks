
const readlineSync = require("readline-sync");  // Corrected 'readlinesync' to 'readlineSync'

const number = readlineSync.question("Enter A Number: ");  // Parentheses placement fixed and spacing

const remainder = number % 2;

console.log(number);

if (remainder == 0) {
    console.log(`${number} is an Even number`);
    if (number % 4 == 0)
    {
        console.log(`${number} is Divisible by 4`);
    }
    else 
    {
        console.log(`${number} is not Divisible by 4`);
    }

} else {
    console.log(`${number} is an Odd number`);
    if (number % 5 == 0)
    {
        console.log(`${number} is Divisible by 5`);
    }
    else 
    {
        console.log(`${number} is not Divisible by 5`);
    }
} 

