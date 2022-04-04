function list(names){
    
  names_str = []
  
  names.forEach( obj => {
    name = obj.name
    names_str.push(name)
  })
  
  result = ""
  
  if( names_str.length == 1)
    result = names_str[0]
    
  else if ( names_str.length == 2)
    result = names_str[0] + " & " + names_str[1]
  
  else if ( names_str.length > 2){
    for( i in names_str){
      if( i == (names_str.length-1) )
        result += names_str[i] + ""
      else if( i == (names_str.length -2) )
        result += names_str[i] + " & "
      else
        result += names_str[i] + ", "
    }
  }
  
  return result
  
}

console.log( list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'},{name: 'Homer'}, {name: 'March'} ])
 )
