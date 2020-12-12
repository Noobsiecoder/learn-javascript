/*
 * Unary plus (+)  – convert an operand into a number
 * Unary minus (-) – convert an operand into a number and negate the value after that.
 * Prefix / Postfix increments (++) – add one to its operand
 * Prefix / Postfix decrements (--) – subtract one from its operand.
 */

// Unary plus operator
let number = '10';
console.log(typeof number); // string
console.log(typeof +number); // number
/* If the value is already a 'number', no effect takes place */
let randNum = 25;
console.log(typeof randNum); // number
console.log(typeof +randNum); // number
/* Note:- The unary plus sign performs the same coversion as 'Number()' method */
/* We can also use the following operand for boolean values */
let inProgress = false;
let isDone = true;
console.log(+inProgress); // 0
console.log(+isDone); // 1
/* When you apply the unary plus or minus on an object that has the 'valueOf()' method, the method is called to return the converted value. */
let newProduct = {
    valueOf: function() {
        return 50;
    }
};
/* In case the returned value is NaN, the 'toString()' method is called to get the converted value. */
console.log(+newProduct); // 50

// Unary minus operator
let newNumber = '10';
console.log(typeof newNumber); // string
console.log(typeof -newNumber); // number
console.log(-newNumber); // -10
/* If the value is already a 'number', no effect takes place */
let newRandNum = 25;
console.log(typeof newRandNum); // number
console.log(typeof -newRandNum); // number
/* Note:- The unary minus sign performs the same coversion as 'Number()' method and also it negates the value*/
/* We can also use the following operand for boolean values */
let newProgress = true;
console.log(-newProgress); // -1
/* When you apply the unary plus or minus on an object that has the 'valueOf()' method, the method is called to return the converted value. */
let newObject = {
    valueOf: function() {
        return  100;
    }
};
/* In case the returned value is NaN, the 'toString()' method is called to get the converted value. */
console.log(-newObject); // -100

// Increment and decrement operators
/*
 * The prefix increment/decrement returns the value of a variable after it has been incremented/decremented. 
 * Whereas the postfix increment/decrement returns the value of a variable before it has been incremented/decremented.
 */
/* Postfix */
let i = 10; j = 20;
let m = (i--) + j;
console.log(`The value of m is => ${m}`); // 30 
console.log(`The value of i is => ${i}`); // 9
/* Prefix */
i = 10;
m = (--i) + j;
console.log(`The value of m is => ${m}`); // 29 
console.log(`The value of i is => ${i}`); // 9