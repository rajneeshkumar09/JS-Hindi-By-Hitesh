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



// *************** Operations *******************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = 'Hello';
let str2 = 'Hitesh';
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + '2');

// console.log(+true);
// console.log(+'');

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/#sec-type-conversion

// MDN increment operation (postfix and prefix); 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment