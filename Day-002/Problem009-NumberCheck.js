// Problem statment 009: Check whether a number is: Positive, Negative, Zero
// Input Example: -5
// Expected Output: Negative

const number = -5;
if (number > 0) {
      console.log(`${number} is a Positive number.`);
}
else if (number < 0) {
      console.log(`${number} is a Negative number.`);
}
else if (number === 0) {
      console.log(`${number} is Zero.`);
}
else {
      console.log(`${number} is not a valid number.`);
}

// Using Ternary Operator
const result = number > 0 ? `${number} is a Positive number.` :
      number < 0 ? `${number} is a Negative number.` :
            number === 0 ? `${number} is Zero.` :
                  `${number} is not a valid number.`;
console.log(`Using Ternary Operator: ${result}`);