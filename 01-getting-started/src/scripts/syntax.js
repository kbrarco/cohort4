// Khush Brar 20200310
// Comp 100C
// For: 100C

// define attributes / variables
// -number
const isItNumber = (a) => typeof a === 'number';

// -string
const isItString = (a) => typeof a === 'string';

// -boolean
const isItBoolean = (a) => typeof a === 'boolean';

// -array
const isItArray = (a) => Array.isArray(a);

// -dictionary / objects
const isItObject = (a) => a.constructor === Object;

// -undefined
const isItUndefined = (a) => typeof a === "undefined";

// sample if / else
const sampIfElse = () => {
  if(a >= b) {
    return 'a is equal to or greater than b';
  }else {
    return 'a is lesser than b';
  }
};

// functions
// -parameters
// -returns
const cube = (a) => a * a * a;

// arrays
const khushArray = [1,3,5,64,7,45,654,56];

// -add to the front
const arrayUnshift = (a) => khushArray.unshift(a);

// -add to the end
const arrayPush = (a) => khushArray.push(a);

// -update values
const arrayDoAnything = () => khushArray.length;

// loops
// -for
for(let i = 0; i <= 23; i++) {
  console.log(i);
}
// -for/in
const khushObject = {a:1, b:324234232, c:3243, d:434};
for (const property in khushObject) console.log(property);

// -while
while (i <= 895) {
  console.log('Not 896 yet');
}
// -do while
do {
  i++;
}while (i < 10);

// -forEach (with array and function)
// "The for each...in statement is deprecated as the part of ECMA-357 (E4X) standard. E4X support has been removed.
// Consider using for...of instead." - From Mozilla Developer Network

// Objects / Dictionaries
// -declare object
const khushObjectTwo = {
  name: 'Khush',
  age: 35,
  favoriteDataStructure: 'object',
};

// -lookup key to retrieve value
console.log(khushObjectTwo.name);
