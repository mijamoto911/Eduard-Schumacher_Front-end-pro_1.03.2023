// 1

// First way

const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const myFunc = (arr) => {
    return arr.filter((el, ind) => ind === arr.indexOf(el));
};
console.log(myFunc(array));
console.log('___________')

// Second way

const names = ['Robert', 'Ilona', 'Petro', 'Maksim', 'Ilona', 'Maksim'];

const uniqueNames = new Set(names);
console.log(Array.from(uniqueNames));
console.log('___________')

// Third way

const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];

const uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2);
console.log('___________')



// 2

let arr = [40, 50, 30, 40, 50, 30, 30, 20, 40, 20, 10, 50, 20, 10, 10, 20, 10];

function mostFrequent(arr) {
    const map = new Map();
    let maxCount = 0;
    let mostFrequentNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        let count = map.get(num) || 0;
        count++;
        map.set(num, count);

        if (count > maxCount || (count === maxCount && num < mostFrequentNum)) {
            maxCount = count;
            mostFrequentNum = num;
        }
    }
    return mostFrequentNum;
}
console.log(mostFrequent(arr));
console.log('___________')


// 3


// Визове undefined


let y = 5;
let x = () => y;
let z = t => {
    let y = 5;
    t();
};
z(x);
console.log('___________');


// 4 


const f = debounce(console.log, 1000);

f(1);
f(2);

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);

function debounce(callback, delay) {
    let timer;
    return function(...arg) {

        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, arg);
        }, delay);
    }
}