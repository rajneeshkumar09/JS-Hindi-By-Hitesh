// var c = 300;

let a = 300;
const b = 20;

if(true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("INNER(BLOCK SCOPE VALUE):", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log("OUTER(GLOBAL SCOPE VALUE):",a);
// console.log(b);
// console.log(c);


/* Browser ke andar console me scope check krte hai bo alg hai. Aur code enviornment me node ke through example ko run krte hai tb scope alg hai i.e. node me scope alg trh se kam krta hai.  */