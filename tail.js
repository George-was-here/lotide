const assertEqual = require('./assertEqual');

const tail = function(array) {
  const tailArray = [];
  tailArray.push(array.slice(1));
  return tailArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

module.exports = tail;