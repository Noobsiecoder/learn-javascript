// Variables in JavaScript
var num1 = 10;
var num2 = 20;

// 'let' and 'const' keywords in JavaScript
let string = "foo";
const PI = 3.14;

// Functions in JavaScript
function add(x, y) {
    return x + y;
}

// Calling function
let result = add(1, 2);
// Display result value
console.log(result);

// Conditional statement
if (null === undefined) {
    console.log(`null and undefined are equivalent`);
} else {
    console.log(`null and undefined aren't equivalent`);
}

// Arrays in JavaScript
let items = [1, 2, 3];

// To display length of 'item' array
console.log(items.length);

// Iterating over an array using for loop
for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// Another method to iterate over is using for..of loop
for (let item of items) {
    console.log(item);
}

// Classes in JavaScript (Not ES6)
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Method of class 'Person'
Person.prototype.getFullName = function () {
    return `${this.firstName}  ${this.lastname}`;
}

// Instance of a class
let john = new Person('John', 'Doe');

// Calling the method, we can use the (.) method
let fullName = john.getFullName();

// In ES6, classes were done as
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName () {
        return `${this.firstName}  ${this.lastName}`;
    }
}

