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
