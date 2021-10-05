function getSum(a, b) {
    let sum = 0;
    let min;
    let max;
    if (a <= b) {
        min = a;
        max = b;
    }
    else {
        min = b;
        max = a;
    }
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(5, 5));
