// 'split()' method divides a string into an array of substrings
let arrStr = 'JavaScript C++ Rust';
let substrings = arrStr.split(' ');
console.log(substrings); // [ 'JavaScript', 'C++', 'Rust' ]
substrings = arrStr.split(' ', 2);
console.log(substrings); // [ 'JavaScript', 'C++' ]
substrings = arrStr.split(' ', 0.5);
console.log(substrings); // [ ]
substrings = arrStr.split(' ', -1);
console.log(substrings); // [ 'JavaScript', 'C++', 'Rust' ]