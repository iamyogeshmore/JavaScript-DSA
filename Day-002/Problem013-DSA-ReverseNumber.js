// Problem statment 012: Reverse a given number
// Input Example: 1234
// Expected Output: 4321

const num = 1234;
let reverseNum = num.toString().split('').reverse().join('');
console.log(`The reverse of ${num} is: ${reverseNum}`); // String output
// let reversed = Number(num.toString().split('').reverse().join(''));
// console.log(`The reverse of ${num} is: ${Number(reversed)}`); // Number output


//Using mathematical operations
let num2 = 9876;
let originalNum = num2;
reverseNum = 0;
while (originalNum > 0) {
      let lastDigit = originalNum % 10;
      reverseNum = reverseNum * 10 + lastDigit;
      originalNum = Math.floor(originalNum / 10);
}
console.log(`The reverse of ${num2} is: ${reverseNum}`);