console.log("3" == 3); // true
//> loose equality
//> performs type coercion before making any comparison.
console.log(1 == true); // true
/*
~ here are the rules for type coercion in JavaScript:
    ~ If either operand is a string, the other operand will be converted to a string.
    ~ If either operand is a number, the other operand will be converted to a number.
    ~ If either operand is a boolean, it will be converted to a number (true becomes 1 and false becomes 0).
    ~ If one operand is an object and the other is a primitive value, the object will be converted to a primitive value before the comparison is made.
    ~ If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise it will return false
*/


console.log("3" === 3); // false
//> strict equality
//> does not convert the types of the operands before comparing.
/*
    ~ While comparing the variables, it first checks if the types differ. If they do, it returns false. 
    ~ If the types match, then it checks for the value. If the values are same and are not numbers, it returns true.
    ~ Finally, if both the operands are numbers and are not NaN, and they have the same value, then it returns true. Otherwise, false.
*/


console.log(null < 0); // false
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined < 0); // false
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

//~ falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//~ important truthy values: [], {}, function(){},

//~ null coalescing operator:
let data = null ?? 10;
console.log(data); // 10, truthy value is assigned

data = undefined ?? 11;
console.log(data); // 11, truthy value is assigned

data = 5 ?? 12;
console.log(data); // 5, first truthy
