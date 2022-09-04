function alphanumeric(string){
    
    if( !string )
        return false

    if( string.includes('_') || string.includes(' '))
        return false

    for( c of string.toLowerCase() ){
        if( "abcdefghijklmnopqrstuvwxyz1234567890".includes(c) )
            continue
        else
            return false
    }

    return true
}

console.log(alphanumeric('     '))
