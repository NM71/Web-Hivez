// Ghar aao

// Gate kholo

// Khaana pakao

// Fb chalao

// sojao



var ans = new Promise(function (res, rej) {
    return res("Ghar aao");
})

var p2 = ans.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("Gate kholo");
    })
})

var p3 = p2.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("Khaana Pakao");
    })
})

var p4 = p3.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return ("FB chalao");
    })
})