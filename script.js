// 1

const str = "wyyga";
const alphabetRegExp = /([a-z])(?!.*\1)/g;
const hasAllLetters = (str.match(alphabetRegExp) || []).length === 26;

console.log(hasAllLetters);
console.log('__________')

const str1 = "qwertyuioplkjhgfdsazxcvbnm";
const alphabetRegExp1 = /([a-z])(?!.*\1)/g;
const hasAllLetters1 = (str1.match(alphabetRegExp1) || []).length === 26;

console.log(hasAllLetters1);
console.log('__________')

const str2 = "ejuxggfsts";
const alphabetRegExp2 = /([a-z])(?!.*\1)/g;
const hasAllLetters2 = (str2.match(alphabetRegExp2) || []).length === 26;

console.log(hasAllLetters2);
console.log('__________')

const str3 = "qpwoeirutyalskdjfhgmznxbcv";
const alphabetRegExp3 = /([a-z])(?!.*\1)/g;
const hasAllLetters3 = (str3.match(alphabetRegExp3) || []).length === 26;

console.log(hasAllLetters3);
console.log('__________')

const str4 = "qqqqqqqqpwoeirutyalskdjfhgmznxbcv";
const alphabetRegExp4 = /([a-z])(?!.*\1)/g;
const hasAllLetters4 = (str4.match(alphabetRegExp4) || []).length === 26;

console.log(hasAllLetters4);
console.log('__________')

const str5 = "0123456789abcdefghijklmnop";
const alphabetRegExp5 = /([a-z])(?!.*\1)/g;
const hasAllLetters5 = (str5.match(alphabetRegExp5) || []).length === 26;

console.log(hasAllLetters5);
console.log('__________')

// 2

// a)

function getLongWords(strArray) {

    strArray = strArray.replace(/,/g, ' '); // Удалить запятые из строки
    strArray = strArray.split(' '); // Разделить строку на слова
    const avgLength = strArray.reduce((total, word) => total + word.length, 0) / strArray.length; // Вычислить среднюю длину слов
    return strArray.filter(word => word.length > avgLength); // Фильтровать слова, длина которых больше средней длины
}
const solution = "This is a sample string";
const longWords = getLongWords(solution);
console.log(longWords);
console.log('__________')


// b)

function getLongArray(strArr) {
    strArr = strArr.replace(/,/g, ' '); // Удалить запятые из строки
    strArr = strArr.split(' '); // Разделить строку на слова
    const arrayLength = strArr.reduce((total, word) => total + word.length, 0) / strArr.length; // Вычислить среднюю длину слов
    return strArr.filter(word => word.length > arrayLength); // Фильтровать слова, длина которых больше средней длины

}
const solution1 = "Some another sample";
const longArray = getLongArray(solution1);

console.log(longArray);
console.log('__________')


// c)

function getLongArr(arr) {
    arr = arr.replace(/,/g, ' '); // Удалить запятые из строки
    arr = arr.split(''); // Разделить строку на слова
    const arrLength = arr.reduce((total, word) => total + word.length, 0) / arr.length; // Вычислить среднюю длину слов
    return arr.filter(word => word.length > arrLength); // Фильтровать слова, длина которых больше средней длины

}

const solution2 = "Do, do, do, do... do it!";
const longArr = getLongArr(solution2);

console.log(longArr);
console.log('__________')



// 3



const database = {
    adminPassword: 'q987654321y',
    registeredGuests: [], // зарегистрированные гости
};


const user = {
    email: 'user@mail.com',
    __proto__: database,
};


const admin = {
    verified: true,
    __proto__: user,
};


const guest = {
    register: function() {
        this.__proto__.registeredGuests.push(this);
    },
    __proto__: database,
};


console.log(user.email);
console.log(admin.email);
console.log(admin.verified);
console.log(database.adminPassword);

guest.register();
console.log(database.registeredGuests);