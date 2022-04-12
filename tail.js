const assertEqual = require('./assertEqual');

const tail = (arr) => {
  return arr.slice(1);
};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

module.exports = tail;

// console.log(tail(["INI", "MINI", "MINNIE", "MOE"]));x