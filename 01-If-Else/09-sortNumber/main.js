let x = Number(prompt('Enter number1'));
let y = +prompt('Enter number2');
let z = prompt('Enter number3') * 1;



let max;
let mid;
let min;

if (x > y && X > z) {
    max = x;
    if (y > z) {
        mid = y;

        min = z;

    } else {
        mid = z;
        min = y;
    }
} else if (y > x && y > z) {
    max = y;
    if (x > z) {
        mid = x;
        min = z;
    } else {
        mid = z;
        min = x;
    }
} else if (z > x && z > y) {
    max = z;
    if (x > y) {
        mid = x;
        min = y;
    } else {
        mid = y;
        max = x;
    }
}

console.log(`${max} : ${mid} : ${min}`);

if (x)