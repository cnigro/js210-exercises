// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// This works because in JS the inner functions have access to the local
// surrounding scope and to the outer scope up to the global scope.
