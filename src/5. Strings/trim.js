// It returns a new string stripped of whitespace characters from beginning and end of a string
let str = ' Hi Alex! ';
console.log(str, str.length); //  Hi Alex!  10
console.log(str.trim(), str.trim().length); // Hi Alex! 8
/*
 * Note that the 'trim()' method doesn’t change the original string. 
 * To remove whitespace characters from the beginning use 'trimStart()' method 
 * To remove whitespace characters from the beginning use 'trimEnd()' method
 */
console.log(str.trimStart(), str.trimStart().length); // Hi Alex!  9
console.log(str.trimEnd(), str.trimEnd().length); //  Hi Alex! 9