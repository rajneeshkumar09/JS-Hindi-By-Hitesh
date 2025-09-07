/* ----------> Reduce <---------- */

const myNums = [1, 2, 3];

/* ----------> Basic method <---------- */
const myTotal = myNums.reduce(function(acc, curnt) {
    // console.log(`acc: ${acc} and Currval: ${curnt}`);
    return acc + curnt;
}, 0);
// console.log(myTotal);

/* ----------> Arrow method <---------- */
const initialValue = 0;
const sumWithInitial = myNums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
// console.log(sumWithInitial);

const soppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Movile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
];

const priceToPay = soppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);