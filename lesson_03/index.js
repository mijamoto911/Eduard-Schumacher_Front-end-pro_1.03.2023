let num1 = +prompt('') || 0;
let num2 = +prompt('') || 22;

let num3 = num1 && num2 ? 80 : 40;

const obj = {};


if (num1 >= 90) {
    obj.size = 'big';
} else if (num1 <= 40) {
    obj.size = 'small';
} else {
    obj.size = 'medium';
}


let num4;

switch (obj.size) {
    case 'big':
        num4 = 1000;
        break;
    case 'medium':
        num4 = 100;
        break;
    case 'small':
        num4 = 10;
        break;
}

let result = num1 * num2 * num3 * num4;

if (result % 2 !== 0) {
    console.log('The result is odd!');
} else if (num2 > 50) {
    alert('The second number is greater than 50');
}