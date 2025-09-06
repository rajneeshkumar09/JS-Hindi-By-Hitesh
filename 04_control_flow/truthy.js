/* ----------> truthy and falsy values <--------------- */

// const userEmail = "h@hitesh.ai";         // return true because variable contains value
const userEmail = "";           //return false because variable don't contain any value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/* -----> Falsy values: false, 0, -0, BigInt - 0n, "", null, undefined, NaN <----- */ 

/* -----> Truthy values: "0", 'false', " ", {}, [], function(){},  <----- */

const myArray = [];

if (myArray.length === 0) {
    console.log("Array is Empty");
}


const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

// if (emptyObject) {
//     console.log("truthy");
// }

/* ----------> Nullish Coalescing Operator (??) : null, undefined <---------- */

let val1;
// val1 = 5 ?? 10;     //store the first value
// val1 = null ?? 10       //store the second value
// val1 = undefined ?? 15      //store the second value
val1 = null ?? 10 ?? 15         //store the second value

console.log(val1);

/* ----------> Terniary Operator <---------- */
/* ----------> Syntax: condition ? true : false <---------- */

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");