function get_letter_index(letter){
    letter = letter.toUpperCase()

    index = letter.charCodeAt() - 64
    return index
}


function rotN_letter(c, delta){
    isLower = false

    if( /^[a-z]$/.test(c) ){
        isLower = true
        c = c.toUpperCase()
    }
    
    code = c.charCodeAt()


    if( code + delta > 90 )
        new_code = 64  + ( ( code + delta) % 90 )
    else
        new_code = code + delta
    
    new_letter = String.fromCharCode(new_code)

    if( isLower )
        return new_letter.toLowerCase()
        
    return new_letter 

}


