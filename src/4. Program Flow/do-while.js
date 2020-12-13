/*
 * The 'do-while' loop statement creates a loop that executes a block of code until condition evaluates to false
 * Unlike the 'while' loop, the 'do-while' loop always executes the body at least once before it evaluates the expression
 * Because the expression is evaluated only after the body of the loop has been executed, it is "post-test" loop.
 */
let count = 0;
do {
    count++;
    console.log(`The count is => ${count}`);
} while (count < 10);
/* Output :
 * The count is => 1
 * The count is => 2
 * The count is => 3
 * The count is => 4
 * The count is => 5
 * The count is => 6
 * The count is => 7
 * The count is => 8
 * The count is => 9
 * The count is => 10
 */