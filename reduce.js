'use strict';

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function toBeReduced (str) {
  if (str.length === 3) {return ' ';}
  return str[str.length-1].toUpperCase();
}

function Reducer (str) {
  return str.split(' ')
    .reduce(function (accumulator, currentValue) {
      return accumulator.concat(toBeReduced(currentValue));
    }, '');
}


console.log(Reducer(input));