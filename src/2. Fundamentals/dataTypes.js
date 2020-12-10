/* 
 * JavaScript is a dynamic language and loosely typed.
 * There are _ primitive data types and 1 complex data-type in JavaScript.
 * Primitive data-types:-
 *      1. Undefined
 *      2. Null
 *      3. Number
 *      4. String
 *      5. Boolean
 *      6. Symbol
 * Complex data-type :-
 *      1. Object
 */

// JavaScript data-types property
var whatIsThisVariable = "I'm a string"; // String
whatIsThisVariable = 100; // Number
whatIsThisVariable = true; // Boolean
whatIsThisVariable = [1, 2, 3, 4, 5]; // Array
whatIsThisVariable = Symbol(); // Symbol
whatIsThisVariable = {
    firstname: "John",
    lastName: "Doe"
} // Object

// To get the data-type of a variable we use 'typeof'
var counter = 100;
console.log(`Variable 'counter' is a ${typeof counter}`) // Variable 'counter' is a Number

// Undefined data-type
var message;
console.log(message); // undefined

// Typeof undeclared variable
console.log(typeof undeclaredVariable); // undefined

// Null data-type
let newObject = null;
console.log(typeof newObject); // object

// 'null' and 'undefined' are equivalent with lazy equality check
console.log(null == undefined); // true

// 'null' and 'undefined' aren't equivalent with strict equality check
console.log(null === undefined); // false

// Number data-type
let number = 100; // Integer
let floatValueNumber = 12.54 // Floating-point value
let floatValue = 20.000 // Converted to Integer in order to save memory and interpreted as 20

// Octal number
let octalNumber = 060;
let anotherOctalNumber = 090; // Converted to decimal Interpreted as 90 since octal number range from 0-7
/* To avoid ES6allows us to specify with some prefixes */
let newOctalNumber = 0o45;
console.log(`NewOctalNumber is => ${newOctalNumber}`); // NewOctalNumber is => 37

// Hexadecimal number
let hexNumber = 0xf;
console.log(`HexNumber is => ${hexNumber}`); // HexNumber is => 15

// Number with e-notation
let expNumber = 2.17e6; // 2170000

// Maximum and Minimum values
let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;
console.log(`Maximum integer value in JavaScript is => ${maxValue}`); // 1.7976931348623157e+308
console.log(`Minimum integer value in JavaScript is => ${minValue}`); // 5e-324

// Infinity in JavaScript
console.log(`Sum of two MaxValue are => ${maxValue + maxValue}`); // Infinity
console.log(`Difference of two MaxValue are => ${maxValue - maxValue}`); // -Infinity

// NaN in JavaScript
console.log("Hello" / 2); // NaN

// String data-type
var stringVariable = "This a string data-type and strings are immutable in JavaScript";
let newStringVariable = 'I\'m also a string!'; // Use escape in strings to add special characters

// Concatenate two string into one
var stringOne = "Java";
var stringTwo = "Script";
let newString = stringOne + stringTwo;
console.log(`NewString is => ${newString}`); // NewString is => JavaScript

// Booelan data-type
var inProgress = true;
var completeProgress = false;
/* boolean operation with other data-types */
/* String data-type */
console.log(Boolean('Hi')); // true
console.log(Boolean('')); // false

/* Number data-type */
console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(0)); // false

/* Object data-ype */
console.log(Boolean({
    foo: 100
})); // true on non-empty object
console.log(Boolean(null)); // false

// Symbol data-type
let symbol = Symbol(`This is a symbol`);

// Object data-type
let personName = {
    firstName: "John",
    lastName: "Doe"
}

/* Nested data-type */
let studentData = {
    firstName: "Jane",
    lastName: "Doe",
    address: {
        email: "janedoe@dundermifflin.com",
        residence: "Dunder Mufflin, 1725 Slough Avenue, Scranton, Pennsylvania",
        contactNumber: 9922331232
    }
}

// To access the properties inside object, we can use (.) operator or use indexing method
console.log(`FirstName is => "${studentData.firstName}"`);
console.log(`LastName is => "${studentData['lastName']}"`);
console.log(`ContactNumber is => ${studentData.address.contactNumber}`);
console.log(`Email ID is => ${studentData.address['email']}`);