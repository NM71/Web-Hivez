// function niceWords(name) {
//     console.log(`Hello ${name}`);
//     console.log(`You sir are going to be home soon`);
//     console.log(`${name} is a great guy`);
// }

// niceWords("Nousher");
// niceWords("Ali");


// // Save a function in a variable

// let func = (value) => {
//     console.log("I am an arrow function", value);
// }

// func(213);
// func("Hello World");
// func(213.532);


// Practice Sets Ch 3

// Q1, Q2
let object = {
    Ali: 100,
    Nousher: 89,
    Nouraiz: 98
}

for (const key in object) {
    const element = object[key];
    console.log(key, element);

}


// Q3
let num = 10;
let i = 5;

while (i < num) {
    console.log(`${i}. Try Again`);
    i++;
}


// Q4 - Mean of numbers

let arr = [22, 26, 73, 59, 101];
let length = arr.length;
let sum = 0;
let mean = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

mean = sum / length;
console.log(`The mean of the 5 numbers of the array is : ${mean}`);