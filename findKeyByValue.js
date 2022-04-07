const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`🏅🏅🏅Assertion Passed: ${actual} === ${expected}`) : console.log(`😵‍💫😵‍💫😵‍💫Assertion Failed:  ${actual} !== ${expected}`);
};

const findKeyByValue = (object1, string2) => {
  const keys = Object.keys(object1);
  for (const key of keys) {
    if (object1[key] === string2) {
      return key;
    }
  }

  return undefined;
};

