const marval_heros = ["thor", "Iron man", "spider man"];
const dc_heros = ["superman", "flash", "batman"];

// marval_heros.push(dc_heros);     //push data in an exsiting array
// console.log(marval_heros);
// console.log(marval_heros[3]);
// console.log(marval_heros[3][1]);

// const allHeros = marval_heros.concat(dc_heros);     //return a new array
// console.log(allHeros);

const allNewHeros = [...marval_heros, ...dc_heros];     //sperad operator
// console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));      //it make a array from given value
console.log(Array.from({name:"hitesh"}));       //Intersting result

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

