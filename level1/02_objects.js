//~ Object literal design pattern

let sym = Symbol("key");

let jsUser = {
    name: "rishav",
    "full name": "rishav kumar",
    [sym]: "myKey",
    age: 22,
    location: "Muzaffarpur",
    email: "rishav@email.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"],
};

console.log(jsUser.name);
console.log(jsUser["email"]);

console.log(jsUser["full name"]); // cannot use '.' method here hence it is recommended to use brackets only.

// console.table([jsUser.sym, typeof jsUser.sym]);
// it will give the output but thi is not the correct way to use with symbols.
// to use it as symbol, do [sym]: "mykey" and jsUser[sym].
console.table([jsUser[sym], typeof jsUser[sym]]);

jsUser.age = 10;
console.log(jsUser);
Object.freeze(jsUser); // now object cannot be modified
jsUser.age = 80;
console.log(jsUser);

let school = {
    name: "XYZ Vidya Mandir",
    medium: "Sanskrit",
    board: "CBSE",
};
console.log(school);

school.advertisement = function () {
    return `Hey, ${this.name} is admitting for +2 Science Course`; // 'this' will refer to this object on which the method is invoked;
};

console.log(school.advertisement());


//~ Singleton Design Pattern

let tinderUser = new Object();
tinderUser.username = "user1";
tinderUser.name = "rishav";
tinderUser.gender = "male";
console.log(tinderUser);
