
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`🏅🏅🏅Assertion Passed: ${actual} === ${expected}`) : console.log(`😵‍💫😵‍💫😵‍💫Assertion Failed:  ${actual} !== ${expected}`);
};
const head = function (assertEqual) {
  let firstElement = assertEqual[0];
  return firstElement;
  console.log(head);
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

