function getFirstPython(list) {
  for( dev of list )
    if( dev.language == 'Python')
      return `${dev.firstName}, ${dev.country}`
      
  return "There will be no Python developers"
}
