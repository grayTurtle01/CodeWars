function comp(array1, array2){
  
  console.log(array1, array2)
    
  if(array1 == null || array2 == null)
    return false
  
  areEquals = true
    
  array2.forEach( square => {
    
    let root = Math.sqrt( square )
    
    index = array1.indexOf( root )

    if( index == -1 )
      areEquals = false
      
    array1.splice(index, 1)
  })
  
  return areEquals
}


