// let arr = [1, 2, 3, 4, "sad"];

// console.log(arr);
// arr[3] = "Hello World";
// console.log(arr);
// console.log(arr[3])
// console.log(arr.length);


// console.log(arr.toString());

// console.log(arr.join(" and "));
// console.log(arr.join("-"));

// console.log(arr.push(2213, "Nousher"))
// console.log(arr);

// console.log(arr.pop("Nousher"))
// console.log(arr);


// delete arr[3];
// console.log(arr);



// let a1 = [1, 2, "food"];
// let a2 = ["Truck", 0, 23]
// let a3 = [9, 1, 8, 4]

// console.log(a1.concat(a3, a2));

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.splice(3, 1, 25, 31));
// console.log(numbers)

// numbers.forEach(element => {

// });




// Practice Set 5 - Arrays

// Q1
// let array1 = [1, 2, 3, 4, 5, 6]

// // array1.push(prompt('Enter a number: '));

// // console.log(array1);


// // Q2
// let num1;
// while (num1 != 0) {
//     num1 = prompt('Enter a number in array');
//     array1.push(num1);
// }

// console.log(array1);


// Q3
let array2 = [123, 42, 52, 67, 100, 120, 50]
const divByTen = array2.filter(num => num % 10 === 0)
const oddNum = array2.filter(num => num % 2 != 0)
const evenNum = array2.filter(num => num % 2 === 0)

console.log(divByTen)
console.log(oddNum)
console.log(evenNum)


// Q4
const squaredArray = array2.map(e => {
    return e ** 2;
})

console.log(`Squared Array: ${squaredArray}`);


// Q5
let n = 5;
let array3 = [1, 2, 3, 4, 5, 6, 7, 8]

// Make a function
array3.reduce()