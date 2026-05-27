// passing functions as an argument
const numbers = ["a", "b", "c", "d"];
// since its a function you need to call it using ()
const doubled = numbers.map(num => num.toUpperCase()); // Higher-order function
console.log(doubled); // Outputs: [2, 4, 6, 8]
// returning functions from functions
function createGreet(greet) {
  return function (name) {
    return `${greet} ${name}`;
  }
}
const greeting = createGreet("Hello");
//creating a variable first
console.log(greeting("Alice"));
//chaining function calls
console.log(createGreet("Hello")("Alice"));
