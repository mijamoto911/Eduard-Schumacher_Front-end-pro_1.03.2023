// 1

const arr = ["programming", "product", "procrastination"];
const program = arr.reduce(function(x, y) {
    let z = [];
    for (i = 0; i < x.length; i++) {
        if (x[i] === y[i]) {
            z[i] = x[i];
        } else break;
    }
    x = z.join("");
    return x;
});
console.log(program);

console.log('________')


//2  a)  Функция для преобразования двумерного массива в трехмерный

function twoToThreeDimensions(twoDimArray) {
    let threeDimArray = [];
    let tempArray = [];
    for (let i = 0; i < twoDimArray.length; i++) {
        for (let j = 0; j < twoDimArray[i].length; j++) {
            tempArray.push(twoDimArray[i][j]);
            if (tempArray.length === 3) {
                threeDimArray.push(tempArray);
                tempArray = [];
            }
        }
    }
    if (tempArray.length > 0) {
        threeDimArray.push(tempArray);
    }
    return threeDimArray;
}

const input = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const output = twoToThreeDimensions(input);
console.log(output);
console.log('________')

// b) Функция для преобразования трехмерного массива в двумерный


function threeToTwoDimensions(threeDimArray) {
    let twoDimArray = [];
    for (let i = 0; i < threeDimArray.length; i++) {
        for (let j = 0; j < threeDimArray[i].length; j++) {
            if (twoDimArray[j] === undefined) {
                twoDimArray[j] = [];
            }
            twoDimArray[j][i] = threeDimArray[i][j];
        }
    }
    return twoDimArray;
}

const input2 = [
    [1, 2, 3],
    [4, 5, 6]
];
const output2 = threeToTwoDimensions(input2);
console.log(output2);

console.log('_______');

// c

function splitArrays(arrays, lengths) {
    const result = [];
    for (let i = 0; i < arrays.length; i++) {
        const array = arrays[i];
        const len = lengths[i];
        let index = 0;
        const splitArray = [];
        while (index < array.length) {
            splitArray.push(array.slice(index, index + len));
            index += len;
        }
        result.push(...splitArray);
    }
    return result;
}
const array = [
    [1, 2, 3],
    [4, 5, 6]
];

const result = splitArrays(array, 5);
console.log(result);