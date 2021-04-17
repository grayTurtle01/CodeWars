function sumOfABeach(beach) {
  v = beach.match(/sun|sand|water|fish/ig)
  if( v == null)
    return 0
    
  return v.length
}

console.log(sumOfABeach("sanD"))
