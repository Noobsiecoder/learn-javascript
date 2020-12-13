// Consider the following
var age = 19;
var canDrive;
if (age > 16) {
    canDrive = 'yes';
} else {
    canDrive = 'no';
}
console.log(canDrive); // yes

// The same can be done using ternary operators
var newAge = 16;
var newCanDrive = newAge > 18 ? true : false;
console.log(newCanDrive); // false
/* Set default parameter */
function foo(bar) {
    bar = typeof (bar) !== 'undefined' ? bar : 10;
    console.log(bar);
}
foo(); // 10
foo(20); // 20
/* Multiple operation */
var authenticated = true;
var nextURL = authenticated ? (
    console.log('You will redirect to admin area'),
    console.log(true)
) : (
    console.log('Access denied'),
    console.log(false)
);
/* Simplified ternary operator */
var locked = 1;
var canChange = locked != 1;
console.log(canChange); // false
/* Nest ternary operator */
var speed = 100;
var message = speed >= 150 ? 'Too Fast!!' : (speed >= 95 ? 'Fast!' : 'OK');
console.log(message); // Fast! 