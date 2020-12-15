/*
 * Two types of arrays :
 *      Dense Arrays -
 *                  An array where its elements have contiguous indexes starting at zero
 *      Sparse Arrays -
 *                  An array whose elements don’t have contiguous indexes starting at zero
 */
// Dense Arrays
let colors = ['Red', 'Green', 'Blue'];
console.log(colors.length); // 3
colors.push('Yellow');
console.log(colors.length); // 4
colors = [];
console.log(colors.length); // 0

// Sparse Arrays
let numbers = [1, , 3, 4];
console.log(numbers.length); // 4
numbers[20] = 25;
console.log(numbers.length); // 21

// Using '.length' property
/* Emptying an array */
const newNumbers = [1, 2, 3, 4, 5]; // A constant array only means that the value of the pointer will not change, the data contained at that address can be changed
newNumbers.length = 0;
console.log(newNumbers); // []
/* Remove certain */
let anotherNewNumbers = [1, 2, 3, 4, 5]; // A constant array only means that the value of the pointer will not change, the data contained at that address can be changed
anotherNewNumbers.length = 3;
console.log(anotherNewNumbers); // [ 1, 2, 3 ]
/* Sparcing arrays */
const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 5;
console.log(fruits); // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ]

// Splicing Arrays
/* Delete elements */
let arr = [1, 2, 3, 4, 5];
let delArr = arr.splice(0, 3);
console.log(arr, delArr); // [ 4, 5 ] [ 1, 2, 3 ]
/* Insert elements */
arr.splice(0, 0, ...delArr);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
/* Replace element */
arr = [1, 2, 7, 8, 9]
console.log(arr); // [ 1, 2, 7, 8, 9 ]
arr.splice(2, 1, 3, 4, 5);
console.log(arr); // [1, 2, 3, 4, 5, 8, 9 ]

// Slice an array(Make a copy)
/* Clone whole array */
arr = [1, 2, 3, 4, 5];
let cloneArray = arr.slice();
cloneArray.pop(); // Removes last element
console.log(arr); // [ 1, 2, 3, 4, 5 ]  
console.log(cloneArray); // [ 1, 2, 3, 4 ]
/* Clone only a part of an array */
cloneArray = arr.slice(0, 3); // or arr.slice(3)
console.log(arr); // [ 1, 2, 3, 4, 5 ]  
console.log(cloneArray); // [ 1, 2, 3]

/*
 * 'every()' method is used to check if each and every elements in an array if it satisfies specific condition
 * Returns either 'true' or 'false' 
 */
const isOdd = (number) => number % 2 !== 0;
numbers = [1, 3, 5];
anotherNewNumbers = [1, 3, 5, 6];
let result = numbers.every(isOdd);
console.log(result); // true
result = anotherNewNumbers.every(isOdd);
console.log(result); // false
console.log([].every(isOdd)); // true

/*
 * To check if an array has at least one element that satisfies the condition
 * Returns either 'true' or 'false' 
 */
const isEven = (number) => number % 2 === 0;
numbers = [1, 3, 5];
anotherNewNumbers = [1, 3, 5, 6];
result = numbers.some(isEven);
console.log(result); // false
result = anotherNewNumbers.some(isEven);
console.log(result); // true
console.log([].some(isEven)); // false

/*
 *  The 'sort()' method sorts elements of an array
 * The 'sort()' method changes the positions of the elements in the original array
 * Sorts the array elements in ascending order with the smallest value first and largest value last
 * The 'sort()' method casts elements to strings and compares the strings to determine the orders
 */
numbers = [0, 1, 2, 3, 20, 10, 30];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 20, 3, 30 ]
/* 
 * The reason this happens is because - "2" > "10" (Checks character by character, thus "2" > "1") 
 * Hence we use some functions inside 'sort()' method
 * Syntax :
 *      array.sort(comparefunction);
 *      'compareFunction()' is => 'function compare(a,b) {}'
 * Conditions :
 *      If 'compare(a,b)' is less than zero, the 'sort()' method sorts 'a' to a lower index than 'b'
 *      If 'compare(a,b)' is greater than zero, the 'sort()' method sorts 'b' to a lower index than 'a'
 *      If 'compare(a,b)' returns zero, the 'sort()' method considers both are equal and leaves it unchanged
 */
/* Sorting Numbers */
numbers = [0, 1, 2, 3, 20, 10, 30];
numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(numbers); // [ 0, 1,  2, 3, 10, 20, 30 ]
// or simply
numbers = [0, 1, 2, 3, 20, 10, 30];
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 0, 1,  2, 3, 10, 20, 30 ]
/* Sorting characters */
let letters = ['D', 'a', 'f', 'C', 'e', 'B'];
letters.sort((a, b) => {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x === y ? 0 : x > y ? 1 : -1;
});
console.log(letters); // [ 'a', 'B', 'C', 'D', 'e', 'f' ]
// or simply
letters = ['D', 'a', 'f', 'C', 'e', 'B'];
letters.sort((a, b) => a.localeCompare(b));
console.log(letters); // [ 'a', 'B', 'C', 'D', 'e', 'f' ]
/* Sorting Dates */
let joinDates = ["July 1, 2010", "August 15, 2009", "December 12, 2011"];
joinDates.sort((a, b) => {
    let x = new Date(a),
        y = new Date(b);
    return x - y;
});
console.log(joinDates); // [ 'August 15, 2009', 'July 1, 2010', 'December 12, 2011' ]
// or simply
joinDates.sort((a, b) => new Date(a) - new Date(b));
console.log(joinDates); // [ 'August 15, 2009', 'July 1, 2010', 'December 12, 2011' ]

// Mapping method using 'map()'
// Find square of all numbers in an array
const square = (num) => Math.pow(num, 2);
let digitArray = [1, 2, 3, 4, 5];
let squareArray = digitArray.map(square);
console.log(squareArray); // [ 1, 4, 9, 16, 25 ]

// 'filter()' method
let nums = [10, 15, 16, 17, 18];
let fiveMultiple = nums.filter(num => num % 5 === 0);
console.log(fiveMultiple); // [ 10, 15 ]

// 'forEach()' method
console.log(nums); // [ 10, 15, 16, 17, 18 ]
nums.forEach((currrentElement, index, array) => array[index] = Math.pow(currrentElement, 2));
console.log(nums); // [ 100, 225, 256, 289, 324 ]

// 'reduce()' method
nums = [1, 2, 3];
let sum = nums.reduce((currentElement, nextElement) => currentElement + nextElement)
console.log(sum); // 6

// 'join()' method
letters = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'];
let word = letters.join('');
console.log(word); // JavaScript
console.log(typeof word); // string