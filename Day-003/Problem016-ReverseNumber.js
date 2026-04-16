/* Problem statment 016:Reverse a given number.
 Input Example: 1234 
 Expected Output: 4321 */

let num = 1234;
let reverseNum = 0;
for (i = num; i > 0; i = Math.floor(i / 10)) {
      reverseNum = reverseNum * 10 + i % 10;
}
console.log(reverseNum)
