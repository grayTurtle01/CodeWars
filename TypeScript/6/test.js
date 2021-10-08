function narcissistic(value) {
    // get digits
    var digits = value.toString().split("");
    // sum values
    var total = 0;
    var power = digits.length;
    digits.forEach(function (digit) {
        var base = parseInt(digit);
        total += Math.pow(base, power);
    });
    // check result
    if (total == value)
        return true;
    return false;
}
console.log(narcissistic(153));
