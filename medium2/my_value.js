// What will the following program log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);                // 3
console.log(Object.keys(array).length);   // 4

array[-2] = 'Watermelon';
console.log(array.length);                // 3
console.log(Object.keys(array).length);   // 5

// An array index can only be a non-negative integer. Any other value
// is treated as a property on the array object, not an array element.
// This works because arrays are implemented with objects.
