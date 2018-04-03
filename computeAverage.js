'use strict';

function average(numbers) {
  let total = 0;
  numbers.forEach(num => total += num );
  return total / numbers.length;
}


