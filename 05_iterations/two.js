/* ----------> While & do-while loop <---------- */

/* ----------> while loop <---------- */

let index = 0;
while (index <=10) {
    console.log(`value of index is ${index}`);
    // index++;
    index = index + 2;
}
console.log("\n");

let myArray = ["flash", "batman", "superman"];
let arr = 0;

while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1;
}
console.log("\n");

/* ----------> do-while loop <---------- */
// phle kam hoga uske bad condition check hogi.

// let score = 1;
let score = 11;
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);