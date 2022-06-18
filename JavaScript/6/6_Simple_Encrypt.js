function encrypt(text, n) {
    
    if( text == null || text.length == 0 || n < 0)
        return text
    
    result = text
    
    for(let j = 0; j < n; j++){
        result = ''
        evens = ''
        odds = ''
           
        for(let i = 0; i < text.length; i++){
            c = text[i]
            if( i % 2 == 0 ){
                evens += c 
            }
            else{
                odds += c
            }
        }
        result = odds + evens
        text = result
    }

    return result
}

function decrypt(text, n){
    if( text == null || text.length == 0 || n < 0)
        return text
    
    
    let odds = ''
    let evens = ''
    
    result = text
    for( j = 0; j < n; j++){
        result = ''
        odds = text.slice(0, text.length/2)
        evens = text.slice(text.length/2)
        
        for( i = 0; i < odds.length; i++){
            result += evens[i] + odds[i]
        }

        if( evens.length > odds.length)
            result += evens[evens.length-1]

        text = result
        odds = ''
        evens = ''
    }
    

    return result
}

//~ console.log(encrypt("0123456", 3))
console.log(encrypt(null, 0))
//~ console.log(decrypt("0123456", 3))
//~ x = 1
//~ console.log(x == null)
