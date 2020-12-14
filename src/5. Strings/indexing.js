/*
 * It returns the index of the first occurrence of substring in a string
 * Syntax :
 *      String.prototype.indexOf(substring, fromIndex);
 * If the string doesn't match, -1 is returned
 * Note that 'fromIndex' is an optional parameter
 * The 'indexOf()' always perform a case-sensitive search
 * To find the index of the last occurrence of a substring in a string, use 'lastIndexOf()' method
 */
/* indexOf() */
let str = 'finding substring in string';
let index = str.indexOf('str');
console.log(index); // 11
index = str.indexOf('js'); 
console.log(index); // -1
/* lastIndexOf() */
str = 'JavaScript';
index = str.indexOf('a');
console.log(index); // 1
index = str.lastIndexOf('a');
console.log(index); // 3