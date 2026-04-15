/* Problem statment 015: Find factorial of a number.
 Input Example: 5 
 Expected Output: 120 */

let num = 5;
let factorical = 1;
if (num < 0) {
    console.log("Factorial is not defined for negative number")
}
else {
    for (i = 1; i <= num; i++) {
        factorical *= i;
    }
    console.log(factorical)
}

