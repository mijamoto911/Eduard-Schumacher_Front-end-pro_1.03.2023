// 1

let y = 10;
let x = '';
for (; y < 20; y++) {
    x += y + ',';
};
console.log(x);
console.log("______")

//  NUMBER 1

let v = 10;
let t = '';
for (; v < 20; v++) {
    t += `${v},`;

}
console.log(t)
console.log("______")







//  2

let z = 10;
let str = '';
for (; z <= 20; z++) {
    str += `${Math.pow(z, 2)},`;

}
console.log(str);
console.log("______")


//WHILE

let q = 10;
let string = '';
while (q <= 20) {
    string += `${Math.pow(q, 2)},`;
    q++
}
console.log(string)
console.log("______")




// 3

let b = 15;
let a = 1;
for (; a <= 35; a++) {
    b *= a;
}
console.log(b);
console.log("______")

//WHILE

let f = 15;
let w = 1;
while (w <= 35) {
    f *= w;
    w++;
}
console.log(f);
console.log("______")




// 4

let n = 500;
let s = 0;
let i = 1;
for (; i <= n; i = i + 1) {
    s = s + i;
}
s = s / n;
console.log(s);
console.log("______")



// 5

let k = 30

for (; k <= 80; k++) {

    if (k % 2 === 0) {
        console.log(k);

    }

}
console.log("______")

// 6

for (let r = 100; r <= 200; r++) {

    if (r % 3 === 0) {
        console.log(r);

    }
}
console.log("______")



// 7

//  NUMBER 1
let c = 11;
let d, h;

next:
    for (let h = 2; h <= c; h++) {
        for (let d = 2; d < h; d++) {
            if (h % d === 0) continue next;
        }
        console.log(h);

    }
console.log("______")

//  NUMBER 2

const sampleInt = 7;
let primeBool = true;
let m;
if (sampleInt > 1) {
    for (m = 2; m < sampleInt; m++) {
        if (sampleInt % m == 0) {
            primeBool = false;
            break;
        }
    }
}
if (primeBool) {
    console.log(`${sampleInt} is a prime number`);
} else {
    console.log(`${sampleInt} is a not prime number`);

}
console.log("______")


//  NUMBER 3

const number = Math.floor(Math.random() * 100);
let flag = false;
if (number == 1) {
    console.log(" 1 is neither prime nor composite");
} else if (number > 1) {
    for (let w = 2; w < number / 2; w++) {
        if (number % w == 0) {
            flag = true;
            break;
        }
    }
    if (flag == true) console.log(`${number} is not a prime number`);
    else console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is not a prime number`);
}