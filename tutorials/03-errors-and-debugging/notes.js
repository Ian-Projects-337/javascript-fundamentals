// const input = require('readline-sync');

// let animals = [{ name: 'cat' }, { name: 'dog' }];
// let index = Number(input.question("Enter index of animal:"));

// try {
//   console.log("Animal at index:", animals[index].name);
// } catch (err) {
//   console.log("We caught a TypeError, but our program continues to run!"); console.log("You tried to access an animal at index:", index);
// }
// console.log("The code goes on...");
// let index1 = input.question("Enter something");

// debugging complex function
function calculateOrderTotal(orderItem) {
  // first just checking if array
  if (!Array.isArray(orderItem)) {
    throw new Error("Order item must be an array.");
  }
  let total = 0;
  // function showing the items being added
  orderItem.forEach((item, index) => {
    // seeing the values added, ADD CONSOLE.LOG CHECKS!!!
    console.log(`Processing item ${index + 1}:`, item);
    total += item.price * item.quantity
  });
  console.log(`Order total: ${total}`);
  return total;
}
// debugging in action try/catch
try {
  const order = [
    { price: 10, quantity: 2 },
    { price: 15, quantity: 1 },
  ];
  calculateOrderTotal(order);
} catch (err) {
  console.error(err.message);
}
