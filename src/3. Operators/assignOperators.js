// An assignment operator assigns a value of the right operand to its left operand.
/* The basic assignment operator is equal (=)
 * In the following code, we are assigning the number 10 to the variable 'number'.
 */
let number = 10;
console.log(number);
/* See the following code */
let anotherNumber = 10;
anotherNumber = anotherNumber + 5;
console.log(anotherNumber); // 15
/* This is equivalent to the following code */
anotherNumber = 15;
anotherNumber += 5;
console.log(anotherNumber); // 20
/* The (+=) assignment operator assigns the result of a plus 5 to 'a' */

/* 
 * The following code has an assigment inside console, yet no error occurs
 * But this isn't the recommended method to print as well as store value in a variable
*/
console.log(num = 10); // 10