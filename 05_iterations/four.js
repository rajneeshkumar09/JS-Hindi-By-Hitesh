/* ---> for-of loop is not working on Objects. But we can use for-in loop at Objects <--- */

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

// console.log(myObject);

/* ----------> For-in loop at Object <---------- */

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
console.log("\n");

/* ----------> For-in loop at Array <---------- */

const programming = ["js", "rb", "java", "cpp", "py"];

for (const key in programming) {
    // console.log(key);   // return array's key that mean return array's index number
    console.log(programming[key]);
}
console.log("\n");

/* ----------> For-in loop at Map <---------- */

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('Fr', "France");
map.set('IND', "India");

// console.log(map);

/* --> loop on map <-- */

for (const key in map) {       // map is not iteratable 
    console.log(key);       // So it return nothing in for-in loop
}