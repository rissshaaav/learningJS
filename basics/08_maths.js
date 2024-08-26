//~ JS has an inbuilt Math library

console.table([Math.abs(-4), Math.abs(4)]); // absolute value

console.table([Math.round(5.6), Math.floor(5.6), Math.ceil(5.6)]);
//> round => rounds off
//> floor => lower limit
//> ceil => upper limit

let arr = [7, 8, 5, 2, 9];
console.table([Math.min(arr), Math.max(arr)]); // NaN, NaN
console.table([Math.min(...arr), Math.max(...arr)]); // 2, 9
//? min and max expects a list but arr is an object
//? so first implementation results in NaN
//? directly pass the list or use spread operator to create a new list

console.table([Math.sqrt(24).toFixed(3), Math.pow(2, 4)]);

console.table([
    Math.random(), // generates a random number between 0 & 1
    Math.random() * 10 + 1, // a random number between 1 & 11
    Math.round(Math.random() * 10 + 1), // round of to single digit
]);

//> random number in a given range
let min = 11;
let max = 23;
console.log(Math.round(Math.random() * (max - min) + min));
