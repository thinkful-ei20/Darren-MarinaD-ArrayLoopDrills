'use strict';

function max(numbers) {
  if (numbers.length === 0 ) {
    return null;
  }
  let result = 0;
  let counter = 0;
  while (counter < numbers.length){
    if (numbers[counter]> result) {
      result = numbers[counter];
    }
    counter ++;
  }
  return result;
}
  
function min(numbers) {
  if (numbers.length === 0 ) {
    return null;
  }
  let result = numbers[0];
  let counter = 0;
  while (counter < numbers.length){
    if (numbers[counter]< result) {
      result = numbers[counter];
    }
    counter ++;
  }
  return result;
}