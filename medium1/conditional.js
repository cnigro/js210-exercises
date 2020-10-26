// The following program is expected to log each number between 0 and 9 (inclusive) that is a multiple of 3. Read through the code shown below. Will it produce the expected result? Why or why not?

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// The first time we encounter a multiple of 3 (3 in this case),
// the loop will cease to increment the variable i. It will 
// loop forever, logging 3 to the console. Fix it by removing
// the else condition, and put the increment statement outside
// of the conditional.
