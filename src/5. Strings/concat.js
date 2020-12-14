// Methods to concat
/* Concat strings */
console.log('He'.concat('llo', ' ', 'Wor', 'ld')); // Hello World
/* Concat array of strings using spread operator */
let arr = ['llo', ' ', 'Wor', 'ld'];
console.log('He'.concat(...arr)); // Hello World
/* Concatenate with other types */
let newArr = [1, 2, 3, 4];
console.log(''.concat(...newArr)); // 1234