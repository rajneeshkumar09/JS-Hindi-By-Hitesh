/* If : condition is evaluate as true or false. if condition is true then if block execute otherwise not execute the if block */

const isUserLoggedIn = true;
const temperature = 41;

/* if (2 == "2") { */
if (2 === "2") {
    console.log("Executed");
}

/* if(temperature < 50) { */
if (temperature === 40) {
    console.log("Less than 50");
} else {
    console.log("Temperature greater than 50");
}

// console.log("Executed");

/* ------ <, >, <=, >=, ==, !=, ===(checks the value and the type), !== ------ */

const score = 200;

if (score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

const balance = 1000;

if (balance > 500) {
    console.log("if statement using block");
}

// if (balance>=600) console.log("Single line If statement");
// if (balance>=600) console.log("Single line If statement"), console.log("ye syntax use nhi krna hai");

if (balance < 500) {
    console.log("Less than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
}

/* >---------------- Real life usage -----------------< */
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

/* if (userLoggedIn && debitCard) { */
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}