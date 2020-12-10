// Primitive number
var newNumber = 20;
console.log(newNumber); // 20

// Number primitve type
var numberPrimitive = 20;
console.log(numberPrimitive); // 20

// JavaScript also provides the Number reference type for numeric values
var numberObject = new Number(20);
console.log(numberObject); // [Number: 20]

// To get the primitive value from the number object
var primitiveNumber = numberObject.valueOf();
console.log(primitiveNumber); // 20

// To get the number equivalent in string
var numberString = numberObject.toString();
console.log(numberString); // 20
/* We can also use the 'toLocaleString()' method */
console.log(numberObject.toLocaleString()); // 20

// Function to return a number in format in binary form using 'toString()' method
function convertBinary(number) {
    return number.toString(2);
}

let binaryNumber = convertBinary(numberObject);
console.log(binaryNumber); // 10100

// When primitive data-type of number is used for conversion, avaScript will convert it into a Number object temporarily
let primitiveStringNumber = primitiveNumber.toString(16);
console.log(primitiveStringNumber); // 24

/* To format a number object with a specified number of decimal points use 'toFixed()' method
 * Syntax:- numberObject.toFixed(deciamlPlaces);
 */
var distance = 19.0087;
console.log(distance.toFixed(1)); // 19.0
console.log(distance.toFixed(2)); // 19.01
console.log(distance.toFixed(3)); // 19.009
console.log(distance.toFixed(4)); // 19.0087

/* To format a number object with e-notation use 'toExponential()' method
 * Syntax:- numberObject.toExponential();
 */
let numbers = [10, 100, 1000];
for (var number of numbers) {
    console.log(`${number} with e-notation is => ${number.toExponential()}`);
    /*  Results:-
     *      10 with e-notation is   => 1e+1
     *      100 with e-notation is  => 1e+2
     *      1000 with e-notation is => 1e+3
     */
}

/* To get a number object to a specific precision use 'toPrecision()' method
 * Syntax:- numberObject.toPrecision(precision);
 * Note:-   If no argument is passed on, it acts as 'toString()' method and gives a string equivalent value
 */
let rawNumber = 9.12345;
console.log(rawNumber.toPrecision()); // 9.12345 
console.log(rawNumber.toPrecision(1)); // 9
console.log(rawNumber.toPrecision(2)); // 9.1
console.log(rawNumber.toPrecision(3)); // 9.12
console.log(rawNumber.toPrecision(4)); // 9.123

// Sometimes e-notaion may occur
let anotherRawNumber = 123.54321;
console.log(anotherRawNumber.toPrecision(2)); // 1.2e+2
console.log(anotherRawNumber.toPrecision(3)); // 1.2e+2

// Number Object vs Primitive Number 
let anotherNumberObject = new Number(25);
let anotherNumber = 25;
/* typeof */
console.log(typeof anotherNumberObject); // object
console.log(typeof anotherNumber); // number
/* instanceof */
console.log(anotherNumberObject instanceof Number && anotherNumberObject instanceof Object); // true
console.log(anotherNumber instanceof Number); // false