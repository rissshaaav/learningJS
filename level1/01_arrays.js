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

