/* DOM:- https://dom.spec.whatwg.org/ */

/*Arrays*/

/*Defining an Array*/
const myArr = [0,1,2,3,4,5];
const myHeroes = ["Dr. Strange", "Tony Stark", "Natasha", "Bruse Banar", "captain"];
const myArr2 = new Array(1,2,3,4,5,9,7,8,6);

// console.log(myArr);
// console.log(myArr[1]);

/*Array methods */

// myArr.push(6);
// myArr.push(7);      //to add an element at the end of an Array
// myArr.pop();        //to remove an element at the end from an Array

// myArr.unshift(9);       //to add an element at the start of an Array
// myArr.shift();       //to remove an element at the start of an Array

// console.log(myArr.includes(9));      //checks the value present in a array or not
// console.log(myArr.indexOf(9));       //tells the index of an element in an Array ==> if present then return index number otherwise return -1.
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr, typeof myArr);
// console.log(newArr, typeof newArr);      //return a string of an array 
 
/* slice, splice */
console.log("A", myArr);

const myn1 = myArr.slice(1,3);      //return a section of an array called sub-array. End value is not include in this.

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);        //divide into two parts

console.log(myn2);
console.log("C", myArr);