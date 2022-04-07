/*let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}

console.log(typeof text);


const myFn = function() {
  console.log("I am function.");
}
console.log(---------------------------);
myFn.someAttribute = 42;
console.log(myFn.someAttribute);
console.log(---------------------------);
function runner(f) {
  f();
}
console.log(---------------------------);
runner(myFn);

console.log(myFn("hi"));
*/ 

const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
}

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound));