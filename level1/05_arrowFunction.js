function one(name) {
    console.log(`hello ${name}!`);
}
one("rishav");

const two = function (name) {
    console.log(`hello ${name}!`);
};
two("rishav");

//~ arrow function

const three = (name) => {
    console.log(`hello ${name}!`);
};
three("rishav");

const four = (name) => console.log(`hello ${name}!`);
four("rishav");

//- 'return' keyword required with braces
const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwoNumbers(2, 5));

//- 'return' keyword not required with paranthesis
const name = () => ({ name: "rishav" });
console.log(name());

const five = () => {
    console.log(this);
}
five(); // prints empty object
//- 'this' is not acceseble in arrow functions

// six();
//! ReferenceError: Cannot access 'six' before initialization
const six = () => {
    console.log("this is six");
}
//- cannot call before declaration/initialization