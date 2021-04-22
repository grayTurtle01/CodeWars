function order(string){
  words = string.split(" ")
  r = ""
  
  for(i=1; i<=words.length; i++)
    for(word of words)
      if( word.includes(i) )
        r += word + " "
  
  r = r.trim()
  return r
}
