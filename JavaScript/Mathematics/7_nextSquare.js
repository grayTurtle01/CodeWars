// find the next perfect square

//Parameters : Number
//Result: Number
//Example: 9 --> 16

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let root = Math.sqrt(sq)
  if( Number.isInteger(root) )
    return (root + 1) ** 2
    
  return -1;
}

console.log( findNextSquare(9) )
