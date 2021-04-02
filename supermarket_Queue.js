function queueTime(customers, n) {
  tills = []

  // initial state
  for(i = 0; i < n; i++)
    if( customers.length > 0)
      tills[i] = customers.shift()
    else
      break
    
  total_time = 0

  
  //~ while( (tills[0] > 0) || (tills[tills.length-1] > 0) ){
  while( areTillsEmpty(tills) === false ){
    min_time = min_positive(tills)
    total_time += min_time
    for(i = 0; i < tills.length; i++){
      tills[i] -= min_time
      
      if( tills[i] == 0 && customers.length > 0)
        tills[i] = customers.shift()
    }
    console.log( tills )
  }

  //console.log(total_time)
  return total_time
}

function min_positive( v ){
  min_val = 10000
  v.forEach( num => {
    if( num < min_val && num > 0 )
      min_val = num
  })
  
  return min_val
}

function areTillsEmpty( tills ){
  
  for(i=0; i < tills.length; i++)
    if( tills[i] > 0 )
      return false
  
  return true
}


//~ customers = [1,2,3,4,5]
customers = [32,4,28,11,30,27,44,11,35,8,32,37,4,32,12,34,8] 
n = 3

queueTime(customers, n)
