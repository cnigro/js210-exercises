// How can you refactor the function so that it will work with invoices containing any number of line items?

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

// use the rest parameter syntax, or the arguments object

function invoiceTotal(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

  return total;
}