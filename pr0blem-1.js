// arrow  function declear 3 perameters
const add = (num1, num2, num3) => num1 + num2 + num3;
const result = add(10, 20, 70);
// console.log(result);


const sentence = `
I am a web developer.
I love to code.
I love to eat biryani.
`;
// console.log(sentence);


function numbers(num1, num2 = 10) {
    const totalNumbers = num1 + num2;
    return totalNumbers;
}
const totalResult = numbers(10);
// console.log(totalResult);


// Array Problem -2



const friend = (friends) => {

    const newArray = [];

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length % 2 === 0) {
            newArray.push(friends[i]);
        }
    }
    return newArray;
}
const friends = ['nayem', 'jahir', 'sakur', 'ar', 'asif'];
console.log(friend(friends))