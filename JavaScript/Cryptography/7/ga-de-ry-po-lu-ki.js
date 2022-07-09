// ga-de-ry-po-lu-ki
// Case sensitive

let couples = ['ga','de','ry','po', 'lu', 'ki']

function encode(str){
    encoded_msg = ''

    for( c of str ){
       encoded_letter = encodeLetter(c)
       encoded_msg += encoded_letter 
    }

    return encoded_msg
       
}

function decode(str) {
    decode_msg = encode(str)

    return decode_msg  
}

function findLetter(c){
    c = c.toLowerCase()

    for( couple of couples ){
        if( couple.includes(c) ){
            return true
        }
    }

    return false
}

function encodeLetter(c){
    isUpperCase = false

    if( /[A-Z]/.test(c) ){
        isUpperCase = true
    }

    letter = c.toLowerCase()

    encoded_letter = ''
    
    for( couple of couples ){
        if( couple.includes(letter) ){

            index = couple.indexOf(letter)
            if( index == 0 ){
                encoded_letter = couple[1]
            }
            else{
                encoded_letter = couple[0]
            }

            if( isUpperCase )
                return encoded_letter.toUpperCase()
            else
                return encoded_letter
        }
    }

    return c
    
}

function decodeLetter(c){
    decodeLetter = encodeLetter(c)
}

console.log(encode('ABCD'))
console.log(encode("Ala has a cat"))

console.log(decode('GBCE'))
console.log(decode('Gug hgs g cgt'))
