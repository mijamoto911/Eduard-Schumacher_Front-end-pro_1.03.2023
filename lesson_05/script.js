// 1 Сума та кількість позитивних елементів.

const arrOne = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let posElement = arrOne.filter(el => el > 0);
let sum = posElement.reduce((a, b) => a + b);


console.log(`The sum of positive elements = ${sum}. Number of positive: ${posElement.length}`);
console.log('___________');

// 2 мінімальний елемент масиву та його порядковий номер.

let min = Math.min.apply(Math, arrOne);
let minIdx = arrOne.indexOf(min) + 1;
console.log(`minimum array element = ${min}, ordinal number of the minimum element ${minIdx}`);
console.log('___________');

// 3 максимальний елемент масиву та його порядковий номер.

let max = Math.max.apply(Math, arrOne);
let maxIdx = arrOne.indexOf(max) + 1;

console.log(`the maximum element of the array: ${max}, its sequence number: ${maxIdx}`);
console.log('___________');

// 4 кількість негативних елементів.

let negative = arrOne.filter(elem => (elem < 0))

console.log(`number of negative elements = ${negative.length}`);
console.log('___________');

// 5  кількість непарних позитивних елементів.

let isOdd = num => num % 2 === 1;
let odd = arrOne.filter(isOdd);


console.log(`number of odd positive elements = ${odd.length}`);
console.log('___________');

// 6 кількість парних позитивних елементів.

let posEven = arrOne.filter(el => (el > 0 && (el % 2 === 0)));

console.log(`number of even positive elements = ${posEven.length}`);
console.log('___________');

// 7 Сума парних позитивних елементів.

let positiveEven = arrOne.filter(el => (el > 0 && (el % 2 === 0)));
let sumPosEven = positiveEven.reduce((a, b) => a + b);

console.log(`The sum of even positive elements = ${sumPosEven}`);
console.log('___________');

// 8 Сума непарних позитивних елементів.

let positiveOdd = arrOne.filter(el => (el > 0 && (el % 2 !== 0)));
let sumPosOdd = positiveOdd.reduce((a, b) => a + b);

console.log(`The sum of odd positive elements = ${sumPosOdd}`);
console.log('___________');


// 9  добуток позитивних елементів.

let positiveElement = arrOne.filter(el => el > 0);
let multiplyPos = positiveElement.reduce((a, b) => a * b);

console.log(`product of positive elements = ${multiplyPos}`);
console.log('___________');

// 10 найбільший серед елементів масиву, остальні обнулити.


let maxElement = Math.max(...arrOne);
let maxIndex = arrOne.indexOf(maxElement);
arrOne.forEach((el, index, arr0) => { if (index !== maxIndex) arr0[index] = 0; });

console.log(`Zeroed: ${arrOne}`);
console.log('___________');