const arr = [1, 22, 31, 4, 55, 6, 34, "June", "Winter"];

const filteredArray = arr.filter((array, item) => item !== 7);

console.log(filteredArray);

console.log('_________')

const sum = (a, b) => {
    const result = a * b;
    return result;
};

console.log(sum(17, 8));

// module.exports = { filteredArray };

export { filteredArray, sum };