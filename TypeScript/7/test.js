"use strict";
exports.__esModule = true;
exports.xo = void 0;
function xo(str) {
    var x = 0;
    var o = 0;
    var char_array = str.split('');
    for (var _i = 0, char_array_1 = char_array; _i < char_array_1.length; _i++) {
        var char = char_array_1[_i];
        if (char.toLowerCase() == 'x')
            x += 1;
        else if (char.toLowerCase() == 'o')
            o += 1;
    }
    if (x == o)
        return true;
    return false;
}
exports.xo = xo;
