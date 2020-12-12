// Code to convert string from uppercase to lowercase without using 'toLowerCase()' method
const checkAsciiCode = (checkString) => {
    checkString = checkString.split(''); 
    for (var letter in checkString) {
        if (checkString[letter].charCodeAt(0) < 91) {
            var newLetter = checkString[letter].charCodeAt(0) + 32;
            checkString[letter] = String.fromCharCode(newLetter);
        }
   }
   return (checkString.toString('')).replace(/,/g, '');
}

let string = "SEntence";
let anotherString = "aBcD";
console.log(checkAsciiCode(string));
console.log(checkAsciiCode(anotherString));