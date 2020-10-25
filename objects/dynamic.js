// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);

// The tricky bit here is that on line 11, we add a new property
// to the object, called '456'. So, when we log myObject[prop2],
// we're accessing the key '456', not prop2.

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

// function declarations will be hoisted first, including the whole definition
// then variable declarations will be hoisted, without initializing

function myFunc() {           // 1 hoisted
  return 'funcProp';
}

var myObj;                    // 2 hoisted
myObj = {};

myObj[myFunc()] = 'hello, ';  // myObj['funcProp'] = 'hello, '
console.log(myObj);           // { 'funcProp': 'hello, ' }

myObj[myFunc()] = 'world!';   // myObj['funcProp'] = 'world'
console.log(myObj);           // { 'funcProp': 'world!' }