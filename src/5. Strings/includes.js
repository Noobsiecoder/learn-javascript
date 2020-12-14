/*
 * The 'includes()' method determines whether a string contains another string
 * Syntax :
 *      String.prototype.includes(searchString, position);
 * The 'includes()' method returns 'true if the 'searchString' is found in the string, otherwise returns 'false'
 */
let email = 'johndoe@example.com';
console.log(email.includes('@')); // true
/* It is case sensitive */
let str = 'JavaScript String';
console.log(str.includes('script')); // false
/* We can also use regular expression to check */