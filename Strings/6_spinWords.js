function spinWords(string){
  words = string.split(" ")
  
  r = ""
  for(word of words){
    if(word.length >= 5){
      reverse_word = word.split("").reverse().join("")
      r += reverse_word + " "
    }else
      r += word + " "
  }
  r = r.trim()
  return r
}

