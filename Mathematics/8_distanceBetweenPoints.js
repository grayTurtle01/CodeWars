// get the distance between two points 

//Parameters : Point, Point
//Result: Number
//Example: (0,0), (3,4) --> 5

function distanceBetweenPoints(a, b) {
  
  d = Math.sqrt( (a.x - b.x)**2 + (a.y-b.y)**2 )
  return d
  
}

console.log( )
