/*
 * The 'while' loop evaluates the expression before each iteration 
 * Hence 'while' loop is known as "pretest loop". 
 * For this reason, it is possible that the statement inside the 'while' loop is never executed
 */
let number = 1;
while (number <= 5) {
    console.log(number);
    ++number;
} 
/* Output:
 * 1
 * 2
 * 3
 * 4
 * 5
 */
// Be cautious with while loop, or else in some cases, infinite loops may occur!