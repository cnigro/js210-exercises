// Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// We need to compare the object properties to see if they have the same values,
// because the === operator checks to see whether they are the same object,
// which they are not.
// Every object literal creates a new object. When the object is assigned to a
// variable, a reference to that object is stored in the variable. 

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // true