// Problem statment 008: Swap two numbers without using a temporary variable.

/* Do it:
 With a third variable
 Without using a third variable */

// Input Example: a = 5, b = 10
// Expected Output: a = 10, b = 5

// With a third variable
let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log(`After swapping with a temporary variable: a = ${a}, b = ${b}`);

// Without using a third variable
a = 5;
b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log(`After swapping without a temporary variable: a = ${a}, b = ${b}`);
