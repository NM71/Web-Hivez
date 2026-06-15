// Factorial Calculator

// Get a num
// For loop the runs from that number to 1
// Initial result value is = num
// Result variable stores the multiplied result
// console.log the result

let num = 6;
let result = num;

// for (let i = num; i > 1; i--) {
//     result = result * (i - 1);
// }

// OR

for (let i = num - 1; i > 1; i--) {
    result *= i;
}
console.log(`Factorial of ${num} : ${result}`);     