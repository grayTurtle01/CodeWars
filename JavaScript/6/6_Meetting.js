//Sort Names by Last Name and First Name

function meeting(s) {
  // names
  names = s.split(";")
  console.log(names)
  
  // capital names
  names = names.map( name => name.toUpperCase())
  console.log(names)
  
  // sort names
  for(i = 0; i <names.length-1; i++){
    for(j = i+1; j < names.length; j++){
      if( areSorted(names[i], names[j]) == false ){
          tmp = names[i]
          names[i] = names[j]
          names[j] = tmp
      }
    }
  }
  
  // formating result
  result = ""
  names.forEach( name => {
    [first, last] = name.split(":")
    result +=`(${last}, ${first})`  
  })
  
  return result
}

function areSorted(name1, name2 ){
  const [first1, last1] = name1.split(":")
  const [first2, last2] = name2.split(":")
  
  if( last1 < last2)
    return true
  else if( last1 > last2)
    return false
  else if ( last1 == last2)
    if( first1 < first2 )
      return true
    else if( first1 > first2 )
      return false
    else
      return true
    
}


