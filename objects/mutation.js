// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

// When we run this code, array2 will remain unaffected by the capitalization
// from the second loop. Because the objects contained in the array are
// immutable, we cannot capitalize them in this way.

// If we assign array1 to array2, such that array2 points to the same memory
// as array1, then the changes will affect the variable array2 as well.