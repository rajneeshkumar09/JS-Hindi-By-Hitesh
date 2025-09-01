//Dates 

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2023,0,23);        // month start form 0-11 in js
// let myCreatedDate = new Date(2023,0,23,5,3);        // month start form 0-11 in js
// let myCreatedDate = new Date("2023-01-14");        // month start form 01-12 in js
let myCreatedDate = new Date("01-14-2024");        // month start form 01-12 in js
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now();
// console.log(myTimeStamp);       //give time in mili-seconds
// console.log(myCreatedDate.getTime());       //converted a date into mili-seconds time

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));