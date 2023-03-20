// 1 Сума та кількість позитивних елементів.

const arrOne = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let posElement = arrOne.filter(el => el > 0);
let sum = posElement.reduce((a, b) => a + b);


console.log(`The sum of positive elements = ${sum}. Number of positive: ${posElement.length}`);
console.log('___________');

// 2 мінімальний елемент масиву та його порядковий номер.

const min = Math.min(...arrOne);
const minIdx = arrOne.indexOf(min);
console.log(`minimum array element = ${min}, ordinal number of the minimum element ${minIdx}`);
console.log('___________');

// 3 максимальний елемент масиву та його порядковий номер.

const max = Math.max(...arrOne);
const maxIdx = arrOne.indexOf(max);

console.log(`the maximum element of the array: ${max}, its sequence number: ${maxIdx}`);
console.log('___________');

// 4 кількість негативних елементів.

const negative = arrOne.filter(elem => elem < 0);

console.log(`number of negative elements = ${negative.length}`);
console.log('___________');

// 5  кількість непарних позитивних елементів.

const isOdd = num => num % 2 === 1;
const odd = arrOne.filter(isOdd);


console.log(`number of odd positive elements = ${odd.length}`);
console.log('___________');

// 6 кількість парних позитивних елементів.

const posEven = arrOne.filter(el => el > 0 && el % 2 === 0);

console.log(`number of even positive elements = ${posEven.length}`);
console.log('___________');

// 7 Сума парних позитивних елементів.

const positiveEven = arrOne.filter(el => el > 0 && el % 2 === 0);
const sumPosEven = positiveEven.reduce((a, b) => a + b);

console.log(`The sum of even positive elements = ${sumPosEven}`);
console.log('___________');

// 8 Сума непарних позитивних елементів.

const positiveOdd = arrOne.filter(el => el > 0 && el % 2 !== 0);
const sumPosOdd = positiveOdd.reduce((a, b) => a + b);

console.log(`The sum of odd positive elements = ${sumPosOdd}`);
console.log('___________');


// 9  добуток позитивних елементів.

const positiveElement = arrOne.filter(el => el > 0);
const multiplyPos = positiveElement.reduce((a, b) => a * b);

console.log(`product of positive elements = ${multiplyPos}`);
console.log('___________');

// 10 найбільший серед елементів масиву, остальні обнулити.


const maxElement = Math.max(...arrOne);
const maxIndex = arrOne.indexOf(maxElement);
arrOne.map((el, index, arr0) => { if (index !== maxIndex) arr0[index] = 0; });

console.log(`Zeroed: ${arrOne}`);
console.log('___________');