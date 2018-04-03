'use strict';
// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let filteredArr = [];
  for (const elem of arr) {
    if( fn(elem)) {
      filteredArr.push(elem); 
    }       
  }
  return filteredArr;
}

console.log(filter(myNames,name => name[0] === 'R'));

