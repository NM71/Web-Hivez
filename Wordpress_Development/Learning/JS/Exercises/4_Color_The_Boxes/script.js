// colors array

const colors = [
    'red', 'green', 'yellow', 'blue', 'orange',
    'purple', 'cyan', 'magenta', 'lime', 'pink',
    'teal', 'lavender', 'brown', 'beige', 'maroon',
    'mint', 'olive', 'coral', 'navy', 'grey'
];
const arrLength = colors.length;



// Assigning colors as bg and text color
document.querySelectorAll(".box").forEach(e => {

    // Calculating the random color index

    const randomBgColor = Math.floor(Math.random() * arrLength);
    const randomColor = Math.floor(Math.random() * arrLength);
    console.log(randomBgColor)
    console.log(randomColor)

    // Implementing styles on each box
    e.style.backgroundColor = colors[randomBgColor];
    e.style.color = colors[randomColor];
})