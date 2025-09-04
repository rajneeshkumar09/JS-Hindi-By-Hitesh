/* '...' - known as rest operator and spread operator => use case ke hisab se deside hota hai ki kb '...' ko rest operator bolege aur kb spread operator bolege */

/* In function, '...' known as rest operator which combine all values and return(store & create) an array of all values which comes from arguments */  
// function calculateCartPrice(...number1) {
function calculateCartPrice(num1, num2, ...number1) {
    return number1;
}

console.log(calculateCartPrice(200, 400, 500, 2000, 1245, 999));

/* how to use this object and how to pass this object into function */
const user = {
    username:"Hitesh",
    // price:199
    prices:199
}

function handleObject(anyobject) {
    /* Access any object value : Use this syntax => Object_paramenter.object_key */
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: 'sam',
    price: 399
});

/* how to use this array and how to pass this array into function */
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 700, 1000]));
