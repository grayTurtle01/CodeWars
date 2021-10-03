function accum(s) {
    let char_array = s.split('');
    let result = "";
    char_array.forEach((char, index) => {
        let chonck = char.repeat(index + 1).toLowerCase();
        let first_letter = chonck[0].toUpperCase();
        let format_chonk = first_letter + chonck.slice(1);
        result += format_chonk + '-';
    });
    return result.slice(0, -1);
}
console.log(accum('abcD'));
