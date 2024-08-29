//~ if-else
let isUserLoggedIn = false;

if (isUserLoggedIn) {
    console.log("user is logged in");
} else {
    console.log("user not logged in");
}

if (2 < 2) {
    console.log("if executed");
} else if (2 > 1) {
    console.log("else if executed");
} else {
    console.log("else executed");
}
// comparison operators: <, >, <=, >=, ==, ===, !==, !=

//~ ternary operator
isUserLoggedIn ? console.log("evaluated true") : console.log("evaluated false");

//~ switch case
let day = "tuesday";
switch (day) {
    case "sunday":
        console.log("7th day, weekend");
        break;
    case "saturday":
        console.log("6th day, weekend");
        break;
    case "monday":
        console.log("1st day");
        break;
    case "tuesday":
        console.log("2nd day");
        break;
    case "wednesday":
        console.log("3rd day");
        break;
    case "thursday":
        console.log("4th day");
        break;
    case "friday":
        console.log("5th day");
        break;
    default:
        console.log("invalid day of week");
        break;
}
// break is important,
// otherwise all the statements after the matched case will get executed