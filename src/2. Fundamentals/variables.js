// 'var' keyword
var message;
console.log(message); // undefined

// To initialize
message = "This is a message";
console.log(message); // This is a message

// To initialize more than one variable
var counter = 100,
    string = "This is a string";

// Declare a variable with a value of a variable
var greet = message;
console.log(greet);

// We can also declare like this but it isn't recommended
newMessage = "This is a new message";

// Undefined and Undeclared variables
var studentMark;
console.log(studentMark); // undefined
console.log(counter); // ReferenceError: 'counter' is not defined

// Global and Local variables
function say() {
    var newString = "This is a new string";
    return newString;
}

console.log(newString); // ReferenceError: 'newString' is not defined

// Variable shadowing
/* global variable */
var testNumber = 10;

function sayNumber() {
    var testNumber = 5;
    return testNumber;
}

/* Displaying 'testNumber' */
console.log(`TestNumber is => ${sayNumber()}`); // TestNumber is => 5 
console.log(`TestNumber is => ${testNumber}`); // TestNumber is => 10 

// Access global variable inside a function
var testVariable = "This a variable";

function sayVariable() {
    /* local variable */
    testVariable = "This is a new string";
    return testVariable;
}

console.log(`TestVariable is => "${sayVariable()}"`); // TestVariable is => "This is a new string"
console.log(`TestVariable is => ${testVariable}`); // TestVariable is => "This is a new string"

// Variable hoisting
console.log(`AnotherNewMessage is => ${anotherNewMessage}`); // undefined
var anotherNewMessage = "This is another new message";

var newCounter;
console.log(newCounter); // undefined
newCounter = 250;

// 'let' and 'const' variable
/* Variable declared with 'let' */
let newVariable = "Variable declared with 'let'";
console.log(`NewVariable is => ${newVariable}`);
/* Variable declared with 'const' */
const accelerationDueToGravity = 9.81;
console.log(`Acceleration due to gravity on earth is => ${accelerationDueToGravity}m/s^2`);