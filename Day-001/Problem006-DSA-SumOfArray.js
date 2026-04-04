// Problem Statement 006: DSA- Find the sum of all elements in an array.
// Input Example : [1, 2, 3, 4, 5]
// Expected Output : 15

const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i]
}
console.log(`The sum of the array is: ${sum}`);
