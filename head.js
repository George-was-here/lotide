const assertEqual = require('./assertEqual');

const head = function (assertEqual) {
  let firstElement = assertEqual[0];
  return firstElement;
  console.log(head);
}

module.exports = head;

