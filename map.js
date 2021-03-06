const assertArraysEqual = (array1, array2) => {
  console.log(array2);
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

const words = ["ground", "control", "to", "major", "tom"];
map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

