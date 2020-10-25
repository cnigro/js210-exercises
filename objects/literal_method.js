// In the following code, a user creates a person object literal and defines two methods for returning the person's first and last names. What is the result when the user tries out the code on the last line?

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// When we run this code, we log the string representation of the 
// methods firstName and lastName, because we have not appended
// parentheses, to make them function calls. Because functions are
// first class objects, we can reference the function's string representation
// with dot notation and no parentheses.