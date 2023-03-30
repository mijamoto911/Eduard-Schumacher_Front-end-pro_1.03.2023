const arr = [
    [
        [
            [8]
        ]
    ]
];

function getFactorial(arr) {
    if (arr === 0) {
        return 1;
    } else {
        return arr *= getFactorial(arr - 1);
    }
}

let arrNumber = getFactorial(8);
console.log(arrNumber);




// 2 


const calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }


};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());