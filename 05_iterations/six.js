/* ----------> Filter, Map & Reduce <---------- */

/* ----------> Drawback of forEach loop <---------- */
const coding = ["js", "ruby", "cpp", "java", "python"];

const values = coding.forEach(item => {     //forEach loop never return any value jise kisi variable me store krke use kr sake
    // console.log(item);
    return item;
});

// console.log(values);    // return undefined untill you used to 'return item' or 'console.log(item)'


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* ----------> Basic of Filter <---------- */
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

const newNums = myNums.filter((num) => {
    return num > 4;     //  jb explicit return ka use krege tb return keyword use krna jaruri hai(return ko scope ke andar use krna hai)
});
console.log(newNums);

/* ----------> Use forEach loop as filter <---------- */
const newNum = [];

myNums.forEach((item) => {
    if (item % 2 == 0) {
        newNum.push(item);
    }
});

console.log(newNum);

/* ----------> --------------- <---------- */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
];

// const userBooks = books.filter((bk) => bk.genre === 'History');
// const userBooks = books.filter((bk) => bk.genre === 'Non-Fiction');
// const userBooks = books.filter((bk) => bk.publish === 1989);
// const userBooks = books.filter((bk) => bk.edition === 2010);        /* ---> return an array with objects which meets the specific condition otherwise return empty Array <--- */

const userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'Science';
});
console.log(userBooks);