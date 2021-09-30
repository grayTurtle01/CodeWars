"use strict";
exports.__esModule = true;
exports.descendingOrder = void 0;
function descendingOrder(n) {
    // your code here
    //let str_n = String(n).split('').sort((a:string,b:string) => (b-a) ).join('')
    var str_n_sorted = String(n).split('').sort().reverse().join('');
    return Number(str_n_sorted);
}
exports.descendingOrder = descendingOrder;
