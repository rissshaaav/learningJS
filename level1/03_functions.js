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

//~ taking argumnets

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

//~ default parameter value

const greet = function (name = "Birju") {
    // default value of parameter
    return `Hello, ${name}`;
};
console.log(greet()); // Hello, Birju
console.log(greet("Rishav")); // Hello, Rishav

//~ taking any number of arguments

let takeManyNumbers = function (...nums) {
    // rest operator; returns a list
    return nums;
};
console.log(takeManyNumbers(1, 2, 3, 4));
console.log(takeManyNumbers(1, 2));

//~ passing object as argument

let user = {
    name: "rishav",
    age: 22,
    gender: "male",
};
function displayUserInfo(user) {
    console.log(`User name: ${user.name}, age: ${user.age} and ${user.gender}`);
}
displayUserInfo(user);

//~ nested function and there scopes

function one() {
    let username = "rishav";
    function two() {
        let website = "youtube";
        console.log(username);
    }
    // console.log(website);
    // cannot access 'website' outside the scope of 'two'
    two();
}
one();

//~ calling before declaring

hello();
function hello() {
    console.log("you can call me before declaring");
}

//helloAgain();
//! ReferenceError: Cannot access 'helloAgain' before initialization
let helloAgain = function(){
    console.log("you cannot call me before declaring");
    
}
//? cannot access a function stored in a variable before declaring it,
//? because it is the variable that is being referred before declaration.