const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString(), typeof balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNum = 23.896546;
const otherNum = 123.896546;
// console.log(otherNum.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++ Maths ++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));      //convert negative value into positive
// console.log(Math.round(4.6));      //provide a roundup value (nearest value of a number)
// console.log(Math.ceil(4.2));      //provide a high roundup value (high nearest value of a number)
// console.log(Math.floor(4.9));      //provide a low roundup value (less nearest value of a number)

// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());     //give a random value between 0 and 1.
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);       //when needs value should be start from 1.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);     //minimum value jitni chaihiye utni add kr di like '+min'.