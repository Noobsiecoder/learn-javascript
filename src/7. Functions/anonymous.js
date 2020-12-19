// Anonymous functions are functions without name 
let show = function () {
    return "Hello!";
}

console.log(show); // [ Function: show ]
console.log(show()); // Hello!

// ES6 introduced the 'Arrow functions'
let newShow = () => {
    return "Hello using 'Arrow operator'";
}
console.log(newShow()); // Hello using 'Arrow operator'