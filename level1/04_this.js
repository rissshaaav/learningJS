//? 'this' is used to access the current context (scope)

console.log(this);
//- gives empty object because global context is empty in nodejs
//- but it browser, global context is a Window, so it won't be empty

//> 'this' with objects
let user = {
    name: "rishav",
    age: 22,
    email: "rishav@email.com",
    greet: function () {
        console.log(`${this.name}, welcome!`);
        console.log(this); // prints the object to which is tied to.
    },
};
user.greet();

//> 'this' with functions
function one() {
    console.log(this);
}
one();
//- stills refers to the global object, but returns something very long

function two() {
    let username = "user1";
    console.log(this.username);
}
two(); // logs undefined
//- stills refers to the global object,
//- but since 'username' is declared separately and not attached to the global object...
//- so gobal object has no property 'username'.
