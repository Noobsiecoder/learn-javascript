// The Logical NOT operator (!)
/* 
 * JavaScript uses an exclamation point ! to represent the logical NOT operator
 * The ! operator can be applied to a single value of any type, not just a boolean value
 * When you apply the ! operator to a boolean value, the ! returns 'true' if the value is 'false' and returns 'false' if the value if 'true'
 */
let eligible = false,
    required = true;
console.log(!eligible); // true
console.log(!required); // false
/* 
 * When you apply the ! operator to a non-Boolean value
 * The ! operator first converts the value to a boolean value and then negates it
 * The logical ! operator works based on the following rules:-
 *      If 'a' is 'undefined', the result is 'true'
 *      If 'a' is 'null', the result is true
 *      If 'a' is a 'number' other than 0, the result is 'false'
 *      If 'a' is 'NaN', the result is 'true'
 *      If 'a' is 'null', the result is 'true'
 *      If 'a' is an 'object', the result is 'false'
 *      If 'a' is an empty 'string', the result is 'true'. In case 'a' is a non-empty string, the result is 'false'
 */
console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false
/*
 * Double-negation (!!)
 * Sometimes, you may see the double negation (!!) in the code
 * The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value
 * The result is the same as using the Boolean() function
 */
let counter = 10;
console.log(!!counter); // true

// The Logical AND operator (&&)
let result = a && b;
/*
 * If 'a' can be converted to 'true', the (&&) operator returns the 'b'; otherwise, it returns the 'a'
 * The result of the (&&) operator is true only if both values are 'true', otherwise, it is 'false'
 */
console.log(eligible && required); // false
/* 
 * In short-circuit evaluation, the && operator is short-circuited 
 * It means that the && operator evaluates the second value only if the first one doesn’t suffice to determine the value of an expression
 */
let boolValue = true;
let newResult = boolValue && (1 / 0);
console.log(newResult); // Infinity
/* 
 * 'boolValue' is true therefore the && operator could not determine the result without further evaluating the second expression(1 / 0)
 * Hence the result is Infinity which is the result of the expression(1 / 0)
 * However if we do this in a different way
 */
let newBoolValue = false;
let boolResult = newBoolValue && (1 / 0);
console.log(boolResult); // falseIn this
/* A Chain of && operators , Hint:- Evaluates values from left to right */
let firstValue = true;
let secondValue = false;
let lastValue = true;
let multipleResult = firstValue && secondValue && thirdValue; // false

// The Logical OR operator(||)
let logicalOrResult = true|| false; // true

/* 
 * The precedence of the logical operator is in the following order from the highest to lowest:-
 * Logical NOT(!)
 * Logical AND(&&)
 * Logical OR(||)
 */