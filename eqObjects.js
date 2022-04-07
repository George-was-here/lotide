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
    if (object1[key] !== object2[key]) {
      return false;
    }
    
  }

  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(cd, cd2));