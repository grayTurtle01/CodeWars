function dashatize(num) {

    if( typeof(num) != 'number')
        return 'NaN'
    
    num_str = String( Math.abs(num) )
    digits = num_str.split('')

    result = ''

    for( digit of digits ){
        if( digit % 2 == 1 ){
            result += `-${digit}-`
        }
        else{
            result += digit
        }
    }

    if( result[0] == '-')
        result = result.slice(1)

    if( result[result.length -1 ] == '-')
        result = result.slice(0,-1)

    result = result.replace( /--/g, '-')
    
    return result
}


console.log(dashatize(5311))
