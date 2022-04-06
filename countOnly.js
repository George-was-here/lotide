const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`🏅🏅🏅Assertion Passed: ${actual} === ${expected}`) : console.log(`😵‍💫😵‍💫😵‍💫Assertion Failed:  ${actual} !== ${expected}`);
};

const countOnly = (allItems, itemsToCount) => {
  let countedObject = {};
  for (const key in itemsToCount) {
    console.log("-------------------------");
    console.log("Test key of object:", key);
    let shouldCount = itemsToCount[key];
    console.log("Should we count:", key, shouldCount);
    if (shouldCount) {
      let matchedList = allItems.filter((item) => {
        console.log("Key:", key);
        console.log("Item:", item);
        let keepThisItem = item === key;
        console.log(keepThisItem);
        return keepThisItem;
      });
      const numMatchingItems = matchedList.length;
      if (numMatchingItems > 0) {
        countedObject[key] = numMatchingItems;
      }
    }
  }
  console.log("Counted Object:", countedObject);
  return countedObject;
};
/*
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/