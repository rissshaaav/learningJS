let myArr = [0, 1, "text", 3, 4];
console.log(myArr[3]);

let arr = new Array(78, 4, true, 3, "last");
console.log(arr[2]);

arr.push("push");
console.log(arr);

arr.push("endElement");

arr.pop();
console.log(arr);

console.table([myArr.includes(9), myArr.indexOf("text")])

let myArrJoined = myArr.join();
console.table([typeof myArrJoined, myArrJoined])

myArr.unshift("new");
console.log(myArr);

myArr.shift();
console.log(myArr);

let marvelHeros = ["ironman", "thor", "hulk"];
let dcHeros = ["batman", "superman", "wonderWoman"];
let concatAllHeros = marvelHeros.concat(dcHeros);
console.log(concatAllHeros);
let spreadAllHeros = [...dcHeros, ...marvelHeros]; // ... is spread operator
console.log(spreadAllHeros);

let nestedArr = [1, 2, [7, 8, 9], [4, 5, [6, 0], 12]];
console.log(nestedArr.flat("Infinity"));

console.log(Array.from("Rishav")); // [ 'R', 'i', 's', 'h', 'a', 'v' ]

console.log(Array.from({name: "rishav"})); // [] ; in case of objects, need to specify whether to create array from key or value
console.log(Array.from({0:"rishav", 1:"kumar", length: 2})); // from() expects iteratables having length property. If we create an object like this, then it will not give empty array.

console.log(Array.isArray("Rishav")); // false
