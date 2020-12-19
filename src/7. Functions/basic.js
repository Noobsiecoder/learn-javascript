// To declare functions we use the keyword 'function'
function functionTrial() {
    // statement
}

/* Function name must be a valid identifier 
 * A function name should start with a verb
 * For instance :
 *      getData()
 *      isValid()
 */
// Parameters 
/* No parameters */
function saySomething() {
    return 'Hello!';
}
/* With parameters */
function sayMyName(name) {
    return `Hello ${name}!`;
}
// function call
console.log(sayMyName('John Doe')); // Hello John Doe!
/* Here 'John Doe' is passed during function call, this is function 'argument' */

// Function hoisting
hoistedFunction(); // This function is being hoisted by the JS engine!

function hoistedFunction() {
    console.log('This function is being hoisted by the JS engine!');
}

// Functions as 'First class citizens'
/* In JavaScript, functions are treated like values of other data types */
function add(a, b) {
    return a + b;
}

let x = 5,
    y = 10,
    sum = add(x, y);
console.log(`${x} + ${y} = ${sum}`); // 5 + 10 = 15