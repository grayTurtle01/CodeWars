// determine if the instruction of an array are correct
// the walk must be 10 steps
// the walk must return to origin

//Parameters : Array of letters
//Result: Boolean
//Example: ['n','s','w','e'] --> false

function isValidWalk(array) {  
  if( array.length != 10 )
    return false
  
  n = array.filter( direction => direction == 'n' )
  s = array.filter( direction => direction == 's' )
  if( n.length != s.length )
    return false
  
  w = array.filter( direction => direction == 'w' )
  e = array.filter( direction => direction == 'e' )
  if( w.length != e.length )
    return false
  
  return true
}

console.log( isValidWalk(['n','s','w','e','n','s','w','e','n','s']) )
