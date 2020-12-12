/*
 * To compare two values, we use the comparison operators
 * Comparison operator returns a boolean value indicating that the comparison is true or false
 */

let firstCheck = (25 > 15); // true
let secondCheck = (25 < 15); // false
let thirdCheck = (15 == 15); // true

// Comparing Numbers
let a = 20,
    b = 30;
console.log(a >= b); // false
console.log(a == 20); // true

// Comparing strings
let firstName = 'alisson',
    secondName = 'catherine';    
let nameResult = firstName < secondName;
console.log(nameResult); // true
console.log(firstName == 'alissson'); // false
/* Because JavaScript compares character codes in the strings numerically, an unexpected result occurs */
let firstFruit = 'apple',
    secondFruit = 'Banana';
let fruitResult = firstFruit > secondFruit;
console.log(fruitResult); // true
/* 
 * 'secondFruit' is less than 'firstFruit' because the letter 'B' has the ASCII code of 66 while letter 'a' has 97 
 * In order to fix this issue, we convert the following strings to either uppercase or lowercase before checking
*/
newFruitResult = firstFruit.toLowerCase() > secondFruit.toLowerCase();
console.log(newFruitResult); // false

// Comparing a number with a value of another type
/* If an operand is a number while the other is not, JavaScript converts the non-numeric operand to a number and performs comparison numerically */
console.log(10 < '20'); // true
console.log(10 == '10'); // true

// Comparing an object with a non-object
/* 
 * If an operand is an object, JavaScript calls the 'valueOf()' method of that object to get the value for comparison
 * If the object doesn’t have the 'valueOf()' method, JavaScript then calls the 'toString()' method and uses the returned value for comparison
*/
let apple = {
  valueOf: function() {
    return 25;
  }
};

let orange = {
  toString: function() {
    return '50';
  }
};
console.log(apple > 25); // false
console.log(orange == 50); // true

// Comparing a Boolean with another value
/* 
 * If an operand is a Boolean, JavaScript converts it to a number and compares it with the other operand 
 * 'true' will convert to 1 and 'false' will convert to 0
*/
console.log(true > 0); // true
console.log(false < 1); // true

// Comparing null and undefined
/* 
 * In JavaScript, 'null' equals 'undefined'
 * It means that the following expression returns 'true'
 * This occurs only with lazy equality or else it will return 'false'
 */
console.log(null == undefined); // true

// Comparing NaN with other values
/* If either operand is 'NaN', then the equal operator(==) returns 'false' */
console.log(NaN == 1); // false
console.log(NaN == NaN); // false
// Strict equal (===) and not strict equal (!==)
/* 
 * JavaScript provides the strict equal (===) and not strict equal (!==) operators for comparison
 * The strict equal and not strict equal operators behave like the equal and not equal operator but that they don’t convert the operand before comparison
 */
console.log("100" == 100); // true
console.log("100" === 100); // false