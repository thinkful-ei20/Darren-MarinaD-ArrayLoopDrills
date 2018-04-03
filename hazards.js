'use strict';

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    }

    else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  };
}

const marshmellowManWarning = hazardWarningCreator('Michellen Man Tire Monster!');

const elkCrossing = hazardWarningCreator('730 lbs Elk in the way!');

const fireWarning = hazardWarningCreator('Fire danger!');

marshmellowManWarning('New York');
marshmellowManWarning('Ghostbusters Movie Set');
marshmellowManWarning('Your worst nightmare');

elkCrossing('Boulder');
elkCrossing('Oregon');

fireWarning('The entire West Coast');