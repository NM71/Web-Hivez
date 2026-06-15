// // let age = prompt('Enter your age');

// let age = -1;

// let ans = age >= 18 ? 'Go drive away!' : (age < 18 && age > 0) ? 'No! Step out of the vehicle.' : 'Enter a valid input.';

// console.log(ans);

// // if (age >= 18)
// //     console.log('You are eligible to drive.');

// // else if (age < 18)
// //     console.log('You are in-eligible to drive.');

// // else
// //     console.log('Please enter a valid input.');


var data = {
    name: "Nousher",
    age: 24,
    isGraduated: true,
}

// // for in loop (gives us the values of a JS object)
// for (const key in data) {
//     const element = data[key];
//     console.log(key, element);
// }

// // for (const element of data) {
// //     console.log(element);
// // }


// ===========================================================

// Practice Set Ch 2

// Q1
let age = 17;
let res = (age > 10) && (age < 20) ? 'Age is between 10 and 20' : 'Age is not between 10 and 20';

console.log(`Result: ${res}`);


// Q2
let res1;
switch (true) {

    case (age > 10 && age < 20):
        res1 = 'Age is between 10 and 20';
        break;

    case (age <= 0):
        res1 = 'Age is invalid';
        break;

    default:
        res1 = 'That is not in my domain';
        break;
}
console.log(res1);



// Q3
let num = 15;

if (num % 2 == 0 && num % 3 == 0) {
    console.log(`${num} is divisible by 2 and 3.`);
}

else {
    console.log(`${num} is not divisible by 2 and 3`);
}


// Q4
if (num % 2 == 0) {
    console.log(`${num} is divisible by 2.`);
}

else if (num % 3 == 0) {
    console.log(`${num} is divisible by 3.`);

}

else {
    console.log(`${num} is not divisible by 2 and 3`);
}

// Q5
let yourAge = -19;
let ans = (yourAge > 18 && yourAge > 0) ? 'You can drive' : (yourAge > 18 && yourAge < 100) ? `You can't drive` : 'Invalid Input';
console.log(ans)





// for (const c of 'Nousher') {
//     console.log(c);

// }


// While loop

let i = 0;
// while (i < 6) {
//     console.log(i);
//     i += 1;
// }


// This loop will run atleast once regardless of the condition
// In the following case the condition says j < 6 and j = 6
// The output will be 6 because this loop runs atleast once
let j = 6
do {
    console.log(j);
    j++;
} while (j < 6);