const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Abhishek');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));

console.log(gameName.indexOf('b'));

// All String Methods: read at MDN reference OR Write an article about that string ke method kitne hai sare methods ko go through kr lege to interview creck ho jayega 

const game = "Free-Fire";
const newString = game.substring(0, 4); //not accept the negative value
console.log(newString);

const anotherString = game.slice(-8,4);
console.log(anotherString);

const newStringOne = "    hitesh.    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/abhishek%20gangwar";
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));

const str = new String('hitesh-hc-com');
console.log(str.split('-'));
