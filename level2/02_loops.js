//~ for loop

for (let i = 0; i < 10; i++) {
    console.log("for: ", i);
}

// break keyword breaks the further execution of the loop
for (let i = 0; i < 10; i++) {
    if (i === 6) {
        console.log("break encountered");
        break; // after i = 6 loop will not run.
    }
    console.log("for with break: ", i);
}

// continue skips one iteration
for (let i = 0; i < 10; i++) {
    if (i === 6) {
        continue; // execution for i = 6 will be skipped.
    }
    console.log("for with continue: ", i);
}

//~ for-of loop
let arr = ["rishav", 2, 3, "kumar"];
for (const i of arr) {
    console.log("for-of: ", i);
}

//~ for-each loop
//? this loop doesn't return any value
let array = ["one", 2, "three", 4];
array.forEach((element) => {
    console.log("for-each: ", element);
});

//~ while loop

let i = 0;

while (i < 10) {
    console.log("while: ", i);
    i++;
}

//~ do-while loop
let j = 0;

do {
    console.log("do-while: ", j);
    j++;
} while (j < 10);

//~ filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums.filter((num) => num > 6));

//~ map
let names = ["rishav", "srishti", "ravi", "vidushi"];
console.log(names.map((name) => `Hello ${name}`));

//~ reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 22 },
    { name: "Bob", age: 35 },
];
const groupedByName = people.reduce((accumulator, person) => {
    if (!accumulator[person.name]) {
        accumulator[person.name] = [];
    }
    accumulator[person.name].push(person.age);
    return accumulator;
}, {});
console.log(groupedByName);
// Output:
// {
//   Alice: [25, 22],
//   Bob: [30, 35]
// }
