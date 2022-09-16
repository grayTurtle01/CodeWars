function shiftedDiff(first,second){

    if( first == second )
        return 0
    
    rotations = 0

    while( rotations < first.length ){
        first = rotateString( first )
        rotations++

        console.log(first)

        if( first == second )
            return rotations
        
    }

    return -1
    
}

function rotateString( str ){
    last = str[str.length -1 ]
    
    result = last + str.slice(0, str.length-1)
    return result
}


console.log(shiftedDiff("coffee", "eecoff" ) )
