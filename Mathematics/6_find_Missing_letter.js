// find the Missing letter

//Parameters : Array of letters
//Result: letter
//Example: ['a','c'] --> 'b'

function findMissingLetter(array){

  for(i=0; i<array.length; i++){
    
    letter = array[i]
    next = array[i+1]
    
    letter_ascii = letter.charCodeAt()
    next_ascii = next.charCodeAt()
    
    if( letter_ascii != (next_ascii -1)  ){
      ascii = letter.charCodeAt()
      return String.fromCharCode( ascii + 1)
    }
    
  }
}

console.log( findMissingLetter(['a','b','c','d','f']))
