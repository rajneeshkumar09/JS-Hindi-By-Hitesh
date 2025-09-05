/* this keyword tells about current context i.e. current context ko refer krta hai (context == value of variables)*/ 

const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function () {
        /* this keyword is used for access the user object's variable */ 
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage;     // don't give any value
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);


/* this keyword not work in function. It works only with objects. */
function chai() {
    let username = "hitesh";
    // console.log(this);
    console.log(this.username);        //return undefined
}

chai();

const chaiCode = function () {
    let username = "Hitesh";
    console.log(this.username);
}

chaiCode();

/* Arrow function */
const chaiCodeArrow = () => {
    let username = "abhi";
    // console.log(this.username);
    console.log(this);      // return empty paranthesis {}
}

chaiCodeArrow();

/* Interwiew Ques: Arrow function me this use nhi kr skte hai aur Regular function me this ka use kr skte hai */

/* Arrow Function */

/* Simple Arrow function / Explicit return */
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

/* Implicit return Arrow function */
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => ( num1 + num2 );

/* what happend if we return an object */
// const addTwo = (num1, num2) => {username:"Abhishek"};        // return undefined
const addTwo = (num1, num2) => ({username:"Abhishek"});         // return object

console.log(addTwo(3, 4));

const myArray = [2,5,3,7,8];

/* classic function in array */
myArray.forEach(function() {});

/* Arrow function in array */
myArray.forEach(() => {});

let num1 = 599;
myArray.forEach(() => (num1));
