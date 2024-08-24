"use strict" //> tells the engine to use newer version of JS only

//~ datatypes ; range ; return type

//- Number ; -(2^53 - 1) to (2^53 - 1) ; "number"
let num = 2;
console.log(typeof num);

//- BigInt ; >number ; "bigint"
let bigNum = BigInt(Number.MAX_SAFE_INTEGER) + 10n;
console.log(typeof bigNum);

//- String ; "anything" ; "string"
let str = "aString";
console.log(typeof str);

//- Boolean ; true/false ; "boolean"
let bool = true;
console.log(typeof bool);

//- null ; a standalone value ; "object"
let val = null;
console.log(typeof val);

//- undefined ; when not defined ; "undefined"
let something;
console.log(typeof something);

//- Symbol ; unique and immutable primitive value ; "symbol"
let sym1 = Symbol("myName");
let sym2 = Symbol("myName");
console.log(sym1 === sym2); 
//> false because Symbol creates unique values
console.log(typeof sym1);