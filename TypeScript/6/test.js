"use strict";
exports.__esModule = true;
exports.decodeMorse = void 0;
var preloaded_1 = require("./preloaded");
function decodeMorse(morseCode) {
    var words = morseCode.split("   ");
    var message = "";
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var letters = word.split(" ");
        for (var _a = 0, letters_1 = letters; _a < letters_1.length; _a++) {
            var letter = letters_1[_a];
            if (letter != '')
                message += preloaded_1.MORSE_CODE[letter];
        }
        message += " ";
    }
    return message.trim();
}
exports.decodeMorse = decodeMorse;
