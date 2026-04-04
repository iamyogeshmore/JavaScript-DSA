// Problem Statement 004: Perform basic arithmetic operations on two numbers.
// Input Example: 20,2
/*Expected Output:
Addition: 22
Subtraction: 18
Multiplication: 40
Division: 10 */

const num1 = 20;
const num2 = 2;
const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);


// Other approach using functions
console.log("\nUsing functions:");
function calculations(num1, num2) {
      console.log(`Addition: ${num1 + num2}`);
      console.log(`Subtraction: ${num1 - num2}`);
      console.log(`Multiplication: ${num1 * num2}`);
      if (num2 === 0) {
            console.log("Division: Not allowed");
      } else {
            console.log(`Division: ${num1 / num2}`);
      }
}
calculations(20, 2);


