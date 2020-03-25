// Khush Brar
// Comp 100C

const khushFunctions = {

   // Some variables for my shenanigans
   a: 3,
   b: 7,
   khushObject: {a:1, b:324234232, c:3243, d:434},
   khushArray: [1, 3, 5, 64, 7, 45, 654, 56],

  // define attributes / variables
  // -number
   isItNumber: (a) => typeof a === 'number',

  // -string
   isItString: (a) => typeof a === 'string',

  // -boolean
   isItBoolean: (a) => typeof a === 'boolean',

  // -array
   isItArray :(a) => Array.isArray(a),

  // -dictionary / objects
   isItObject: (a) => a.constructor === Object,

  // -undefined
   isItUndefined: (a) => typeof a === "undefined",

  // sample if / else
   sampIfElse: () => {
    if (khushFunctions.a >= khushFunctions.b) {
      return 'a is equal to or greater than b';
    } else {
      return 'a is lesser than b';
    }
  },

  // functions
  // -parameters
  // -returns
   cube: (a) => a * a * a,

  // arrays
  // -add to the front
   arrayUnshift: (a) => khushFunctions.khushArray.unshift(a),

  // -add to the end
   arrayPush: (a) => khushFunctions.khushArray.push(a),

  // -update values
   arrayDoAnything: () => khushFunctions.khushArray.length
};

export default khushFunctions;

let i = 93;
// loops
// -for
for(i = 0; i <= 23; i++) {
  console.log(i);
}
// -for/in
for(const property in khushObjectTwo) {
  console.log(`${property}: ${khushObjectTwo[property]}`)
}
// -while
while(i <= 895) {
  console.log('Not 896 yet');
}
// -do while
do{
  i ++;
}while(i < 10);

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
//
// -lookup key to retrieve value
console.log(khushObjectTwo.name);
