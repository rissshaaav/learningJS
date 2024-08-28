//~ Immediately Invoked Function Expressions
//> functions that are called immediately after being declared
//> helps prevent the pollution of global scope

// name iife
(function hello() {
    console.log(`hello, good morning`);
})();

//? notice: (function definition)()
//? first paranthesis is to return the function without using 'return' keyword.
//? second paranthesis is to immediately call the function.

// unnamed iife
((name) => console.log(`hello ${name}`))("rishav");

//> notice:
// (() => console.log("first iife"))()
// (() => console.log("second iife"))()
//! TypeError: (intermediate value)(...) is not a function
//? semicolon at the end of IIFE is important otherwise it will take next function as its argument.
