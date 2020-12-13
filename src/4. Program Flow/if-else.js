// 'if' statements
/* The if statement executes a statement or block of code if a condition is satisfied */

let firstNumber = 25;
if (firstNumber > 10)
    console.log('firstNumber is greater than 10'); // firstNumber is greater than 10
/*
 * If we don’t use the curly braces, it will be difficult to see that if second statement belongs to the if block
 * Hence it won't be considered inside 'if' block
 * To include more than two statements, use curly braces ({})
 */
if (true) {
    // statement
} else {
    // statement (when condition evaluates to false)
}
/* We can also use 'else' */
firstNumber = 5;
if (firstNumber > 10) {
    console.log('firstNumber is greater than 10');
} else {
    console.log('firstNumber is less than or equal 10');
} // firstNumber is less than or equal 10
/* 'if..else' consition can be done with also 'else if' statement */
let randNum = 25,
    anotherRandNum = 15;
if (randNum > anotherRandNum) {
    console.log(`${randNum} is greater than ${anotherRandNum}`);
} else if (randNum < anotherRandNum) {
    console.log(`${randNum} is lesser than ${anotherRandNum}`);
} else {
    console.log(`${randNum} is equal than ${anotherRandNum}`);
} // 25 is greater than 15