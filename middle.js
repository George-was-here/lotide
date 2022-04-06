const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`🏅🏅🏅Assertion Passed: ${actual} === ${expected}`) : console.log(`😵‍💫😵‍💫😵‍💫Assertion Failed:  ${actual} !== ${expected}`);
};

let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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


