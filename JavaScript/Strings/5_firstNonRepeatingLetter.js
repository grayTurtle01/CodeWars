function firstNonRepeatingLetter(s) {
  console.log(s)
  obj = {}
  
  if(s.length == 1 | s == "")
    return s
  
  for(i=0; i < s.length-1; i++){
    if( s[i] in obj)
      continue
    
    obj[s[i]] = 0
    
    for(let j = i+1;  j < s.length; j++){
      console.log(s[i], ' --> ', s[j])
      if(s[i].toLowerCase() == s[j].toLowerCase()){
        obj[s[i]] = 1
        break
      }
    }
    console.log(obj)
    
    if(obj[s[i]] == 0)
      return s[i]
    
  }
  
  if( s[s.length-1] in obj == false )
    return s[s.length-1]
  
  return ""
}
