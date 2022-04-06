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
  if (array1.length !== array2.length) return true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//WITHOUT IS BELOW

const without = (sourceArray, itemsToRemove) => {
  const removedArray = [...sourceArray];
  let removalElementIndex;
  for (let i = 0; i < itemsToRemove.length; i++) {
    removalElementIndex = removedArray.indexOf(itemsToRemove[i]);
    if (removalElementIndex > -1) {
      removedArray.splice(removalElementIndex, 1); 
    }
  }
  return removedArray;
};
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

/*
    

if (array1[i] !== array2[i]) {


}
  
  if (array1.length !== array2.length) return true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;

const without = (sourceArray, itemsToRemove) => {

  deletionFilter = function(itemsToRemove) {
  for (let i = 0; i < sourceArray.length; i++)
  return itemsToRemove;
  console.log(itemsToRemove);
}
const returnedArray = sourceArray.filter(deletionFilter);
console.log(returnedArray);
};

without([1, 2, 3], [1]) 
without(["1", "2", "3"], [1, 2, "3"])
*/

