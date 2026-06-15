// Practice Set Ch 4 

// Q1
console.log("Nousher \"".length);


// Q2
let testString = "This is amazing";
console.log(testString.includes('ama'));
console.log(testString.startsWith('Thie'));
console.log(testString.endsWith('ng'));


// Q3
function convertToLowecase(s) {
    let newString = s.toLowerCase();
    console.log(newString);
}

convertToLowecase(testString);

function convertToUowecase(s) {
    let newString = s.toUpperCase();
    console.log(newString);
}

convertToUowecase(testString);


// Q4
let s1 = "Please give Rs 1000";

console.log(`Amount Extracted: ${s1.slice(15)}`)


// Q5
let s2 = "Were you able to do it?";
let newString = s2.replace('to', 'to loot');
console.log(`New String: ${newString}`);