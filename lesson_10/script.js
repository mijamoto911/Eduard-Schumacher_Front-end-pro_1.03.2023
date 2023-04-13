// 1


function solution(array) {

    const numbers = {};
    array.forEach(function(i) {
        if (numbers[i]) numbers[i]++;
        else numbers[i] = 1;
    });

    const result = [];
    for (let i in numbers) {
        if (numbers[i] % 2)
            result.push(+i);
    }
    return result;
}

console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));
console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100, ]));
console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]));
console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));
console.log(solution([2, 2, 44, 44]));

console.log('_____________')


// 2


const obj = {
    html: '',

    add(tag, content) {
        this.html += `<${tag}>${content}</${tag}>`;
        return this;
    },

    render() {
        return this.html;
    }
};

obj.add('body', '')
    .add('div', '')
    .add('ul', '')
    .add('li', 'Hello')
    .add('li', 'World')
    .add('ul', '')
    .add('div', '')
    .add('body', '');

console.log(obj.render()); // <body><div><ul><li>Hello</li><li>World</li></ul></div></body>