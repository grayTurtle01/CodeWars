// Decode message with reverse letters:
// 'a' --> 'z',
// 'b' --> 'y'
// 'z' --> 'a'


let letters = "abcdefghijklmnopqrstuvwxyz".split('')

function decode(message){
    result = ''
    for( c of message ){
       decoded_letter = reverseLetter(c)
       result += decoded_letter 
    }

    return result
}

function reverseLetter(letter){

    if( /[a-z]/.test(letter) ){
    
        index = letters.indexOf(letter)
        reverse_index = 25 - index

        reverse = letters[reverse_index]

        return reverse
    }

    return letter
}

console.log(decode('r slkv mlylwb wvxlwvh gsrh nvhhztv'))


