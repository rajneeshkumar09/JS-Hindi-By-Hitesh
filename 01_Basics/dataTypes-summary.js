// Primitive Data Types => call by value hote hai
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Number
const score = 100;
const scoreValue = 100.4;

// Boolean, Null, Undefined
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

// BigInt
const bigNumber = 86728102546465472635546n;


// Reference Data Types (Non-primitive Data Types)
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
const obj = {
    name: "Hitesh",
    age: 22
}

const myfun = function() {
    console.log("Hello World!");
} 

console.log(typeof myfun);


// JavaScript is a dynamic programming language
