// const numbers = [2, 7, 4, 8, 6];
// const output = [];

// for (const number of numbers) {
//     const doubleIt = number * 2;
//     output.push(doubleIt);
// }
// console.log(output);


// const numbers = [2, 7, 4, 8, 6];
// const doubleIt = num => num * 2;
// const makeDouble = numbers.map(doubleIt)
// console.log(makeDouble);

// const fiveTimes = [1, 2, 3, 4, 4].map(x => x * 5);
// console.log(fiveTimes);


const product = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'phn', price: 23230 }
];

const iteams = product.map(product => product.name);
// console.log(iteams);

// const nums = [12, 13, 65, 14, 23]
// const bigNums = nums.find(nums => nums > 20);
// console.log(bigNums);


const nums = [12, 13, 65, 14, 23]
const bigNums = nums.filter(nums => nums > 20);
console.log(bigNums);