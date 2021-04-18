function tripleX(str){
  
  array = str.match(/x+/g)
  if( array == null)
    return false
  
  if( array[0] == 'xxx')
    return true
    
  return false
}
