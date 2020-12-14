/*
 * It returns the part of the string between the start and end index
 * String.prototype.substring(startIndex, endIndex)
 * Cases :
 *      If 'endIndex' is omitted, the 'substring()' returns the substring to the end of the string
 *      If 'startIndex' equals 'endIndex', the 'substring()' method returns an empty string
 *      If 'startIndex' is greater than the 'endIndex', the 'substring()' swaps their values
 *      If either 'startIndex' or 'endIndex' is less than zero or greater than the 'string.length', it considers as zero (0) or 'string.length' respectively
 *      If any parameter is 'NaN', the 'substring()' treats it as if it were zero
 */
let str = 'JavaScript Substring';
let substring = str.substring(0, 10);
console.log(substring); // JavaScript

str = 'JavaScript Substring';
substring = str.substring(11);
console.log(substring); // Substring

/* The following example uses the substring() with the indexOf() to extract the domain from the email */
let email = 'johndoe@outlook.com';
let domain = email.substring(email.indexOf('@') + 1);
console.log(domain); // outlook.com

/* Another similar method is 'slice()' */
email = 'johndoe@example.com'
let localPart = email.slice(0, email.indexOf('@'));
console.log(localPart); // johndoe