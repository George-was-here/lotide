const takeUntil = function(array, callback) {
  const returningArray = [];

  for (const element of array) {
    if (callback(element)) {
      return returningArray;
    }
    returningArray.push(element);
  }
  console.log(`Returning Array, ${returningArray}`);
  return returningArray;
};

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
*/

const assertArraysEqual = (array1, array2) => {
  if (array1.length === array2.length) {
    console.log(`🏅🏅🏅Assertion Passed: ${array1} === ${array2}`);
    return true;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      (`😵‍💫😵‍💫😵‍💫Assertion Failed:  ${array1} !== ${array2}`);
      return false;
    }
  }
};

let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
