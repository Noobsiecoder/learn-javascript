// Primitive boolean
var isPending = false
var isDone = true;

/* using 'typeof' operator */
console.log(typeof isPending); // boolean
console.log(typeof isDone); // boolean

// Boolean primitive Type
let booleanPrimitive = Boolean('Hi');
console.log(booleanPrimitive); // true
/* using 'typeof' operator */
console.log(typeof booleanPrimitive); // boolean

// JavaScript also provides the boolean reference type for boolean values
let booleanObject = new Boolean(true);
/* To get the value of Boolean object */
console.log(booleanObject.valueOf()); // true
/* using 'typeof' operator */
console.log(typeof booleanObject); // object

// Difference between boolean and Boolean
let foo = true;
let bar  = new Boolean(false);

// 'bar' is an object so you can add a property to the bar object:
bar.primitiveValue = bar.valueOf();
console.log(bar.primitiveValue); // false

// However, we cannot do it with the primitive boolean variable as it isn't an object
foo.primitiveName = 'primitive';
console.log(foo.primitiveName); // undefined

/* 
 * When 'typeof' operator is used with Boolean object, it return 'object' 
 * Whereas 'typeof' of a primitive boolean value returns boolean.
 */
console.log(typeof foo); // boolean
console.log(typeof bar); // object

/* 
 * When applying the 'instanceof' operator to a Boolean object, it returns 'true'
 * Whereas, applying the 'instanceof' operator to a boolean value, it returns 'false'
 */
console.log(foo instanceof Boolean); // false
console.log(bar instanceof Boolean); // true

/* 
 * If a boolean object is used in conditional statements, the algorithm followed in JavaScript is:-
 *      1. Creates the Boolean object as a Boolean object wrapper with the assigned value.
 *      2. Since it is an object, The JS engine has two options :-
 *              2.1 Use 'toString()' method
 *              2.2 Use 'valueOf()' method
 *      3. For conditional statements, JS uses 'toString()' method and as we know, it converts it into string.
 *      4. Hence it evaluates into true. 
 */
let falseObj = new Boolean(false);
if (falseObj) {
    console.log('Weird part of "Boolean object"');
} // Weird part of "Boolean object"