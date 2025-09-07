/* ----------> For-Each loop : It is a higher order function <---------- */

const coding = ["js", "ruby", "cpp", "java", "python"];

/* ----------> Basic method of forEach loop <---------- */
coding.forEach(function (val) {       // kuki ye callback function hai isliye iska koi name nhi hoga
    // console.log(val);
});

coding.forEach((item) => {
    console.log(item);
});
console.log("\n");

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);    // function ka reference pass krna hai as a parameter, execute nhi hai kuki execute forEach loop khud kr leta hai
console.log("\n");

coding.forEach((arr, index, item) => {      //contain three parameters which includes a single individual item, item index number & the whole array
    console.log(arr, index, item);
    /* ----> Output pattern : Item, Index, Array <---- */
});
console.log("\n");


/* ----------> Multiple Object inside Array <---------- */
const mycoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "TypeScript",
        languageFileName : "ts"
    }
]

/* ----------> Access keys & values object inside an Array <---------- */
mycoding.forEach((item) => {
    console.log(item.languageName);
});