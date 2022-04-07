const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`🏅🏅🏅Assertion Passed: ${actual} === ${expected}`) : console.log(`😵‍💫😵‍💫😵‍💫Assertion Failed:  ${actual} !== ${expected}`);
};

const countLetters = (sourceString) => {
  let numOfEachLetter = {};
  for (let x of sourceString) {
    if (x !== ' ') {
      if (numOfEachLetter[x]) {
        numOfEachLetter[x] += 1;
      } else {
        numOfEachLetter[x] = 1;
      }
    }
  }
  return numOfEachLetter;
};


