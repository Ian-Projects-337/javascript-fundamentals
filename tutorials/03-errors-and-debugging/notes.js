const input = require('readline-sync');

let animals = [{ name: 'cat' }, { name: 'dog' }];
let index = Number(input.question("Enter index of animal:"));

try {
  console.log("Animal at index:", animals[index].name);
} catch (err) {
  console.log("We caught a TypeError, but our program continues to run!"); console.log("You tried to access an animal at index:", index);
}
console.log("The code goes on...");
let index1 = input.question("Enter something");
