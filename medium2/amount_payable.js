// What does the following code log? Why is this so?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// this works because of closures. When a function is defined, it retains
// access to any variables within its scope. In this case, the enclosing
// scope is the global scope, so totalPayable still has access to 
// startingBalance, despite not being passed into it as an argument.