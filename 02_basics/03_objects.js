/* literal & constructor */

/* when object are created using constructor then it always make as singleton object */ 
// Object.create;      //constructor method

// object literals method 

const mySym = Symbol("key1");

const jsUser = {
    "full name": "Abhishek Gangwar",
    [mySym]: "mykey1",
    name:"hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Sunday"]
};

console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser["full name"]);
console.log(jsUser[mySym]);     //method to define a symbol in an object
// console.log(typeof jsUser[mySym]);

jsUser.email = "hitesh@chatgpt.com";
console.log(jsUser.email);

// Object.freeze(jsUser);
// Object.freeze(jsUser);
jsUser.email = "aman576@funky.org"
jsUser.name = "Aman";
console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greetingTwo());
