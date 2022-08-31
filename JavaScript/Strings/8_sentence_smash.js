function smash(words) {
    let s = ''

    for( word of words ){
       s += word + '' 
    }

    s = slice(0,-1)
    return s
   
};
