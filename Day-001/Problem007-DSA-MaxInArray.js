// Problem Statement 007: Find the largest element in an array.

// Input Example: [10, 5, 20, 8, 15]
// Expected Output: 20

const arr = [10, 5, 20, 8, 15];
let max = arr[0]; // Initialize max with the first element of the array
for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
            max = arr[i]; // Update max if the current element is greater
      }
}
console.log(`The largest element in the array is: ${max}`);