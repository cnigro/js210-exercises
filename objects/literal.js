// Identify the bug in the following code. Don't run the code until after you've tried to answer.

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// On line 11, we try to access a property using bracket notation, but the
// operand inside of them is not a string, nor is it a number. If it is a number,
// Javascript will convert it to a string, but we have provided neither.

