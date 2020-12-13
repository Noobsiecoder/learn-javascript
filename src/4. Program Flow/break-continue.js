/* 'break' vs 'continue'
 * break    - Terminates the loop immediately and passes control over the next statement after the loop
 * continue - skips the current iteration of a loop and goes to the next one
 */
// 'break'
for (let i = 1; i < 5; i++) {
    if (i % 3 === 0) 
        break;
    else 
        console.log(i);
}
/* Output :
 * 1
 * 2
 */

// 'continue'
for (let i = 0; i < 5; i++) {
    if (i % 3 === 0)
        continue;
    else
        console.log(i);
}
/* Output :
 * 1
 * 2
 * 4
 */