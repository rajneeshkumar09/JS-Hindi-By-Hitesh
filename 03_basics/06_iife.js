/* Imediately Invoked Function Expressions (IIFE) */

/* --> function likha aur imediate execuate krna hai <-- */
/* ---> global scopes ke pollution se  problem hoti hai kai bar toh us globle scope ke variables ya declaration ko hatane ke liye IIFE ka use karte hai <---

---> syntax=> ()(); ==> meaning: {() whole funtion ke liye}--{ ()function call ke liye} <--- */

/* Regular user of function delclaration and function call */
// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai();

/* Imediately Invoked function */
/* ---------- function named IIFE ------------------ */
(function chai() {
    console.log(`DB CONNECTED`);
})();

/* ---------- function unnamed IIFE without paramenter & argument ---------------- */
( () => {
    console.log(`DB CONNECTED Two`);
} )();

/* ---------- function unnamed IIFE with paramenter & argument ---------------- */
( (name) => {
    console.log(`${name} DB CONNECTED Two`);
} )("Hitesh");

/* ---> Note : Agr do IIFE ek sath likhne ho tb dono ke end me semicolon ka use jarur kre <--- */