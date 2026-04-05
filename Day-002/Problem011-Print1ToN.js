// Problem statment 011: Print numbers from 1 to N.
// Input Example: N = 5
// Expected Output:1 2 3 4 5

// Using for loop
const N = 5;
console.log(`Using for loop:`);
for (let i = 1; i <= N; i++) {
      console.log(i);
      // process.stdout.write(i + " ");
}

// Using while loop
let j = 1;
console.log(`Using while loop:`);
while (j <= N) {
      console.log(j);
      // process.stdout.write(j + " ");
      j++;
}