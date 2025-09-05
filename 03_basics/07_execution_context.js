/* >-------------- JS Execution context ---------< */

// 1. Global Execution context ==> locate/refer inside `this` keyword(variable) 
// 2. Function/Functional Execution context
// 3. Eval Execution context ==> In mangos


/* >-------------- Run in two phases ------------< */

// 1. Memory Creation Phase(creation phase / memory phase)
//      ==> collect the variables & functions
//      ==> only variable & function ke liye jagah locate hoti hai

// 2. Code Execution Phase =>

/* ------------------------------call stack-------------------------------- */

function one() {
    console.log("One");
    two();
}
function two() {
    console.log("Two");
    three();
}
function three() {
    console.log("Three");
}

one();
two();
three();