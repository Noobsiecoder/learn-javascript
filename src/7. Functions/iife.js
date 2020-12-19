// If a function must be executed immediately after declarartion, we can use 'Immediately Invoked Function Expression'
(function () {
    console.log("IIFE!");
})(); // IIFE!
// Trailing parenthesis to invoke the function immediately

// To pass arguments
let person = {
    firstName: "John",
    lastName: "Doe"
};
(() => {
    console.log(`First Name is ${person.firstName}`);
})(person); // First Name is John