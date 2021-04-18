function whySoSerious(str) {
  words = ['Jc', '7s', '5s', 'As', '9c']
  for( word of words)
     if( str.search(word) == -1 )
        return false
  
  return true
}
