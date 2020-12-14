/*
 * The 'padStart()' method pads a string with another string to a certain length from the start of the string
 * Then it returns a resulting string that reaches a certain length 
 * Syntax :
 *      String.prototype.padStart(padLength, padString);
 */
let str = '1234'.padStart(8, '0');
console.log(str); // "00001234"
str = 'abc'.padStart(5);
console.log(str); // "  abc"
/*
 * The 'padEnd()' method pads a string to a certain length with another string
 * However, it pads from the end of the string
 * Syntax :
 *      String.prototype.padEnd(padLength [,padString]);
 */
str = '1234'.padEnd(5, '0');
console.log(str); // "12340000"
str = 'abc'.padEnd(5);
console.log(str); // "abc  "
str = 'abc'.padEnd(5,'true');
console.log(str); // "abctr"