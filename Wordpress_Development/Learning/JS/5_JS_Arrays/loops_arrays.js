// let a = [1, 33, 5, 19, 88]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index]
//     console.log()
// }

// a.forEach((value, index, a) => {
//     console.log(value, index, a);
// });




let array = [2, 9, 15, 13, 17]

// let newArr = []

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArr.push(element ** 3);
// }
// console.log(newArr)

let newArr = array.map(e => {
    return e ** 2;
})
console.log(newArr);