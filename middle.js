const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const middle = (arrayMiddle) => {
  let middleReturn = [];
  let arrayMiddleCalculation = arrayMiddle[Math.floor((arrayMiddle.length - 1) / 2)];
  if (arrayMiddle.length < 3) {
    return middleReturn;
  
  } else if (arrayMiddle.length % 2 !== 0) {
    middleReturn.push(arrayMiddleCalculation);
  
  } else {
    middleReturn.push(arrayMiddleCalculation, arrayMiddle[Math.floor(arrayMiddle.length / 2)]);
  }
  return middleReturn;
};

module.exports = middle;

