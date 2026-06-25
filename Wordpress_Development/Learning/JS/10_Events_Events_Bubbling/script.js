

let box = document.querySelector(".box");
let btn = document.getElementById("btn")
let body = document.querySelector("body");

btn.addEventListener("mouseover", function () {
    box.innerHTML = "Text has been changed after <h1><b>button click!!!!!!!!!</b></h1>"
})



body.addEventListener("keydown", (e) => {
    console.log(e, e.key, e.keyCode);
    // alert("You have used keyboard")
})


// Async code practice


// console.log("Hey")
// console.log("Hey2")
// setTimeout(function(){
//     console.log("Hey3")

// }, 0); // Still it will run at the end because it will be inside the side stack first and other will be inside main stack (which executes its instructions first)
// console.log("Hey4")



// JS Promises

// Prob 1
// var ans = new Promise((res, rej)=>{
//     if(true)
//     {
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("Matter resolve hogaya tha bro")
// })
// .catch(function(){
//     console.log("Program to warr gaya hai bro")
// })


// ===============================================

// Prob 2

// var ans = new Promise((res, rej) => {
//     var n = Math.floor(Math.random() * 10);
//     console.log(`Number Entered: ${n}`)

//     if (n < 5) {
//         return res();
//     }
//     else {
//         return rej();
//     }
// })

// ans
//     .then(function () {
//         console.log("Number was below 5, so all Okay")
//     })
//     .catch(function () {
//         console.log("Number was greater so, its not good")
//     })

// ================================================

// Prob 3

async function getData() {
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans = await raw.json();
    console.log(ans);
}
getData();