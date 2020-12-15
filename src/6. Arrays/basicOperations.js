/* 
 * An array is an ordered list of different values in JavaScript
 * Each value is called an 'element' specified by an 'index'
 * In JavaScript, the 'index' starts from zero (0)
 * The length of an array is dynamically sized
 */
// Three ways in which array can be created
let firstArray = []; // Preferred way
let secondArray = new Array();
let thirdArray = Array();

// Access an element from an array
let numbers = [1, 2, 3, 4, 5];
let number = numbers[3];
console.log(number); // 4

// Arrays are mutable
let binaries = [1101, 1001, 1011];
console.log(binaries); // [ 1101, 1001, 1011 ]
binaries[0] = 10001;
console.log(binaries); // [ 10001, 1001, 1011 ]

// Basic operations
let newArray = [5, 4, 3, 2, 1];
/* Size of array */
let arrayLength = newArray.length;
console.log(arrayLength); // 5
/* Add element at the end */
newArray.push('End');
console.log(newArray); // [ 5, 4, 3, 2, 1, 'End' ]
/* Remove element at the end */
newArray.pop();
console.log(newArray); // [ 5, 4, 3, 2, 1 ]
/* Add element at the beginning */
newArray.unshift('First');
console.log(newArray); // [ 'First', 5, 4, 3, 2, 1, 0 ]
/* Remove element at the beginning */
newArray.shift();
console.log(newArray); // [ 'First', 5, 4, 3, 2, 1, 0 ]
/* Find element index in an array */
const index = newArray.indexOf(3);
console.log(index); // 2
/* Check if value is an array */
console.log(Array.isArray(newArray)); // true