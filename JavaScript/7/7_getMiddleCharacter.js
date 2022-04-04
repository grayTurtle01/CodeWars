function getMiddle(s){
  length = s.length
  index = parseInt(length/2)
  
  if( length % 2 == 1)
    return s[ index ]  
  else
    return s[index-1] + s[index]

}
