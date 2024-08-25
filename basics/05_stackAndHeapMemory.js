//? Primitive data types uses Stack Memory

let varOne = "a variable"; // varOne uses stack memeory
let varTwo = varOne; // varTwo also uses stack memory
varTwo = "another variable";
console.table([varOne, varTwo]); // no change in varOne
//~ while assigning varOne to varTwo,
//~ a copy of varOne is created and given to varTwo
//~ hence changing the varTwo doesn't affect varOne

//? Non-primitive data types uses Heap Memory

let objOne = {
    name: "rishav",
    age: 22
}; // objOne uses Heap memory
let varObj = objOne; // varObj uses stack memory
varObj.name = "kumar"
console.table([objOne, varObj]); // objOne got changed
//~ while assigning objOne to varObj,
//~ reference of objOne is passed to varObj
//~ hence changes made in varObj is visible in objOne also