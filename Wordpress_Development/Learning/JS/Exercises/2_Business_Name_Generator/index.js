/*

// Adjectives
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments


Another Word:
Bros
Limited
Hub

*/

// let final_name = "";

// function generateName(adj, shop_name, last_name) {
//     if (shop_name == 'Engine' || shop_name == 'Foods' || shop_name == 'Garments') {
//         final_name = `${adj} ${shop_name} ${last_name}`;
//         console.log(`Generated Shop Name: ${final_name}`);
//     }
// }

// generateName("Bravo", "Foods", "Limited");





let rand = Math.random();
let first, second, third;

if (rand < 0.33) {
    first = "Crazy";
}
else if (rand >= 0.33 && rand < 0.66) {
    first = "Amazing";
}
else {
    first = "Fire";
}

if (rand < 0.33) {
    second = "Engine";
}
else if (rand >= 0.33 && rand < 0.66) {
    second = "Foods";
}
else {
    second = "Garments";
}


if (rand < 0.33) {
    third = "Bros";
}
else if (rand >= 0.33 && rand < 0.66) {
    third = "limited";
}
else {
    third = "Hub";
}

console.log(`Generated Name: ${first} ${second} ${third}`);