function toWeirdCase(string){
  let words = string.split(" ")

  wordsToggle = words.map( word => toggleCase(word) )  

  result = wordsToggle.join(" ")
  return result  
  
}

function toggleCase(word){
    s = ''
    for(i = 0; i < word.length; i++){
        c = word[i]
        if( i % 2 == 0)
            s += c.toUpperCase()
        else
            s += c.toLowerCase()
    }
    return s
}

console.log(toggleCase('abcdEFG'))
console.log(toWeirdCase("hello World"))
