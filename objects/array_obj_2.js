// Given the code below, the user expects the average function to return 5. Is the user's expectation correct? Why or why not?

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  // return sum / array.length;
  return sum / Object.keys(array).length;
}

average(myArray);

// Only keys of non-negative integers are counted as part of an array. The length
// of the array is therefore 2, not 4. The assumption that the sum would be 20
// is correct, but given the length of two, the function returns 10.
