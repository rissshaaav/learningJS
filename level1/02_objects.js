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

let {name, age, isLoggedIn} = jsUser; // object destructuring
console.log(name, age, isLoggedIn);

// console.table([jsUser.sym, typeof jsUser.sym]);
//> it works but this is not the correct way to go around with symbols.
//> rather, do [sym]: "mykey" and jsUser[sym].
console.table([jsUser[sym], typeof jsUser[sym]]);

jsUser.age = 10;
console.log(jsUser);
Object.freeze(jsUser); // now object cannot be modified
jsUser.age = 80;
console.log(jsUser);

console.log(Object.keys(jsUser)); // returns array of all keys
console.log(Object.values(jsUser)); // returns array of all values
console.log(Object.entries(jsUser)); // returns an array of each key-value as an array
console.log(jsUser.hasOwnProperty("isLoggedIn")); // returns true if property is present else false

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

let regularUser = {
    email: "rishav@email.com",
    fullName: {
        userFullName: {
            firstName: "rishav",
            lastName: "kumar",
        },
    },
};
console.log(regularUser.fullName?.userFullName.firstName); 
//. ? -> in case fullName is not present, it won't give any error!


let obj1 = {1: "one", 2: "two"};
let obj2 = {3: "three", 4: "four"};
let finalObj1 = Object.assign({}, obj1, obj2);
console.log(finalObj1);
//> first paramm is target and rest are sources
//> all sources will be added in target
//> that's why we put a {} so...
//> all sources get assigned to new empty object...
//> without affecting any source objects.
//> can also be done using spread operator
let finalObj2 = {...obj1, ...obj2};
console.log(finalObj2);
