function toCamelCase(str){
  if( str.includes('-') )
    words = str.split('-')
  else if(str.includes('_') )
    words = str.split('_')
  else
    return ''
  
  r = words[0]
  for(i=1; i < words.length; i++){
    word = words[i]
    first_letter = word[0].toUpperCase()
    lower_letters = word.slice(1)
    camelWord = first_letter + lower_letters
    
    r += camelWord
  }
 
 console.log(r)
 return r   
}

toCamelCase("The_Stealth_Warrior")
