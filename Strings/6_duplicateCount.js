function duplicateCount(text){
  chars = {}
  
  counter = 0
  
  for(c of text.toLowerCase() )
    if( c in chars){
      chars[c] += 1
      if( chars[c] == 1)
        counter++
   }else
    chars[c] = 0
 
 //console.log(chars, counter)
 return counter  
}

duplicateCount("ABBAaa")
