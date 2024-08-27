const sayMyName = function () {
    // function definition
    console.log("R");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("v");
};

// function call
sayMyName();

let addTwoNumber = function (num1, num2) {
    // values inside paranthesis of function declaration -> parameters
    console.log(num1 + num2);
};
let result = addTwoNumber(2, 5); // value inside paranthesis of function call -> arguments
console.log(result); // undefined; since the function is only logging to the console not returning anything

addTwoNumber = function (num1, num2) {
    let result = num1 + num2;
    return result;
};
result = addTwoNumber(2, 5);
console.log(result); // 7

const greet = function (name = "Birju") {
    // default value of parameter
    return `Hello, ${name}`;
};
console.log(greet()); // Hello, Birju
console.log(greet("Rishav")); // Hello, Rishav
