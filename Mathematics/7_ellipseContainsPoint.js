// determine if a point is inside in an ellipse area

//Parameters : Point, Point, Number, Point
//Result: Boolean
//Example: 

function ellipseContainsPoint(f0, f1, l, p) {
  
  d1 = Math.sqrt( (p.x - f0.x)**2 + (p.y - f0.y)**2 )
  d2 = Math.sqrt( (p.x - f1.x)**2 + (p.y - f1.y)**2 )
  
  if( (d1 + d2) <= l )
    return true

  return false

}


console.log( )
