// Problem statment 012: Find sum of numbers from 1 to N
// Input Example: N = 5
// Expected Output: 15

const N = 5;
let sum = 0;
for (let i = 1; i <= N; i++) {
      sum = sum + i;
      console.log(`Current number: ${i}, Current sum: ${sum}`);
}
console.log(`Sum of numbers from 1 to ${N} is: ${sum}`);
