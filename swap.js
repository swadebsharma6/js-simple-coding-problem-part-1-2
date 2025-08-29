let a = 9;
let b = 12;

const temp = a;
a = b;
b = temp;

// console.log(a, b);

let x = 5;
let y = 7;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y)