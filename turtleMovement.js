'use strict';

let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let filtered = movements.filter(steps => steps[0] >= 0 && steps[1] >= 0);

const totalSteps = function(arr) {
  let total = 0;
  filtered.map(steps => total += steps[0] + steps[1]);
  return total;
};



const eachCaseSteps = function(arr) {
  let totalArr = [];
  filtered.forEach(steps => totalArr.push(steps[0] + steps[1]));
  return totalArr;
};

// console.log(filtered);
console.log(eachCaseSteps());