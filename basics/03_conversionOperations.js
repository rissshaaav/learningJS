let str = "330";
let numFromStr = Number(str);
console.table([typeof str, typeof numFromStr, numFromStr]);
// string, number, 330

str = "";
numFromStr = Number(str);
console.table([typeof str, typeof numFromStr, numFromStr]);
// string, number, 0

str = "some characters";
numFromStr = Number(str);
console.table([typeof str, typeof numFromStr, numFromStr]);
// string, number, NaN
//> NaN means Not a Number
//> typeof NaN returns number

str = "";
let boolFromStr = Boolean(str);
console.table([typeof str, typeof boolFromStr, boolFromStr]);
// string, boolean, false

str = "something";
boolFromStr = Boolean(str);
console.table([typeof str, typeof boolFromStr, boolFromStr]);
// string, boolean, true

num = 0;
let boolFromNum = Boolean(num);
console.table([typeof num, typeof boolFromNum, boolFromNum]);
// string, boolean, false

num = 154;
boolFromNum = Boolean(num);
console.table([typeof num, typeof boolFromNum, boolFromNum]);
// number, boolean, true

str = null;
boolFromStr = Boolean(str);
console.table([typeof str, typeof boolFromStr, boolFromStr]);
// object, boolean, false

str = undefined;
boolFromStr = Boolean(str);
console.table([typeof str, typeof boolFromStr, boolFromStr]);
// undefined, boolean, false


num = 10;
let negNum = -num;
console.log(negNum); // -10

console.log("1" + "2"); // 12
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 3); // 123
console.log(1 + 2 + "3"); // 33
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0