function alphabetPosition(text) {
  new_text = ""
  
  for(i=0; i< text.length; i++){
    c = text[i].toLowerCase()
    n = c.charCodeAt()
    if( (n>= 97) && (n < 97 + 26)){
      n = n - 96 
      new_text += n + " "
    }
  } 
  new_text = new_text.slice(0,new_text.length-1)
  return new_text
}


new_text = alphabetPosition("The sunset sets at twelve o' clock.")
//~ new_text = alphabetPosition("abc")
console.log( new_text)
