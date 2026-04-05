// Problem statment 010: Find the largest among three numbers
// Input Example: 10, 25, 15
// Expected Output: 25 is largest.

const num1 = 10;
const num2 = 25;
const num3 = 15;

if (num1 >= num2 && num1 >= num3) {
      console.log(`${num1} is Largest.`);
}
else if (num2 >= num1 && num2 >= num3) {
      console.log(`${num2} is Largest.`);
}
else if (num3 >= num1 && num3 >= num2) {
      console.log(`${num3} is Largest.`);
}
else {
      console.log(`Something went wrong.`);
}

// using ternary operator
const largest = (num1 >= num2 && num1 >= num3) ? `${num1} is Largest.` :
      (num2 >= num1 && num2 >= num3) ? `${num2} is Largest.` :
            (num3 >= num1 && num3 >= num2) ? `${num3} is Largest.` :
                  `Something went wrong.`;
console.log(`using ternary operator: ${largest}`);