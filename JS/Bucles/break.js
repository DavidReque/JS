let factorial = 1;
let num = 10;
while (num > 1) {
    factorial *= num
    num--
    if (num === 1) break;
}

console.log(factorial);