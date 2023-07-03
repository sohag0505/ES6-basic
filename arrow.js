// function add(first, second = 10) {
//     const total = first + second;
//     return total;
// }
// const result = add(9);
// console.log(result)



// const add2 = (first, second) => first + second;

// const result = add2(80, 20);
// console.log(result);

const firstName = 'Sohag';
const lastName = 'hossain';
const myName = `My name is :${firstName} ${lastName}`;
console.log(myName);



const nums = [34, 4, 5232, 52, 45];
const largest = Math.max(...nums);
console.log(...nums)
console.log(largest);

const array1 = [1, 2, 3, ...nums, 4, 5];
console.log(array1);