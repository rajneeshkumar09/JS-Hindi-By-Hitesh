// let score = "33";
// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true;
let score = "hitesh";

/*
    "33" => 33
*/

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number (score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let isLoggedIn = 1;     //0
let isLoggedIn = "";     

/*
     Before conversion	    After conversion
		    1 	                true
		    0	                false
		"Abhishek" 	            true 
		    ""	                false
*/

let booleanIsLoggedIn = Boolean (isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 25;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
