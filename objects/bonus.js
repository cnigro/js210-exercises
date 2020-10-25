// Fill in the blanks

// function calculateBonus() {
//   return _________[1] ? _________[0] / 2 : 0;
// }

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// The arguments object contains an entry for every argument passed to the function