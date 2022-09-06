function rot13(str) {
    result = ''
    
    for(c of str){
       if( /[a-zA-Z]/.test(c) ){
          let new_c = rotN_letter(c, 13)
          result += new_c  
       }
       else{
         result += c
       } 
    }

    return result
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


console.log(rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."))
