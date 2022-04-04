function arrayDiff(a, b) {
  result = a
  
  b.forEach( y => {
    result = result.filter( x => (x != y) )
  })
  
  return result
}

