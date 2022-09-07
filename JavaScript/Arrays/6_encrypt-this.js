// Encrypt text
//  1. The first letter of each word changed for ascii-code
//  2. The second letter exchanged with the last letter

// Parameters: String
// Return: String
// Example: "Abc Bcdf" --> "65cb 66fdc"


var encryptThis = function(text) {
    let words = text.split(" ")

    let new_words = []

    for( word of words ){
        let new_word = encryptWord(word)
        new_words.push(new_word)
    }
    
    let new_text = new_words.join(" ")
    return new_text
}

function encryptWord(word){
    let letters = word.split("")
    
    let code = word[0].charCodeAt()
    let second = word[1]
    let last = word[ word.length - 1]


    if( word.length == 1)
        return code
    

    letters[0] = code
    letters[1] = last
    letters[word.length - 1 ] = second


    let new_word = letters.join("")
    return new_word
}

//~ console.log(encryptWord("Abc"))
console.log(encryptThis("Abc Bcdf"))
