// JavaScript strings are primitive data type & immutable
/*
 * use ''
 * or use ""
 */
let str = 'Hi';
console.log(str); // Hi
str = "Hi again!";
console.log(str); // Hi again!
/* ES6 introduced 'templates' to define strings with backtick (`) */
str = `Is that, ${str}`;
console.log(str); // Is that, Hi again!
/* Length of a string */
str = "Hey all";
console.log(str.length); // 7
/* Access characters in a string */
str = "Hello";
console.log(str[2]); // l
/* Concatenate strings */
let firstName = "John";
let lastName = "Doe";
console.log(firstName + ' ' + lastName); // John Doe
/* or use 'concat()' */
console.log(firstName.concat(' ', lastName)); // John Doe
/* Converting values to 'string' :
 * String(value);
 * '' + value;
 * value.toString();
 * Note :- 'toString()' doesn't work with 'null' and 'undefined'
 */

// Consider the following
let status = false;
let newStr = status.toString(); 
console.log(newStr, typeof newStr)// false string
let back = Boolean(newStr); 
console.log(back, typeof back); // true boolean
/* 'Boolean()' returns 'false' only when the string is empty ('') */