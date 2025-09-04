/* Function */

/* Function is like a package which is used where we want in a program */

// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");


console.log("Display using by Function");
/* function declaration */
function sayMyName() {
    /* function defination */
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

/* function call */
// sayMyName       //known as reference
sayMyName();       //known as execution

function addTwoNumbers(number1, number2) {      // (number1, number2) --> known as paramenters (in function declaration)
    // console.log(number1 + number2)

    // let result = number1 + number2;
    // return result;
    // console.log("Hitesh");

    return number1 + number2
}

// addTwoNumbers(3, "4");      // (n, m) --> known as arguments (in function call)
// addTwoNumbers(3, "a");

// addTwoNumbers(3, 5);
const result = addTwoNumbers(3, 5);

// console.log("Result :", result);

// function loginUserMessage(username = "sam") {
function loginUserMessage(username) {
    if(!username) {        //if(!username) - has the same meaning as (username === undefined) 
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hitesh"));
console.log(loginUserMessage());
