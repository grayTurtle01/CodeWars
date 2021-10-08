function findNb(m) {
    var large = 1;
    var total_V = 0;
    while (total_V < m) {
        total_V += Math.pow(large, 3);
        large++;
    }
    if (total_V == m)
        return large - 1;
    else
        return -1;
}
console.log(findNb(91716553919377));
