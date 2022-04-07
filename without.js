const assertArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
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

const without = (sourceArray, itemsToRemove) => {
  const removedArray = sourceArray.filter(element => {
    const shouldRemove = itemsToRemove.includes(element);
    if (shouldRemove) {
      return false;
    } else {
      return true;
    }
  });
  return removedArray;
};
