function generateHashtag (str) {
  if(str == "")
    return false
  
  words = str.match(/\w+/ig)
  
  if( words == null)
    return false
  
  r = "#"
  for(word of words){
    firsLetter = word[0].toUpperCase()
    letters = word.slice(1)
    
    new_word = firsLetter + letters
    r += new_word
  }
  
  if( r.length > 140)
    return false
    
  console.log(r)
  return r
}

//~ generateHashtag(" Hello there thanks for trying my Kata")
generateHashtag(" ")
