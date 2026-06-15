let boxes = document.getElementsByClassName("box");

console.log(boxes);

// boxes[2].style.backgroundColor = "red"
// boxes[2].style.color = "white"


// document.getElementById("redbox").style.background = "red";


// using querySelector
// document.querySelector(".box").style.backgroundColor = "yellow";
let allBoxes = document.querySelectorAll(".box");
console.log(allBoxes);


document.querySelectorAll(".box").forEach(e => {

    console.log(e);
    e.style.backgroundColor = "blue";
})