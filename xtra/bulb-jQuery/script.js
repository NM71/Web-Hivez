// // Selection
// var a = document.querySelector("h1");

// // Event Listener
// a.addEventListener("click", function () {

//     // Changing HTML
//     a.innerHTML = "You clicked"

//     // Changing CSS
//     a.style.fontSize = "100px"
//     a.style.color = "yellow";
//     a.style.backgroundColor = "black";

//     console.log("Data changed after user clicked!!!")

// });



var bulb = document.querySelector("#bulb");
// var btnOn = document.querySelector("#btn-on");
// var btnOff = document.querySelector("#btn-off");
var btn = document.querySelector("button");
var flag = 0; // to work only with one button

btn.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "OFF";
        flag = 1;
    }

    else if (flag == 1) {
        bulb.style.backgroundColor = "transparent";
        btn.innerHTML = "ON"
        flag = 0;
    }
});


// btnOn.addEventListener("click", function () {
//     bulb.style.backgroundColor = "yellow";
// })

// btnOff.addEventListener("click", function () {
//     bulb.style.backgroundColor = "transparent";
// })






var abc = document.querySelector("#box");

abc.innerHTML = "<h1>Hello Bro</h1>";
abc.textContent = "GoodBye"