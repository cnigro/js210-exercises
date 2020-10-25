// What will the following code log to the console and why?

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);

// line 3:  "a"
// line 4:  undefined
// line 10: "d"
// line 11: 5
// line 12: ["a", "b", "c", "f", "-1": "d", e: 5]

// If any properties are added to an array object, the string representation
// will include the keys and values for those properties, but they will
// not be displayed the same as array elements. They are properties of the
// object, not array elements. 