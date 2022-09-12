function dup(s) {
    let result = []

    for( word of s ){
       new_word = remove_duplicate_letters(word)
       result.push(new_word) 
    }

    return result
};

function remove_duplicate_letters(word){

    let result = word[0]

    for(i=1; i < word.length; i++){
        c = word[i]
        last_c = result[ result.length - 1]

        if( c != last_c ){
            result += c
        }
        
    }

    return result
}

console.log( dup(["abc", "aaabbbcccddd",  "abbc", "aaaa"]))
