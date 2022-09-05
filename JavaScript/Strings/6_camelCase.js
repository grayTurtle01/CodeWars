String.prototype.camelCase = function(){

    if( this.length == 0 )
        return ""

    let text = this.trim()
    words = text.split(" ")

    result = ''
    for(word of words ){
       let W = word[0].toUpperCase()
       let ord = word.slice(1) 
       result += W + ord
    }
    
    return result
}

let s = " hello world"
console.log(s.camelCase())
