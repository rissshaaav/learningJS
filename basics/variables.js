const accountId = "20240824";
//> const variables cannot be changed after declaration
//> const is block and fucntion scoped.

{
    let accountName = "Rishav";
    //> let is block and function scoped

    console.log(`accountName: ${accountName}`);

    var accountPassword = "123456";
    //> var has no scoping / globally scoped
}

accountCity = "Bhopal";
//> same as var, but not allowed in strict mode

let accountState;
//> default value is 'undefined'

// console.log(`accountName: ${accountName}`);
//! ReferenceError: accountName is not defined

console.log("original values:");
console.table([
    accountId,
    accountPassword,
    accountCity,
    accountState,
]);

// accountId = "654326";
//! TypeError: Assignment to constant variable.

accountName = "Kumar";
//? it's not previous accountName variable
//? accountName was not declared globally before,
//? so JS creates a new global variable accountName and assigns value to it

accountPassword = "dhahytj";
accountCity = "Indore";

console.log(`accountName: ${accountName}`);

console.log("changed values:");
console.table([accountId, accountPassword, accountCity]);
