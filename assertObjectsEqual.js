const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`🏅🏅🏅Assertion Passed: ${actual} === ${expected}`) : console.log(`😵‍💫😵‍💫😵‍💫Assertion Failed:  ${actual} !== ${expected}`);
};

let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const keysInObject1 = Object.keys(object1);
  const keysInObject2 = Object.keys(object2);

  if (keysInObject1.length !== keysInObject2.length) {
    return false;
  }
  for (const key of keysInObject1) {
    if (!object2[key])  {
      return false;
    }

    const isValue1Array = Array.isArray(object1[key]);
    const isValue2Array = Array.isArray(object2[key]);

    if (isValue1Array !== isValue2Array) {
      return false;
    }

    if (isValue1Array && isValue2Array) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }

    
  }

  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(actual, expected)) ? console.log(`🏅🏅🏅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`😵‍💫😵‍💫😵‍💫Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
};

