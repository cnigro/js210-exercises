// What will the following code snippets log?

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));
// the total value is 15
function counter(count) {
  // ...
}



function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
// the total value is NaN
var counter = 5;
var rate = 3;



var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
// the total value is 15


let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
// Uncaught SyntaxError: Identifier 'counter' has already been declared
