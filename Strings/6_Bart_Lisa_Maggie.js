function list(names){
    
  names_str = []
  
  names.forEach( obj => {
    name = obj['name']
    names_str.push(name)
  })
  console.log(names_str, names_str.length)
  
  r = ""
  
  if( names_str.length == 1)
    r = names_str[0]
    
  else if ( names_str.length == 2)
    r = names_str[0] + " & " + names_str[1]
  
  else if ( names_str.length > 2){
    
    for( index in names_str){
      // only with this shit work ???
      if( index == 'suffle')
        break
      //last name
      if( index == (names_str.length-1) )
        r += names_str[index] + ""
      //penultimate  
      else if( index == (names_str.length -2) )
        r += names_str[index] + " & "
      //others
      else
        r += names_str[index] + ", "
    }
  }
  
  console.log(r)
  //console.log(r == 'Bart, Lisa, Maggie, Homer & Marge')
  return r
  
}

//~ list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
//~ list([ {name: 'Bart'}, {name: 'Lisa'}])
//~ list([ {name: 'Bart'}])
//~ list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'} ])
list([ { name: 'Bart' },
  { name: 'Lisa' },
  { name: 'Maggie' },
  { name: 'Homer' },
  { name: 'Marge' } ])
