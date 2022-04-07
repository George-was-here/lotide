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

const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

