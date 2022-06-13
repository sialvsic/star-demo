// Tuple demo 元组 Tuple
let demoTuple: [string, number];
demoTuple = ['hello', 333]; // OK
demoTuple[2] = 'world';

console.log(demoTuple[5].toString()); 
// In Typescript 2.7, Tuple became fixed length. Accessing an element outside the set of known indices is not allowed anymore :

// Guess where we use tuple frequently?
