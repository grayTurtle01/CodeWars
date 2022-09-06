function titleCase(title, minorWords) {
    let words = title.toLowerCase().split(" ")

    let exceptions = []
    if( minorWords )
        exceptions = minorWords.toLowerCase().split(" ")

    words = words.map( (word, index) => {
        
        if( exceptions.includes( word ) && index > 0 ){
            return word
        }
        else
            return capitalize(word)
    })


   return words.join(" ") 
}


function capitalize(word){

    if( word ){
        let Capital = word[0].toUpperCase()
        let lowers = word.slice(1).toLowerCase()

        return Capital + lowers
    }
    
    return word
}


console.log( titleCase('', '') )
