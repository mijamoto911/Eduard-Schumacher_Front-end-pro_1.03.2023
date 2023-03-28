// 1

const arr = [1, 22, 31, 4, 55, 6, 34, "June", "Winter"];

const filteredArray = arr.filter((array, item) => item !== 7);

console.log(filteredArray);

console.log('____________');



// 2



function generateKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randoms = [];
    for (let i = 0; i < length; i++) {
        randoms.push(characters[Math.floor(Math.random() * characters.length)]);
    }
    return randoms.join('');
}
console.log(generateKey(16));
console.log('____________');



// 3


const inputString = " hello world";
const charsToRemove = ['l', 'd'];
const resultString = removeChars(inputString, charsToRemove);


function removeChars(inputString, charsToRemove) {
    let resultString = "";
    for (let i = 0; i < inputString.length; i++) {
        if (!charsToRemove.includes(inputString[i])) {
            resultString += inputString[i];
        }
    }
    return resultString;
}
console.log(resultString);
console.log('____________');


// 4


function createSum(n) {
    return function(num) {
        return n + num
    }
}

const sum = createSum(0);
const sum1 = createSum(3);
const sum2 = createSum(8);

console.log(sum(3));
console.log(sum1(5));
console.log(sum2(20));