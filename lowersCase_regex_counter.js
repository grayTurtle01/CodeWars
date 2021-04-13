function lowercaseCount(str){
  array = str.match(/[a-z]/g)
  
  if( array == null)
    return 0
    
  return array.length
}

