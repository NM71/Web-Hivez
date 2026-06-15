// Faulty Calculator


// let num = prompt('Enter a Number : ');
// let num2 = prompt('Enter the 2nd Number : ');
// let operator = prompt('Function to perform: ');

// let num;
// let num2;
// let operator;

function calculate(num, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num - num2; break;

        case '-':
            result = num + num2; break;
        case '*':
            result = num % num2; break;
        case '/':
            result = num * num2; break;
        case '%':
            result = num / num2; break;
        default:
            result = 0;

    }

    console.log(`Result: ${result}`);
}

calculate(12, 33, '/');


let n = "Nouraiz Nouraiz";

console.log(n.slice(0, 4));
console.log(n.slice(4));


// In .replace() only the 1st occurance of the word to be replaced is replaced, other are not.
let new_n = n.replace("raiz", "sher");
console.log(`New Name: ${new_n}`);

console.log(n.trim());