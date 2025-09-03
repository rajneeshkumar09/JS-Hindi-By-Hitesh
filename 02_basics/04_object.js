const tinderUser = new Object();        //singleton object
const tinderuser = {};      //Non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek",
            lastname: "Gangwar"
        }
    }
}

console.log(regularUser.email);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj5 = {
    5:"e",
    6:"f"
}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({},obj1, obj2, obj5);      //{} - target paramenter - this is optional parameter which means that it stores result from all the parameters. and other parameters knowns as sources
// console.log(obj3);
// console.log(obj4);

// spread operator
const obj6 = {...obj1, ...obj2, ...obj5};
console.log(obj6);

const users =[
    {
        id:1,
        email:"h1@gmail.com"
    },
    {
        id:2,
        email:"h2@gmail.com"
    },
    {
        id:3,
        email:"h3@gmail.com"
    },
    {
        id:4,
        email:"h4@gmail.com"
    },
    {
        id:5,
        email:"h5@gmail.com"
    },
    {
        id:6,
        email:"h6@gmail.com"
    }
]

users[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));    // reaturn an array with sub-arrays which contains key and value in sub-arrays.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedOut'));