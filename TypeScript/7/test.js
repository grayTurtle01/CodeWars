function findShort(s) {
    let words = s.split(" ");
    let min_length = 1000;
    for (let word of words) {
        if (word.length < min_length) {
            min_length = word.length;
        }
    }
    return min_length;
}
console.log(findShort("hello world"));
