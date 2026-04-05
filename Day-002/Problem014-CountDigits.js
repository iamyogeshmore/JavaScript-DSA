// Problem statment 014: Count total digits in a number
// Input Example: 12345
// Expected Output: 5

const num = 12345;
let count = 0;
// Using string conversion
count = num.toString().length;
console.log(`The total digits in ${num} is: ${count}`);

// Using mathematical operations
const num2 = 1998;
let originalNum = num2;
let count2 = 0;
while (originalNum > 0) {
      originalNum = Math.floor(originalNum / 10);
      count2++;
}
console.log(`The total digits in ${num2} is: ${count2}`);