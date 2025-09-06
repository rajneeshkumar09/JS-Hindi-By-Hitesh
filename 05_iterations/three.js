/* ---> Array specific loops : for-of loop, for-in loop <--- */

// ["", "", ""]        // Array with string value
// [{}, {}, {}]        // Array with Objects

/* ----------> For-of loop <---------- */
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {    //loop used at Array
    console.log(num);
}
console.log("\n");

const greetings = "Hello world";

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
console.log("\n");

/* ----------> Maps <---------- */
/* --> map is known for unique values i.e. map me ek value kebal ek hi bar hogi agr dubara entry kroge to bo nhi hogi. And also key must be unique. <--- */

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('Fr', "France");
map.set('IND', "India");

// console.log(map);

/* --> loop on map <-- */

for (const [key, value] of map) {       // [key, value] => alg alg dono value access krne ke liye 
    console.log(key, ":-", value);
}

/* ----------> Object <---------- */

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    game3 : 'NFSA',
    game4 : 'Spiderman2'
}
// console.log(myObject);

/* --> loop on Object <-- */

// for (const [key, value] of myObject) {      // return myObject is not iterable
//     console.log(key, ":-", value);
// }