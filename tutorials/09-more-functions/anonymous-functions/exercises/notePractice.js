// anonymous exampple
let greet = function(name) {
  return `Hello, ${name}`;
};

console.log(greet("Alice"));

// don't need to declare it can be definied in-line
console.log((function(name){
  return `Hello, ${name}`
})("Bob"));

// short hand 1 parameter (return is implicit)
// let greet = name => `Hello ${name}`;
// short hand 0 or 2+ parameters
let multiplyandLog = (a,b) => {
  let result = a*b
  return result;
}
let numbers = [1, 2, 3, 4, 5];
// the "0" can be changed to change final result by number and math expression +,-,/
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// sorting alphabetically
// localeCompare is a string method 
let names = ["Charlie","Axam", "Alice", "Bob"];
names.sort((a,b) => a.localeCompare(b));
console.log(names);
