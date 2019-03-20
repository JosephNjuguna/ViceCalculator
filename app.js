/**
 * A simple Node.js calculator app that uses
 * the built-in Readline command line interface.
 */

const operations = require('./app/operation');
const {
  add,
  minus,
  multiply,
  divide
} = require('./app/calc');
const readline = require('readline');

// Use readline to create command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
    Calc.js
    Welcome to the Node.js Calculator app!
  `);

rl.question('Enter a number: ', x => {
  rl.question('Enter the second number: ', y => {
    rl.question(
      `
    Please select from the following options:
    [1] Addition (+)
    [2] Subtraction (-)
    [3] Multiplication (*)
    [4] Division (/)
    Enter your number of choice: `,
      choice => {
        if (!operations.validate(x, y)) {
          console.log('Only numbers are allowed! Please restart the program.')
        } else {
          switch (choice) {
            case '1':
              console.log(`The sum of ${x} and ${y} is ${add(x, y)}.`);
              break;
            case '2':
              console.log(`The difference of ${x} and ${y} is ${minus(x, y)}.`);
              break;
            case '3':
              console.log(`The product of ${x} and ${y} is ${multiply(x, y)}.`);
              break;
            case '4':
              console.log(`The quotient of ${x} and ${y} is ${divide(x, y)}.`);
              break;
            default:
              console.log('Please restart the program and select a number between 1 and 4.')
              break;
          }
        }
        rl.close();
      }
    );
  });
});