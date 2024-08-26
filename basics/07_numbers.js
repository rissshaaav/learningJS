let amount = 1000000;
let balance = new Number(1000000);
console.table([amount, balance.valueOf()]);
console.table([typeof amount, typeof balance.valueOf()]);

balance = 1258;
console.log(balance.toFixed(3)); // digits after decimal

balance = 123.58932;
console.table([
    balance.toPrecision(2),
    balance.toPrecision(3),
    balance.toPrecision(4),
    balance.toPrecision(5),
]); // rounds of the number or converts in exponential form

console.table([
    balance.toExponential(2),
    balance.toExponential(3),
    balance.toExponential(4),
    balance.toExponential(5),
]); // converts the number in fractional notation

console.table([amount.toLocaleString(), amount.toLocaleString("en-US")]);

console.table(amount.toString()); // number into string allowing all the string operations

console.table([Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]); // max and min values for number