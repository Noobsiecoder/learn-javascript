// Using indexOf() to count occurrences of a substring in a string
let str = 'You do not know what you do not know until you know.',
    substring = "know",
    count = 0,
    index = str.indexOf(substring);
while (index !== -1) {
    ++count;
    index = str.indexOf(substring, index + 1);
}

console.log(count); // 3